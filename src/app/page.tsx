import Testimonials from "./ui/testimonials";
import Hero from "./ui/hero";

const Page = () => {
    return (
      <>
        <Hero />
        <div className="border-b-4 border-black h-9 font-medium text-center text-xl bg-blueGreen">
          You wanna hire me?
        </div>
        <Testimonials />
      </>
    )
  }

export default Page;