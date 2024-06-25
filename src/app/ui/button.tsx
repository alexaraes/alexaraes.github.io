import Link from "next/link";

interface ButtonProps {
    title: string;
}

const NavButton = ({ title }: ButtonProps) => {
    return (
        <Link href={`/${title}`} className="text-center font-medium rounded-lg hover:bg-yellow-300 hover:text-black m-3 md:mx-3 px-3 py-1 border-2 border-black shadow-brutal bg-violet-700 text-white">
            {title}
        </Link>
    )
}

export default NavButton;