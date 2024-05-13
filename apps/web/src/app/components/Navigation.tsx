import { useState, useEffect } from "react"
import Link from "next/link";
import { useSearchParams } from 'next/navigation'
import { Roboto_Slab } from "next/font/google";


import Search from "./Search";


const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

export default function Navigation({ isNav }: any) 
{

  return (
    <nav
      className="fixed z-10 pin-y bg-[#47012a] shadow-md h-full sm:w-1/3 lg:w-1/4 border-r border-[#666666] border-solid side-nav opacity-0"
      style={{ display: isNav ? "flex" : "none", opacity: isNav ? 1 : 0 }}
    >
      <div className="flex flex-col text-[#e6e6e6] px-6 py-2 items justify-between">
        <div>
          <h5 className={robotoSlab.className}>Menu</h5>
          <hr className="w-40" />
        </div>
        <ul className="flex flex-col uppercase">
          <li>
            <Link href="./">Home</Link>
          </li>
          <li>
            <Link href="../blog">Blog</Link>
          </li>
          <li>
            <Link href="../contact">Contact</Link>
          </li>
        </ul>
        <div>
          <hr className="w-40" />
          <Search />
        </div>
      </div>
    </nav>
  );
}
