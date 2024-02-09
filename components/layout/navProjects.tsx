"use client";
import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <Link
      href="/"
      className="flex flex-row w-screen pl-10 pr-20 py-3 backdrop-blur-[0.75px] justify-end bg-grey-100 tracking-wider sm:text-[1rem] border-b fixed z-[55] text-green hover:italic hover:bg-green hover:text-off-white"
    >
      <p className="block lowercase underline underline-offset-4">Return</p>
    </Link>
  );
};

export default Nav;
