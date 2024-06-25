import NavBar from "./ui/navbar";
import Hero from "./ui/hero";
import Footer from "./ui/footer";

const Page = () => {
    return (
      <>
        <NavBar />
        <Hero />
        <div className="h-96"></div>
        <Footer />
      </>
    )
  }

export default Page;