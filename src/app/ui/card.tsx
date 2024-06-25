interface CardProps {
    name: string;
    link: string;
    body: string;
}

const Card = ({ name, link, body }: CardProps) => {
    return (
        <div className="text-center p-8 my-10 border-2 border-black shadow-extraBrutal w-3/4 md:w-2/5 bg-lime-200 md:mx-10 md:text-left">
            <p className="mb-5 md:text-lg">
                {body}
            </p>
            <a className="text-xl hover:border-b-2 hover:border-black" target="_blank" href={link}>- {name}</a>
        </div>
    )
  }

export default Card;