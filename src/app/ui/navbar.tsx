import NavButton from "./button";

const NavBar = () => {
    return (
        <>
            <div className="flex flex-row justify-between items-center border-b-2 border-black h-12 px-6 bg-rose-300">
                <div className="text-lg">
                    ARS
                </div>
                <div>
                    <NavButton title="about" />
                    <NavButton title="projects" />
                    <NavButton title="resume" />
                </div>
            </div>
        </>
    )
}

export default NavBar;