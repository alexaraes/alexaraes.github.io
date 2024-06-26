import { anton } from "../ui/fonts";

const yearsSince = (dateString: string) => {
    const pastDate = new Date(dateString);
    const currentDate = new Date();

    const diffInMilliseconds = currentDate.getTime() - pastDate.getTime();

    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Including leap years
    const yearsDifference = diffInMilliseconds / millisecondsPerYear;

    return yearsDifference.toFixed(2);
};

const Page = () => {
    return (
      <div className="page">
        <p className={`text-2xl mb-10 md:text-4xl lg:text-6xl font-bold ${anton.className}`}>About</p>
        <p className="text-center md:text-lg lg:text-2xl">I am a front end engineer with {yearsSince("2015-09-15")} years of professional development experience.</p>
      </div>
    )
  }

export default Page;