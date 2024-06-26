import Testimonials from "./ui/testimonials";
import Hero from "./ui/hero";

const Page = () => {
    return (
      <>
        <Hero />
        <div className="border-b-2 border-black font-medium text-center text-xl">
          You wanna hire me?
        </div>
        <Testimonials />
      </>
    )
  }

export default Page;