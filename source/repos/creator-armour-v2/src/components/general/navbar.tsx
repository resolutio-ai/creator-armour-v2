"use client"

import Image from "next/image";
import logo from "../../../public/landingpage/logo-icon.svg"
import { PrimaryButton } from "../evidence/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { WAITLIST_URL } from "@/data/adapter/CMS/settings/data.config";

export default function NavBar() {
    const [isNavbarOpen, toggleNavBarStatus] = useState(false);

    return (
        <nav className="w-full p-5 flex justify-between fixed bg-white shadow-md top-0">
            <Link href="/" className="border border-white hover:animate-pulse">
                <Image src={logo} alt="logo-with-text" className="w-[100%] md:w-[100%]" width={200} height={200} />
            </Link>

            <div className={`${isNavbarOpen ? "hidden" : "flex"}`}>
                <GiHamburgerMenu className={`md:hidden h-full text-primary`} onClick={() => toggleNavBarStatus(!isNavbarOpen)} />
            </div>
            <div className={`${isNavbarOpen ? "block" : "hidden"}`}>
                <AiOutlineClose className={`md:hidden h-full text-primary`} onClick={() => toggleNavBarStatus(!isNavbarOpen)} />
            </div>

            <div className="hidden md:flex">
                <PrimaryButton
                    text="Join Waitlist"
                    disabled={false}
                    link={WAITLIST_URL}
                    isExternal={true}
                    className="w-fit bg-primary text-white px-5 hover:border hover:border-[primary] hover:bg-white hover:text-[#5f437f] py-3"
                />                
            </div>
            {
                isNavbarOpen && (
                    <div className="fixed inset-0 bottom-3 max-h-screen w-full bg-white p-4">
                        <div className={`${isNavbarOpen ? "block" : "hidden"} cursor-pointer`}>
                            <AiOutlineClose onClick={() => toggleNavBarStatus(!isNavbarOpen)} />
                        </div>
                        <div className="p-4 flex justify-center items-center">
                            <PrimaryButton
                                text="Join Waitlist"
                                disabled={false}
                                link={WAITLIST_URL}
                                isExternal={true}
                                className="w-fit bg-primary text-white px-5 py-3 hover:border hover:border-[primary] hover:bg-white hover:text-[#5f437f]"
                            />
                        </div>



                    </div>)
            }

        </nav>
        // On mobile screen show Hamburger on click of 
    )
}