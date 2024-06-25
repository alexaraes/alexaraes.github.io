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
    <div className="flex flex-col justify-start pt-10 items-center bg-orange-100 pb-10 h-screen">
        <p className="text-2xl md:text-4xl lg:text-5xl font-bold">About</p>
        <p className="text-center md:text-lg lg:text-2xl">I am a front end engineer with {yearsSince("2015-09-15")} years of professional development experience.</p>
      </div>
    )
  }

export default Page;