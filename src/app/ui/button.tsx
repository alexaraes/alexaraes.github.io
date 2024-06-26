"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface ButtonProps {
    title: string;
}

const NavButton = ({ title }: ButtonProps) => {
    const pathname = usePathname();

    return (
        <Link
            href={`/${title}`}
            className={clsx(
                "text-center font-medium rounded-lg text-white hover:bg-yellow-300 hover:text-black m-3 md:mx-3 px-3 py-1 border-2 border-black shadow-brutal bg-violet-700",
                {
                    'bg-yellow-300 text-black': pathname === `/${title}`
                }
        )}>
            {title}
        </Link>
    )
}

export default NavButton;