import profile from "../assets/DTphoto.jpeg";
import { FaDownload } from "react-icons/fa6";
import SoftwareResume from "../assets/Resumes/Resume_SDE_DT-2.pdf"

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
                    <button
                        className="h-11 bg-lime-700 rounded-lg w-30 mt-3 font-medium text-sm md:hidden"
                    >
                        <a
                            download="Software Resume"
                            href={SoftwareResume}
                            className="flex items-center gap-2 justify-center"
                        >
                            <h1 className="">SDE Resume </h1><FaDownload /> 
                        </a>
                    </button>


                </div>
            </div>
            <div className="spacer"></div>
        </section>
    );
}

export default AboutMe;