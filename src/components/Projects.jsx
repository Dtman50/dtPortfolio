import { React, useState } from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";

// Web project photos
import memeGenerator from "../assets/projectPhotos/web/memeGenerator.png";
import rootsNRelics from "../assets/projectPhotos/web/RootsNRelics.png";
import webGame from "../assets/projectPhotos/web/RPScissors.png";
import businessCard from "../assets/projectPhotos/web/businessCard.png";

// Mobile project photos
import eightBall from "../assets/projectPhotos/mobile/8ballIOS.png";
import diceHome from "../assets/projectPhotos/mobile/diceHome.png";
import diceRoll from "../assets/projectPhotos/mobile/diceRoll.png";
import termTrackerAddTerm from "../assets/projectPhotos/mobile/termTrackerAddTerm.png";
import termTrackerCourseView from "../assets/projectPhotos/mobile/termTrackerCourseView.png";
import termTrackerHome from "../assets/projectPhotos/mobile/termTrackerHome.png";
import termTrackerLogin from "../assets/projectPhotos/mobile/termTrackerLogin.png";
import termTrackerTermView from "../assets/projectPhotos/mobile/termTrackerTermView.png";

// Desktop project photos
import backend from "../assets/projectPhotos/desktop/backend.png";
import imsAddPart from "../assets/projectPhotos/desktop/imsAddPart.png";
import imsAddProduct from "../assets/projectPhotos/desktop/imsAddProduct.png";
import imsHome from "../assets/projectPhotos/desktop/imsHome.png";
import schedulerInventory from "../assets/projectPhotos/desktop/schedulerInventory.png";
import schedulerLogin from "../assets/projectPhotos/desktop/schedulerLogin.png";
import schedulerNotify from "../assets/projectPhotos/desktop/schedulerNotify.png";
import schedulerReports from "../assets/projectPhotos/desktop/schedulerReports.png";
import schedulerScheduler from "../assets/projectPhotos/desktop/schedulerScheduler.png";

const desktopProjects = [
  {
    title: "Spring Social Media Blog API",
    description: "API backend developed using Spring and Spring Boot",
    link: "https://github.com/Dtman50/Dtman50-pep-spring-project",
    skills: ["Spring", "Spring Boot", "Java", "API", "MVC", "Spring Data JPA"],
    images: [backend]
  },
  {
    title: "Appointment Scheduler",
    description: "Created an Appointment Scheduler from scratch with Java utilizing Javafx and SceneBuilder",
    link: "https://github.com/Dtman50/Scheduler",
    skills: ["Application Development", "Java", "JavaFX", "Scenebuilder", "MySQL"],
    images: [schedulerLogin, schedulerNotify, schedulerInventory, schedulerScheduler, schedulerReports]
  },
  {
    title: "Inventory Managament System",
    description: "Standalone desktop app IMS created with javafx and scenebuilder",
    link: "https://github.com/Dtman50/Inventory_Managment_System",
    skills: ["Application Development", "JavaFX", "Java", "Scenebuilder"],
    images: [imsHome, imsAddPart, imsAddProduct]
  }

]

const mobileProjects = [
  {
    title: "Dice Roller",
    description: "iOS developed to roll a pair of dice",
    link: "https://github.com/Dtman50/Dicee-iOS",
    skills: ["iOS", "Game Development", "XCode", "Swift", "MVC"],
    images: [diceHome, diceRoll]
  },
  {
    title: "Student Term Tracker",
    description: "Android Mobile Application developed using IntelliJ IDEA in Java",
    link: "https://github.com/Dtman50/Student_Term_Tracker",
    skills: ["Android", "Mobile Development", "Java", "SqlLite", "MVC", "Room", "Responsive Development"],
    images: [termTrackerLogin, termTrackerHome, termTrackerAddTerm, termTrackerTermView, termTrackerCourseView]
  },
  {
    title: "Magic 8 Ball",
    description: "iOS app created to shake a magic 8 ball and receive an answer to your question",
    link: "https://github.com/Dtman50/Magic-8-Ball",
    skills: ["XCode", "iOS", "Swift", "Mobile Development", "MVC"],
    images: [eightBall]
  }
]

