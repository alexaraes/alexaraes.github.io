const Hero = () => {
    return (
        <div className="flex flex-col items-center bg-orange-100 pb-10 border-b-2 border-black md:flex-row md:justify-around">
            <div className="block md:hidden mt-5 text-center grow"><p>This site is under construction. Be cool.</p></div>
            <div className="mt-10 md:mt-0">
                <p className="text-3xl md:text-7xl font-bold my-4">Hi, I'm Alexa.</p>
                <p className="font-medium md:text-4xl">The <span className="rounded-full px-2 bg-orange-500 text-white">✨personality hire✨</span> with skills.</p>
            </div>
            <div className="rounded-full border-4 border-black bg-orange-500 mt-10 w-4/6 md:w-2/6">
                <img className="rounded-full" src="cutesy-alexa-no-bg.png" />
            </div>
        </div>
    )
  }

export default Hero;