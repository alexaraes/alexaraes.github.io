import Link from "next/link";

const Page = () => {
    return (
      <>
        <div className="flex flex-col justify-start pt-10 items-center bg-orange-100 pb-10 h-screen">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold">Projects</p>
            <a target="_blank" className="my-5 hover:bg-orange-500 hover:text-white md:text-lg lg:text-2xl" href="https://alexaraes.github.io/GFE-hero-feature/">Responsive Marketing Splash</a>
        </div>
      </>
    )
  }

export default Page;