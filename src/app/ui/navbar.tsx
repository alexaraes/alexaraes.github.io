import Link from "next/link";
import NavButton from "./button";

const NavBar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center border-b-2 border-black h-12 px-6 bg-rose-300">
                <Link href="/" className="text-lg">
                    ARS
                </Link>
                <div>
                    <NavButton title="about" />
                    <NavButton title="projects" />
                </div>
            </div>
        </>
    )
}

export default NavBar;