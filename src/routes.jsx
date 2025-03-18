import { IoMdPerson } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { FaComputer } from "react-icons/fa6";

export const routes = [
    {
        title: "Home",
        href: "#Home",
        Icon: FaHome,
        className: 'nav-link active'
    },
    {
        title: "About Me",
        href: "#AboutMe",
        Icon: IoMdPerson,
        className: 'nav-link'
    },
    {
        title: "Projects",
        href: "#Projects",
        Icon: GoProjectRoadmap,
        className: 'nav-link'
    },
    {
        title: "IT",
        href: "#IT",
        Icon: FaComputer,
        className: 'nav-link'
    },
    {
        title: "Contact Me",
        href: "#ContactMe",
        Icon: GrContact,
        className: 'nav-link'
    },
];