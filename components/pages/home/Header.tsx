import React, { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { BiLogInCircle } from "react-icons/bi";
import { useTheme } from "next-themes";
const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => {
    setTheme("business");
  });
  const toggleTheme = () => {
    resolvedTheme === "business" ? setTheme("light") : setTheme("business");
  };
  return (
    <header className="flex justify-around h-20 items-center absolute top-0 left-0 right-0">
      <div className="brand cursor-pointer">
        <Image src="/logo/logo-dark.png" width={105} height={29} alt="logo"></Image>
      </div>
      <nav className="flex gap-6 items-center">
        {/* <button className="btn-primary-500" onClick={toggleTheme}>
          Toggle Theme
        </button> */}
        <p className="inline-flex items-center cursor-pointer rounded px-3 py-2 gap-1 text-white text-sm">
          <Link href="/auth/login">
            <span className=" text-orange-500 ">Log In</span>
          </Link>
          <BiLogInCircle className=" text-orange-500 !text-xl" />
        </p>
        <p className="inline-flex items-center  bg-orange-500 cursor-pointer rounded px-3 py-2 gap-1 text-white text-sm">
          <Link href="/auth/login" className="">
            <span>Sign Up</span>
          </Link>
          <BiLogInCircle className=" !text-xl" />
        </p>
      </nav>
    </header>
  );
};

export default Header;
