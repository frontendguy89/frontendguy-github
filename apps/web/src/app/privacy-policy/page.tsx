"use client";

import { Roboto_Slab } from "next/font/google";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import { useState } from "react";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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
            <h1 className={robotoSlab.className}>Dear World</h1>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
