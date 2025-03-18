import { routes } from "../routes";
import logo from '../assets/Vector.svg'
import { IoMenu } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { IoMdPerson } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { GrContact } from "react-icons/gr";
import { IoClose } from "react-icons/io5";
import { FaComputer } from "react-icons/fa6";

function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const lastActiveLink = useRef();
    const activeBox = useRef();
    const initActiveBox = () => {
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
    
    useEffect(initActiveBox, [])
    window.addEventListener('resize', initActiveBox);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;
        activeBox.current.style.top = event.target.offsetTop + 'px';
        activeBox.current.style.left = event.target.offsetLeft + 'px';
        activeBox.current.style.width = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

    const navLinks = [
        {
            title: "Home",
            href: "#Home",
            Icon: FaHome,
            className: 'nav-link active',
            ref: lastActiveLink
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
        }
    ];

    return (
        <div>
            <nav className="nav">
                <div className="max-w-screen-2xl w-full mx-auto px-4 
                flex justify-between items-center md:px-6 md:flex md:grid-cols-2">
                    <a href="#Home" className="">
                        <img src={logo} alt="logo" className="w-12 m-4" />
                    </a>

                    <div className="relative md:justify-self-center">
                        <button
                            className="menu-btn"
                            onClick={() => setIsOpen((prev) => !prev)}
                        >
                            {isOpen ?  <IoClose /> : <IoMenu />}
                        </button>
                        <div className={'navbar  ' + (isOpen ? 'active' : '')}>
                            {
                                navLinks.map(({ title, href, className, ref, Icon }, key) => (
                                    <a
                                        href={href}
                                        key={key}
                                        ref={ref}
                                        className={className}
                                        onClick={activeCurrentLink}
                                    >
                                        <Icon />
                                        {title}
                                        

                                    </a>
                                ))
                            }
                            <div className="active-box" ref={activeBox}>

                            </div>
                        </div>

                    </div>

                    {/* {routes.map((route, index) => {
                        const { Icon, href, title } = route;
                        return (
                            <div className="flex items-center mr-6" key={index}>
                                <ul>
                                    <li>
                                        <a href={href} className="flex items-center cursor-pointer gap-1 hover:text-neutral-400 transition-all">
                                            <div className="mr-2">
                                                <Icon />
                                            </div>
                                            {title}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        )
                    })} */}
                </div>


            </nav>
        </div>
    );

}

export default Nav;
