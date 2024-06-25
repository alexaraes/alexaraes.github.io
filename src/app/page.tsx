import NavBar from "./ui/navbar";

const Page = () => {
    return (
      <>
        <NavBar />
        <div className="flex flex-row justify-around items-center bg-violet-300 pb-10">
          <div className="">
            <p className="lg:text-7xl font-bold">Hi, I'm Alexa.</p>
            <p className="lg:text-4xl">The personality hire with skills.</p>
          </div>
          <div className="rounded-full border-4 border-violet-600 mt-10 lg:w-2/6">
            <img className="rounded-full" src="cutesy-alexa-no-bg.png" />
          </div>
        </div>
      </>
    )
  }

export default Page;