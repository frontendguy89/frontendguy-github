"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Input } from "@headlessui/react";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex my-2 flex-1 flex-shrink-0">
      <Input
        className="peer block w-full rounded-md bg-transparent border outline-2 border-[#666666] pl-6"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
        placeholder="Search&hellip;"
      />
      <MagnifyingGlassIcon className="absolute left-2 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-white peer-focus:text-white" />
      <label htmlFor="search" className="sr-only">
        Search
      </label>
    </div>
  );
}
