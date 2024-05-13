import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
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
                    className="w-auto h-8 sm:h-10"
                    src="https://www.svgrepo.com/show/448244/pack.svg"
                    loading="lazy"
                    width="202"
                    height="40"
                    alt="Logo"
                  />
                </Link>
                <div className="flex items-center -mr-2 md:hidden">
                  <button
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"
                    type="button"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Open main menu</span>
                    <GiHamburgerMenu />
                  </button>
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
                <Link
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 "
                >
                  Sign in
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
