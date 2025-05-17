"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navigation = () => {
  const pathName = usePathname();
  useEffect(() => {
    console.log(pathName);
  });
  return (
    <div className={`sticky top-0 left-0 w-full z-30 border-b border-gray-200`}>
      <div className="flex mx-auto backdrop-blur-xs bg-white text-center justify-between items-center px-4 py-3 lg:py-4 lg:px-8">
        <Link href="/">
          <h3 className="flex justify-center items-end font-bold text-xl lg:text-3xl hover:text-black cursor-pointer">
            <span className="relative w-8 h-8 lg:w-10 lg:h-10 mr-1">
              <Image
                src="/logo-metadata.png"
                fill
                alt="logo"
                objectFit="contain"
              />
            </span>
            Larnova
          </h3>
        </Link>
        <ul className="lg:mt-0 flex justify-center lg:justify-start items-center gap-4 lg:gap-8 text">
          <li className="hidden lg:block hover:text-black cursor-pointer">
            Home
          </li>
          <Link href="/lab">
            <li className="hover:text-black cursor-pointer">Lab</li>
          </Link>
          <Link href="/stem">
            <li className="hover:text-black cursor-pointer">STEM</li>
          </Link>
          <li className="hidden lg:block hover:text-black cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
