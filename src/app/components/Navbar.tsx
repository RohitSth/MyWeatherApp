"use client";

import Link from "next/link";
import Image from "next/image";

import Hamburger from "hamburger-react";

import { useState, useEffect } from "react";

import { IoMdArrowRoundBack } from "react-icons/io";

import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="px-4 mx-auto max-w-7xl sm:px-6">
        <div className="relative pt-6 pb-16 sm:pb-24">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="#">
                  <span className="sr-only">Company Name</span>
                  <Image
                    src="https://www.svgrepo.com/show/448244/pack.svg"
                    loading="lazy"
                    width="40"
                    height="40"
                    alt="Logo"
                  />
                </Link>
                <div className="flex items-center -mr-2 md:hidden">
                  {/* <button
                    classNameName="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                    type="button"
                    aria-expanded="false"
                  >
                    <span classNameName="sr-only">Open main menu</span>
                    <GiHamburgerMenu />
                  </button> */}
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

                {/* Hamburger */}
                <div
                  className={`md:hidden fixed inset-0 purple-dark transition-opacity z-20 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  onClick={closeMenu}
                ></div>
                <div
                  className={`md:hidden fixed inset-y-0 left-0 z-30 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                  } flex flex-col w-[75%] bg-white dark:bg-black shadow-xl`}
                >
                  <div className="p-4 ">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md text-gray-300 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="sr-only">Close panel</span>
                      <IoMdArrowRoundBack className="dark:text-white text-black" />
                    </button>
                  </div>
                  <div className="py-6 px-4 ">
                    <h2
                      className="text-base font-semibold leading-6 text-gray-900 dark:text-white "
                      id="slide-over-title"
                    >
                      Panel title
                    </h2>
                    {/* Your content */}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10 list-none">
              <li>
                <Link
                  href="#"
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target=""
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target=""
                >
                  Gallary
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                  target=""
                >
                  Blog
                </Link>
              </li>
            </div>
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <div className="inline-flex rounded-full shadow">
                {/* Theme Change */}
                <ThemeSwitcher />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
