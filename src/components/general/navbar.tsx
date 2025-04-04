"use client";

import Image from "next/image";
import logo from "../../../public/landingpage/logo-icon.svg";
// import { PrimaryButton } from "../evidence/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { WAITLIST_URL } from "@/data/adapter/CMS/settings/data.config";
import { useMagic } from "@/app/context/useMagic";
import Button from "../evidence/button";
import toast from "react-hot-toast";

export default function NavBar() {
  const [isNavbarOpen, toggleNavBarStatus] = useState(false);
  const { magic } = useMagic();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      const LoggedIn = await magic?.user.isLoggedIn();
      setIsLoggedIn(LoggedIn || false);
    };

    checkIsLoggedIn();

    const interval = setInterval(() => {
      checkIsLoggedIn();
      console.log("checking for login status");
    }, 2000);

    return () => clearInterval(interval);
  }, [magic]);

  const handleAuth = async () => {
    if (isLoggedIn) {
      await magic?.user.logout();
      setIsLoggedIn(false);
    } else {
      try {
        await magic?.wallet.connectWithUI();
        setIsLoggedIn(true);
        toast.success(
          `public address : ${
            (await magic?.user.getInfo())?.publicAddress
          } \nlogged in successfully`,
          {
            style: {
              maxWidth: "100%",
              textAlign: "center",
            },
          }
        );
      } catch (error) {
        console.log({ error: error });
      }
    }
  };

  return (
    <nav className="w-full p-5 flex justify-between fixed bg-white shadow-md top-0">
      <Link href="/" className="border border-white hover:animate-pulse">
        <Image
          src={logo}
          alt="logo-with-text"
          className="w-[100%] md:w-[100%]"
          width={200}
          height={200}
        />
      </Link>

      <div className={`${isNavbarOpen ? "hidden" : "flex"}`}>
        <GiHamburgerMenu
          className={`md:hidden h-full text-primary`}
          onClick={() => toggleNavBarStatus(!isNavbarOpen)}
        />
      </div>
      <div className={`${isNavbarOpen ? "block" : "hidden"}`}>
        <AiOutlineClose
          className={`md:hidden h-full text-primary`}
          onClick={() => toggleNavBarStatus(!isNavbarOpen)}
        />
      </div>

      <div className="flex items-center gap-5">
        {isLoggedIn ? (
          <div
            onClick={async () => {
              await magic?.wallet.showUI();
            }}
            className="w-10 h-10 bg-primary rounded-full flex justify-center items-center hover:shadow-lg transition-all"
          >
            {/* could change the svg it to a different file and make it a component for making it cleaner  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
        ) : (
          <div>
            <div className="hidden md:flex">
              <Button
                text={"SignIn / Login"}
                disabled={false}
                onClick={handleAuth}
                className={`w-fit bg-primary text-white px-5 py-3 hover:border hover:border-[primary] hover:bg-white hover:text-[#5f437f] `}
              />
            </div>
            {isNavbarOpen && (
              <div className="fixed inset-0 bottom-3 max-h-screen w-full bg-white p-4">
                <div
                  className={`${
                    isNavbarOpen ? "block" : "hidden"
                  } cursor-pointer`}
                >
                  <AiOutlineClose
                    onClick={() => toggleNavBarStatus(!isNavbarOpen)}
                  />
                </div>
                <div className="p-4 flex justify-center items-center">
                  <Button
                    text={"SignIn / Login"}
                    disabled={false}
                    onClick={handleAuth}
                    className={`w-fit bg-primary text-white px-5 py-3 hover:border hover:border-[primary] hover:bg-white hover:text-[#5f437f]`}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
    // On mobile screen show Hamburger on click of
  );
}
