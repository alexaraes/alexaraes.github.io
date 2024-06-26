import { anton } from "../ui/fonts";

const Page = () => {
    return (
      <>
        <div className="flex flex-col justify-start pt-10 items-center pb-10 h-screen bg-lilac">
            <p className={`text-2xl mb-10 md:text-4xl lg:text-6xl font-bold ${anton.className}`}>Contact Me!</p>
            <p>There will be a contact form here at some point.</p>
            <p>For now, you can message me on <a className={`underline my-5 hover:bg-blueGreen`} target="_blank" href="https://www.linkedin.com/in/alexaraes/">LinkedIn</a>.</p>
        </div>
      </>
    )
  }

export default Page;