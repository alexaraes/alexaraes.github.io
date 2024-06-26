import { anton } from "./fonts";

interface CardProps {
    name: string;
    link: string;
    body: string;
}

const Card = ({ name, link, body }: CardProps) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-8 my-10 border-2 border-black bg-white shadow-extraBrutal rounded-lg w-3/4 h-auto md:w-2/5 md:mx-10 md:text-left">
                <p className="mb-5 font-medium md:text-lg">
                    {body}
                </p>
                <p>- <a className={`text-2xl underline my-5 hover:bg-blueGreen ${anton.className}`} target="_blank" href={link}>{name}</a></p>
            </div>
        </>
    )
  }

export default Card;