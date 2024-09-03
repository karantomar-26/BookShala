import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
const GlobalSearch = () => {
  return (
    <div className="relative flex-grow w-full max-w-[600px] mt-[-8px] max-lg:hidden">
      <div className=" relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={24}
          height={24}
          alt="search"
        />

        <Input
          type="text"
          placeholder="Search globally"
          value=""
          className="placeholder rounded-[15px] bg-zinc-200  border-none shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
