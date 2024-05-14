"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { useState } from "react";
import Navigation from "../components/Navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <Navigation isNav={isOpen} />
      <Header onToggle={() => setIsOpen(!isOpen)} />

      <div className={isOpen ? "ml-[25%]" : "m-auto"}>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-[#944e77] z-50 origin-left"
          style={{ scaleX }}
        />
        <main className="px-6 py-2 max-w-6xl m-auto overflow-hidden bg-[#e6e6e6] dark:bg-[#66023c] dark:text-[#e6e6e6] text-[#363636]">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
