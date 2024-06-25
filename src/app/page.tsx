import NavBar from "./ui/navbar";

const Page = () => {
    return (
      <>
        <NavBar />
        <div className="flex flex-row justify-around items-center bg-indigo-400 pb-10">
          <div className="">
            <p className="lg:text-7xl font-bold">Hi, I'm Alexa.</p>
            <p className="lg:text-4xl">The personality hire with skills.</p>
          </div>
          <img className="rounded-full lg:w-2/6" src="cutesy-alexa-no-bg.png" />
        </div>
      </>
    )
  }

export default Page;