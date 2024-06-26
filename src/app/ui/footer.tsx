import Link from "next/link";
import NavButton from "./button";
import LinkedIn from "./linkedin";
import Github from "./github";

const Footer = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center border-t-4 border-black bg-redOrange h-36 px-6 sticky top-full text-center md:text-left">
                <p className="text-md">Wow, you made it all the way down here. That's nice of you.</p>
                <div className="flex flex-row justify-around w-2/6 md:w-1/6 mt-4">
                    <a target="_blank" className="hover:rounded-full p-2 hover:bg-blueGreen" href="https://www.linkedin.com/in/alexaraes/">
                        <LinkedIn />
                    </a>
                    <a target="_blank" className="hover:rounded-full p-2 hover:bg-blueGreen" href="https://www.github.com/alexaraes/">
                        <Github />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Footer;