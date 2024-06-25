const Hero = () => {
    return (
        <div className="flex flex-col items-center bg-violet-300 pb-10 border-b-2 border-black md:flex-row md:justify-around">
            <div className="block md:hidden mt-5 text-center grow"><p>This site is under construction. Be cool.</p></div>
            <div className="mt-10 md:mt-0">
                <p className="text-3xl md:text-7xl font-bold">Hi, I'm Alexa.</p>
                <p className="md:text-4xl">The personality hire with skills.</p>
            </div>
            <div className="rounded-full border-4 border-black bg-rose-300 mt-10 w-4/6 md:w-2/6 ">
                <img className="rounded-full" src="cutesy-alexa-no-bg.png" />
            </div>
        </div>
    )
  }

export default Hero;