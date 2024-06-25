import Link from "next/link";

const Page = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center bg-orange-100 pb-10 h-screen">
            <p className="lg:text-5xl font-bold">Projects</p>
            <a target="_blank" className="my-5 hover:bg-lime-200 lg:text-2xl" href="https://alexaraes.github.io/GFE-hero-feature/">Responsive Marketing Splash</a>
        </div>
      </>
    )
  }

export default Page;