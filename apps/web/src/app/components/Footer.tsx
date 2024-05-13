import Link from "next/link";
import { Roboto_Slab } from "next/font/google";
import { motion } from "framer-motion";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

export default function Footer() {
  return (
    <footer className="px-6 py-2 border-t border-solid border-[#666666] bg-[#66023c] dark:bg-[#47012a] text-[#e6e6e6]">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        viewport={{ once: true }}
      >
        <h3 className={robotoSlab.className}>Sitemap</h3>
        <div className="flex flex-col lg:grid grid-cols-3">
          <ul className="uppercase]">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/../blog">Blog</Link>
            </li>
            <li>Projects</li>
            <li>
              <Link href="../contact">Contact</Link>
            </li>
          </ul>
          <ul className="py-2">
            <li>About</li>
            <li>
              <Link href="../privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="../colophon">Colophon</Link>
            </li>
          </ul>
          <address className="mb-6">
            Unit 11, 24 Hillside Crescent,
            <br />
            Oslo Beach, Port-Shepstone,
            <br />
            Kwazulu-Natal, 4240 <br />
            South Africa
            <br />
          </address>
        </div>
        <hr />
        <div className="flex justify-between items-center">
          <div>
            <p>Copyright &copy; 2024. All rights reserved. </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
