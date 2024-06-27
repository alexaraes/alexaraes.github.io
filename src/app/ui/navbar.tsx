"use client"

import Link from "next/link";
import NavButton from "./button";
import { usePathname } from "next/navigation";
import { anton } from "./fonts";

const navLinks = [
    {
        title: "about me",
        link: "/about",
    },
    {
        title: "projects",
        link: "/projects",
    },
    {
        title: "contact me",
        link: "/contact",
    },
]

const NavBar = () => {
    const pathname = usePathname();

    return (
        <>
            <div className="flex flex-row border-b-2 border-b-black justify-between items-center py-2 px-6">
                <div className="flex-1 text-white font-medium">
                    <Link href="/" className={`text-xl rounded-lg py-2 px-3 border-2 text-black border-black hover:bg-lilac ${anton.className}`}>
                        ARS
                    </Link>
                </div>
                <div className="flex flex-1 justify-center">
                    {navLinks.map((item, index) => {
                        return (
                            <NavButton key={index} title={item.title} link={item.link} isActive={pathname === item.link} />
                        )
                    })}
                </div>
                <div className="flex flex-1 justify-end">
                    <NavButton title="Download CV" link="alexaSchrefflerResume 2.pdf" />
                </div>
            </div>
        </>
    )
}

export default NavBar;