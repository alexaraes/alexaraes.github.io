import Card from "./card";

const testimonialList = {
    "Joshua Weiss": {
        linkedin: "https://www.linkedin.com/in/joshuatweiss/",
        body: "Alexa is a dedicated and enthusiastic software engineer. While at Blue Bite, she worked on challenging frontend initiatives essential to some of our most exciting new platform features. Alexa delivered high-quality results, even when that required her to dive into unfamiliar technologies and pick them up quickly. Alexa's selfless team spirit and friendly personality were greatly appreciated by everyone she worked with. Overall, Alexa’s time at Blue Bite has proven that she is a talented engineer, valuable team member, and a pleasure to work with."
    },
    "Michaela Scanzillo": {
        linkedin: "https://www.linkedin.com/in/michaela-scanzillo/",
        body: "Alexa's superb problem-solving skills and ability to translate intricate requirements into first-rate features would make her an asset to any team. She consistently improves every project she's involved in with her innate understanding of what constitutes exceptional UX. Beyond her technical expertise, she brings a sense of joy, fun and camaraderie to work every day. She's an absolute delight to work with, and any team would be lucky to have her!"
    },
    "Ellen Edgington": {
        linkedin: "https://www.linkedin.com/in/ellen-edgington-psm-safe%C2%AE-5-certified-agilist-70a0495/",
        body: "Over the years, I have worked on both small and large teams with Alexa in the airline and grocery industries, creating digital products that made a difference for both end users and the business. Some of my best memories of our projects have been working with Alexa. Alexa works especially well with UX/Product Design and Strategy. She gives great feedback on UX reviews and is thoughtful about her questions for designers. She actively dialogs with the Product Team to understand what is needed. She is unafraid to ask questions and work with her teammates until she gets what she is looking for. Alexa has stepped in when needed when the lead developer was out for an extended period of time. Even during tough times, she can bring humor, laughter and motivation to a team to reinvigorate the energy to push through a deadline. Alexa is the morale boost every team needs!"
    },
    "Trey Jones": {
        linkedin: "https://www.linkedin.com/in/kennethajones/",
        body: "Alexa showed tremendous growth in code quality and quantity; raising the bar for others . A developer who loves to develop, Alexa had no fear jumping in to try a hand at something new. If given the opportunity, this developer can meet any challenge and will be sorely missed."
    },
    "Aaron Larner": {
        linkedin: "https://www.linkedin.com/in/aaronlarner/",
        body: "Alexa's dedication to self improvement is the characteristic that has most impressed me. It was a pleasure to interact with Alexa as a student of mine while she was learning front-end development at The Iron Yard and I've be constantly impressed with how far she's come since then. Alexa excels at breaking down complicated technical problems and figuring out how to solve them while keeping a close eye on code quality. Any company would be lucky to have her on their development team."
    }
};

const Testimonials = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-orange-100 md:flex-row md:justify-around md:flex-wrap">
            {
                Object.keys(testimonialList).map((key, index) => {
                    return (
                        <Card
                            key={index}
                            name={key}
                            link={testimonialList[key].linkedin}
                            body={testimonialList[key].body}
                        />
                    )
                })
            }
        </div>
    )
}

export default Testimonials;