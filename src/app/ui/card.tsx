interface CardProps {
    name: string;
    link: string;
    body: string;
}

const Card = ({ name, link, body }: CardProps) => {
    return (
        <div className="text-center p-8 my-10 border-2 border-black shadow-extraBrutal rounded-lg w-3/4 h-auto bg-yellow-300 md:w-2/5 md:mx-10 md:text-left">
            <p className="mb-5 font-medium md:text-lg">
                {body}
            </p>
            - <a className="text-xl border-b-2 border-black font-bold hover:bg-white" target="_blank" href={link}>{name}</a>
        </div>
    )
  }

export default Card;