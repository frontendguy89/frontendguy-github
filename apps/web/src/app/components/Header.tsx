import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Roboto_Slab } from "next/font/google";
import { Switch } from "@headlessui/react";
import { Bars2Icon, SunIcon, MoonIcon } from "@heroicons/react/16/solid";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "700",
});

export default function Header({ onToggle }: any) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="px-6 py-2 max-w-6xl m-auto flex justify-between items-center border-b border-[#666666] border-solid bg-[#66023c] dark:bg-[#47012a] text-[#e6e6e6] sticky top-0 left-0 w-full">
      <header>
        <Link href="/">
          <h6 className={robotoSlab.className}>@frontendguy89</h6>
        </Link>
      </header>
      <nav className="flex gap-3">
        <Switch
          className="group inline-flex h-4 w-11 items-center rounded-full bg-transparent hover:bg-[#b3819e] text-[#e6e6e6] hover:text-[#333] border transition py-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <span className="size-3 ranslate-x-1 transition group-data-[checked]:translate-x-7">
            {theme === "dark" ? <MoonIcon /> : <SunIcon />}
          </span>
        </Switch>
        <Link href="https://github.com/frontendguy89">
          <Image
            width={64}
            height={64}
            alt="GitHub"
            src="./github-mark-white.svg"
            className="size-4"
            priority
          />
        </Link>
        <Bars2Icon
          className="size-4 cursor-pointer hover:text-white]"
          onClick={onToggle}
        />
      </nav>
    </div>
  );
}
