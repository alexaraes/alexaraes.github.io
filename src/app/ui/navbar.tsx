import Link from "next/link";
import NavButton from "./button";

const NavBar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center border-b-2 border-black px-6 bg-violet-700">
                <div className="flex-1 text-white font-medium">
                    <Link href="/" className="text-lg rounded-lg p-2 border-2 border-violet-700 hover:text-black hover:bg-yellow-300 hover:border-black">
                        ARS
                    </Link>
                </div>
                <div className="hidden text-white md:block md:text-center md:grow"><p>This site is under construction. Be cool.</p></div>
                <div className="flex flex-1 justify-end">
                    <NavButton title="about" />
                    <NavButton title="projects" />
                    <NavButton title="contact" />
                </div>
            </div>
        </>
    )
}

export default NavBar;