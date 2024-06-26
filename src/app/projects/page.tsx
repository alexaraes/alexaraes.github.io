import { anton } from "../ui/fonts";

const Page = () => {
    return (
      <>
        <div className="page">
            <p className={`text-2xl md:text-4xl lg:text-6xl font-bold ${anton.className}`}>Projects</p>
            <a target="_blank" className="my-5 hover:text-white md:text-lg lg:text-2xl" href="https://alexaraes.github.io/GFE-hero-feature/">Responsive Marketing Splash</a>
        </div>
      </>
    )
  }

export default Page;