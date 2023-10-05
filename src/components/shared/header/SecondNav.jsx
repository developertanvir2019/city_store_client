import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import MyCart from "./MyCart";
const SecondNav = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <>
      {/*<!-- Header --> */}
      <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-primary shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-40 after:block after:h-px after:w-full after:bg-primary lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[4rem] items-stretch justify-between font-medium text-white"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 lg:flex-1"
              to="/"
            >
              <img className="h-12 w-auto" src={logo} alt="city store" />
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-primary px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-secondary lg:px-6"
                  to="/"
                >
                  <span>HOME</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-secondary lg:px-6"
                  to="/shop"
                >
                  <span>SHOP</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-secondary lg:px-6"
                  to="/blog"
                >
                  <span>Blog</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-secondary lg:px-6"
                  to="/login"
                >
                  <span>LOGIN</span>
                </Link>
              </li>
            </ul>
            {/*      <!-- Actions --> */}
            <div className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
              <Link
                to="#"
                className="relative inline-flex h-9 me-4 w-9 items-center justify-center rounded-full text-white"
              >
                <span className="text-2xl">
                  <FiHeart />
                </span>
                <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-secondary px-1.5 text-sm text-white">
                  2<span className="sr-only"> new emails </span>
                </span>
              </Link>
              <label
                htmlFor="my-drawer-4"
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
              >
                <span className="text-2xl">
                  <FaShoppingCart />
                </span>
                <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-secondary px-1.5 text-sm text-white">
                  2<span className="sr-only"> new emails </span>
                </span>
              </label>
            </div>
          </nav>
        </div>
      </header>
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-80 p-0 min-h-full bg-white text-base-content">
            <MyCart />
          </ul>
        </div>
      </div>
    </>
  );
};

export default SecondNav;
