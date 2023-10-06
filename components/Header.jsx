import Image from "next/image";
import { useState } from "react";
import { Arrow_down } from "../icons";

function Header() {
  const [activeNav, setActiveNav] = useState("");

  return (
    <header className="py-[1rem] px-[10%] bg-white border-b-[0.5rem] border-primary-dark">
      <div className="flex items-center justify-between bsm:justify-center">
        <div className="">
          <img
            src="/images/academy-logo-white-border-black.svg"
            alt="AMEAN Academy Logo"
            className="w-[350px] h-auto bsm:w-[200px]"
          />
        </div>

        <nav className="flex items-center justify-evenly">
          <ul className="flex list-none mb-0 mr-[5px] pr-[1rem] border-r-[1px] border-secondary">
            <li
              className="relative mr-[1.5rem] "
              onMouseOver={() => {
                setActiveNav("Başkan");
              }}
              onMouseLeave={() => {
                setActiveNav("");
              }}
            >
              <span className="font-[400] flex items-center duration-300 ease hover:scale-110 cursor-pointer">
                Projelerimiz <Arrow_down classname="" />
              </span>
              <ul
                className={`min-w-[15rem] py-[0.5rem] my-[0.125rem] text-left list-none bg-white border border-gray-300 rounded-md  z-[1000] top-0 left-0 translate-y-[24px] ${
                  activeNav === "Başkan" ? "absolute" : "hidden"
                }`}
              >
                <li>
                  <a
                    href=""
                    className="select-none hover:bg-gray-100 block w-full py-[0.25rem] px-[1.5rem] font-[400] text-[1rem]"
                  >
                    Özgeçmiş
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="select-none hover:bg-gray-100 block w-full py-[0.25rem] px-[1.5rem] font-[400] text-[1rem]"
                  >
                    Galeri
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="select-none hover:bg-gray-100 block w-full py-[0.25rem] px-[1.5rem] font-[400] text-[1rem]"
                  >
                    Vizyon & Misyon
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="relative">
            <a className=" font-[600] text-center cursor-pointer select-none text-[1rem] no-underline">
              EN
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
