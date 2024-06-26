import Link from "next/link";
import clsx from "clsx";
import { anton } from "./fonts";

interface ButtonProps {
    title: string;
    link: string;
    isActive?: boolean;
}

const NavButton = ({ title, link, isActive }: ButtonProps) => {
    return (
        <Link
            href={link}
            className={`text-center font-medium rounded-lg m-3 md:mx-3 p-2 w-max border-2 border-black hover:bg-redOrange hover:shadow-brutal ${anton.className} ${isActive ? 'bg-redOrange shadow-brutal' : 'bg-yellow-400'}`}
        >
            {title}
        </Link>
    )
}

export default NavButton;