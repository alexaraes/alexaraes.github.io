import Link from "next/link";
import NavButton from "./button";

const NavBar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center border-b-2 border-black h-12 px-6 bg-rose-300">
                <div className="flex-1">
                    <Link href="/" className="text-lg">
                        ARS
                    </Link>
                </div>
                <div className="hidden md:block md:text-center md:grow"><p>This site is under construction. Be cool.</p></div>
                <div className="flex flex-1 justify-end">
                    <NavButton title="about" />
                    <NavButton title="projects" />
                </div>
            </div>
        </>
    )
}

export default NavBar;