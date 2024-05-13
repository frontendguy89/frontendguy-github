"use client";
import Welcome from "@/markdown/welcome.mdx";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-3 bg-red-500" style={{ scaleX }} />
      <div className="min-h-screen">
        <Navigation isNav={isOpen} />
        <div className={isOpen ? "ml-[25%]" : "m-auto"}>
          <Header onToggle={() => setIsOpen(!isOpen)} />
          <main className="px-6 py-2 max-w-6xl m-auto overflow-hidden bg-[#e6e6e6] dark:bg-[#66023c] dark:text-[#e6e6e6] text-[#363636]">
            <Breadcrumb
              homeElement={"Home"}
              separator={<span> / </span>}
              activeClasses="ml-2 dark:text-[#e6e6e6]"
              containerClasses="flex py-5"
              listClasses="hover:underline mr-2 font-bold"
              capitalizeLinks
            />
            <article>
              <Welcome />
            </article>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
