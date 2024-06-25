interface ButtonProps {
    title: string;
}

const NavButton = ({ title }: ButtonProps) => {
    return (
        <button className="bg-lime-200 mx-3 px-2 border-2 border-black shadow-brutal">
            {title}
        </button>
    )
}

export default NavButton;