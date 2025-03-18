import profile from "../assets/DTphoto.jpeg";

function AboutMe() {
    return (
        <section id="AboutMe" className="about-me py-22 md:py-48">
            <div
                className="flex justify-center text-4xl mb-6 md:text-6xl md:mb-12 font-semibold"
            >
                <h1>
                <span className='underline decoration-wavy decoration-lime-700'>About</span> <sp />
                    <span className="text-lime-700">
                        ME
                    </span>
                </h1>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="aboutMe flex justify-center">
                    <img
                        src={profile}
                        alt="profile photo of me"
                        className="rounded-2xl h-3/4 w-3/4 mb-6 md:h-full md:w-full"
                    />
                </div>
                <div className="aboutMe-excerpt tracking-wide text-sm/loose text-center md:pl-10 md:text-left md:text-lg/loose">

                    <p> I am a dynamic and motivated Software Development Engineer (SDE) with a strong commitment
                        to driving innovation and delivering high-quality solutions. Seeking to leverage expertise
                        in software development and test automation to contribute effectively to the innovative projects,
                        where I can thrive in a fast-paced, collaborative environment. I look forward to joining your team!
                    </p>
                </div>
            </div>
            <div className="spacer"></div>
        </section>
    );
}

export default AboutMe;