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
            <div className="flex flex-row justify-between items-center border-b-4 border-black py-2 px-6 bg-lilac">
                <div className="flex-1 text-white font-medium">
                    <Link href="/" className={`text-xl rounded-lg py-2 px-3 border-2 text-black border-black bg-yellow-400 hover:bg-redOrange ${anton.className}`}>
                        ARS
                    </Link>
                </div>
                <div className="hidden md:block md:text-center md:grow"><p>This site is under construction. Be cool.</p></div>
                <div className="flex flex-1 justify-end">
                    {navLinks.map((item, index) => {
                        return (
                            <NavButton title={item.title} link={item.link} isActive={pathname === item.link} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default NavBar;