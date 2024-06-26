import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
    title: string;
    link: string;
    isActive?: boolean;
}

const NavButton = ({ title, link, isActive }: ButtonProps) => {
    return (
        <Link
            href={link}
            className={`text-center font-medium rounded-lg m-3 md:mx-3 px-2 py-1 w-max border-2 border-black shadow-brutal hover:bg-redOrange ${isActive ? 'bg-redOrange' : 'bg-yellow-400'}`}
        >
            {title}
        </Link>
    )
}

export default NavButton;