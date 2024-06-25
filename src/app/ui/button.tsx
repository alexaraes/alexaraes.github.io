import Link from "next/link";

interface ButtonProps {
    title: string;
}

const NavButton = ({ title }: ButtonProps) => {
    return (
        <Link href={`/${title}`} className="text-center bg-lime-200 mx-3 px-1 border-2 border-black">
            {title}
        </Link>
    )
}

export default NavButton;