import Testimonials from "./ui/testimonials";
import Hero from "./ui/hero";

const Page = () => {
    return (
      <>
        <Hero />
        <div className="bg-pink-500 border-b-2 border-black font-medium text-center text-white text-xl">
          You wanna hire me?
        </div>
        <Testimonials />
      </>
    )
  }

export default Page;