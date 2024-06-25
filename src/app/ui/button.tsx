import Link from "next/link";

interface ButtonProps {
    title: string;
}

const NavButton = ({ title }: ButtonProps) => {
    return (
        <Link href={`/${title}`} className="bg-lime-200 mx-3 px-2 border-2 border-black shadow-brutal">
            {title}
        </Link>
    )
}

export default NavButton;