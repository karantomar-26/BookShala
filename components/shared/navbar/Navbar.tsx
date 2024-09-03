"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../../ui/button";
import Image from "next/image";
import GlobalSearch from "../search/GlobalSearch";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex-1 flex pt-1 items-center justify-between sm:items-stretch">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white text-2xl font-bold">
                <Image
                  src="/assets/logo-light.png"
                  width={170}
                  height={170}
                  alt="logo"
                />
              </Link>
            </div>
            <GlobalSearch />

            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-10 w-10",
                },
                variables: {
                  colorPrimary: "#ff7000",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