const webProjects = [
  {
    title: "Digital Business Card",
    description: "Digital Business Card made using React",
    link: "https://dtman50.github.io/digital-business-card/",
    skills: ["React", "Mobile Development", "Java", "HTML", "CSS"],
    images: [businessCard]
  },
  {
    title: "Rock, Paper, Scissors Game",
    description: "Simple rock, paper, scissors game collaborated with collegiate friends",
    link: "https://dtman50.github.io/rock_paper_scissors/",
    skills: ["HTML", "CSS", "JavaScript", "Game Development"],
    images: [webGame]
  },
  {
    title: "3D Printing Store",
    description: "3D printing store created using Wordpress",
    link: "https://rootsandrelics.store",
    skills: ["CMS", "WordPress", "Web Development", "Responsive Development", "WooCommerce"],
    images: [rootsNRelics]
  },
  {
    title: "Meme Generator",
    description: "Web app to generate memes",
    link: "https://dtman50.github.io/meme_generator/",
    skills: ["HTML", "CSS", "React", "Java", "Web Development"],
    images: [memeGenerator]
  }
]

const Card = ({ classname, children }) => {
  return <div className={`bg-zinc-300/10 rounded-lg shadow-md hover:shadow-lime-600 p-4 ${classname}`}>{children}</div>;
}

const CardContent = ({ classname, children }) => {
  return <div className={`m-4 ${classname}`}>{children}</div>
}

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const nextImg = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  }
  const prevImg = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  }

  return (
    <Card classname="p-4 rounded-2xl shadow-lg w-full max-w-md mx-auto sm:mx-0">
      <div className='relative w-full h-50 sm:h-64'>
        <img
          src={project.images[currentImage]}
          alt={project.title + " photo"}
          className="w-full h-full object-contain rounded-lg"
        />
        {project.images.length > 1 &&
          <button
            className='absolute top-3/4 md:top-1/2 left-2 transform -translate-y-1/2 p-1 bg-gray-800/40 md:bg-gray-800 text-lime-600 rounded-full cursor-pointer'
            onClick={prevImg}
          >
            <IoChevronBackOutline size={20} />
          </button>
        }
        {project.images.length > 1 &&
          <button
            className='absolute top-3/4 md:top-1/2 right-2 transform -translate-y-1/2 p-1 bg-gray-800/40 md:bg-gray-800 text-lime-600 rounded-full cursor-pointer'
            onClick={nextImg}
          >
            {project.images.length > 1 && <IoChevronForwardOutline size={20} />}
          </button>
        }
      </div>
      <CardContent classname="m-4">
        <h3 className='text-lg sm:text-xl font-semibold'>{project.title}</h3>
        <p className='text-zinc-500 mt-2 text-sm sm:text-base'>{project.description}</p>
        <a href={project.link} target="_blank" className='text-blue-500 hover:underline mt-2 inline-block text-sm sm:text-base'>View Project</a>
        <div className='flex flex-wrap gap-2 mt-4'>
          {project.skills.map((skill, index) => (
            <span key={index} className="bg-lime-700 px-2 py-1 text-xs sm:text-sm rounded-md">{skill}</span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function Projects() {

  return (
    <section id="Projects" className='py-26 lg:py-48'>
      <div className='flex justify-center text-4xl md:text-6xl md:mb-12 font-semibold'>
        <h1>
          <span className='text-lime-700'>Featured</span> <sp />
          <span className='underline decoration-wavy decoration-lime-700'>Projects</span>
        </h1>
      </div>

      <div className='container'>
        <div className='flex spacer'>
          <div className='[writing-mode:vertical-lr]'>
            <h2 className='text-xl md:text-4xl text-lime-500 mr-6 md:mr-10'>Desktop</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
            {desktopProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        <div className='flex spacer'>
          <div className='[writing-mode:vertical-lr]'>
            <h2 className='text-xl md:text-4xl text-lime-500 mr-6 md:mr-10'>Mobile</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
            {mobileProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
        <div className='flex sapcer'>
          <div className='[writing-mode:vertical-lr]'>
            <h2 className='text-xl md:text-4xl text-lime-500 mr-6 md:mr-10'>Web</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7'>
            {webProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
      <div className="spacer"></div>
    </section>

  );
}

export default Projects;