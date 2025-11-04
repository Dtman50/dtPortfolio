import aPlus from "../assets/IT/aPlus.svg"
import projectPlus from "../assets/IT/projectPlus.svg"
import googleIT from "../assets/IT/googleIT.svg"
import itil from "../assets/IT/itil.svg"
import { FaDownload } from "react-icons/fa6";
import ITResume from "../assets/Resumes/IT_DariusKT.pdf"

const skills = [
    "Active Directory",
    "Help Desk",
    "Agile and Waterfall",
    "Programming",
    "Database Management",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "Cloud Computing (AWS)",
    "Cybersecurity",
    "Networking",
    "DevOps (CI/CD)",
    "Software Development Lifecycle (SDLC)",
    "Operating Systems",
    "Linux",
    "Mac",
    "Windows",
    "Version Control",
    "Problem Solving & Debugging"
]

function IT() {

    return (
        <section id="IT" className="py-22 md:py-48">
            <div className="flex justify-center text-3xl mb-6 md:text-6xl md:mb-12 font-semibold">
                <h1>
                    <span className="underline decoration-wavy decoration-lime-700">Information</span> <sp />
                    <span className="text-lime-700">Technology</span>
                </h1>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2">
                <div className="cert-container ">
                    <h3 className="flex justify-center text-xl md:text-2xl font-semibold">Certifications</h3>
                    <div className="img-container flex justify-center gap-6 mb-12 mt-4 md:border-r md:border-r-zinc-600 md:mr-22">
                        <div>
                            <img className="mb-6 rounded-full w-20 md:w-24 shadow-md hover:shadow-lime-600" src={aPlus} alt="A+ IT Badge" />
                            <img className="rounded-full w-20 md:w-24 shadow-md hover:shadow-lime-600" src={projectPlus} alt="Project+ IT Badge" />
                        </div>
                        <div>
                            <img className="mb-6 w-20 md:w-24 shadow-md hover:shadow-lime-600" src={googleIT} alt="Google IT Support Badge" />
                            <img className="w-20 md:w-24 shadow-md hover:shadow-lime-600" src={itil} alt="ITIL v4 Badge" />
                        </div>
                    </div>

                </div>
                <div className="skills-container">
                    <h3 className="flex justify-center text-xl md:text-2xl font-semibold">Skills</h3>
                    <div className="flex flex-wrap gap-3 mt-4">
                        {skills.map((skill, index) => (
                            <span
                                key={index}
                                className="bg-lime-600 px-2 py-1 text-xs sm:text-sm rounded-md"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                </div>
                
            </div>
            <div className="flex justify-center">
                    <button
                        className="mt-0 h-11 bg-lime-600 rounded-lg w-30 md:mt-4 font-medium text-sm"
                    >
                        <a
                            download="IT Resume"
                            href={ITResume}
                            className="flex items-center h-11 gap-2 justify-center"
                        >
                            <h1 className="">IT Resume </h1><FaDownload />
                        </a>
                    </button>
                </div>

            <div className="spacer"></div>

        </section>
    );
}

export default IT;
