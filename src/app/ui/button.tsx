interface ButtonProps {
    title: string;
}

const NavButton = ({ title }: ButtonProps) => {
    return (
        <button className="mx-3 px-2 border-2 border-black">
            {title}
        </button>
    )
}

export default NavButton;