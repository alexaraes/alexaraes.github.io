"use client"

import Link from "next/link";
import NavButton from "./button";
import { usePathname } from "next/navigation";

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
    console.warn(pathname);
    return (
        <>
            <div className="flex flex-row justify-between items-center border-b-2 border-black px-6 bg-orange-500">
                <div className="flex-1 text-white font-medium">
                    <Link href="/" className="text-lg rounded-lg p-2 border-2 text-black bg-yellow-400 border-black hover:bg-orange-500">
                        ARS
                    </Link>
                </div>
                <div className="hidden text-white md:block md:text-center md:grow"><p>This site is under construction. Be cool.</p></div>
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