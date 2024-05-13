import Link from "next/link";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: "700",
  });

export default function Footer() {
  return (
    <footer className="px-6 py-2 max-w-6xl m-auto border-t border-solid border-[#666666] bg-[#66023c] dark:bg-[#47012a] text-[#e6e6e6] w-full">
        <h3 className={robotoSlab.className}>Sitemap</h3>
      <div className="flex flex-col lg:flex-row items-start justify-between">
        <ul className="uppercase py-2">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/../blog">Blog</Link></li>
          <li>Projects</li>
          <li><Link href="../contact">Contact</Link></li>
        </ul>
        <ul className="uppercase py-2">
            <li>About</li>
            <li><Link href="../privacy-policy">Privacy Policy</Link></li>
            <li>Colophon</li>
        </ul>
      </div>
      <hr />
      <div className="flex justify-between items-center">
      <p>Copyright &copy; 2024. All rights reserved</p>
      </div>
    </footer>
  );
}
