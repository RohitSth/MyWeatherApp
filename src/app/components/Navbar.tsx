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
        <div className="relative py-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <span className="sr-only">Company Name</span>
                  <Image
                    src="https://www.svgrepo.com/show/448244/pack.svg"
                    loading="lazy"
                    width="40"
                    height="40"
                    alt="Logo"
                  />
                </Link>
              </div>
            </div>
            <div>
              <ul className="hidden md:flex md:space-x-10">
                <li>
                  <Link
                    href="#"
                    className="text-base font-normal text-black dark:text-white hover:text-gray-900"
                    target=""
                  >
                    Weather
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base font-normal text-black dark:text-white hover:text-gray-900"
                    target=""
                  >
                    News
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-base font-normal text-black dark:text-white hover:text-gray-900"
                    target=""
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:absolute flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <div className="flex items-center">
                {/* Theme Change Button */}
                <ThemeSwitcher />
              </div>
            </div>

            {/* Hamburger */}
            <div className="flex items-center -mr-2 md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            <div
              className={`md:hidden fixed inset-0 ${
                isOpen
                  ? "opacity-100 bg-black/30"
                  : "opacity-0 pointer-events-none "
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
                  aria-label="Close panel"
                >
                  <span className="sr-only">Close panel</span>
                  <IoMdArrowRoundBack className="dark:text-white text-black" />
                </button>
              </div>
              <div className="py-6 px-4 ">
                {/* Navbar for Hamburger */}
                <ul className="flex flex-col gap-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal text-black dark:text-white hover:text-gray-900"
                      target=""
                    >
                      Weather
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal text-black dark:text-white hover:text-gray-900"
                      target=""
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base font-normal text-black dark:text-white hover:text-gray-900"
                      target=""
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/* Hamburger */}
          </nav>
        </div>
      </div>
    </div>
  );
}
