import { React, useState, useRef } from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { RiErrorWarningFill } from "react-icons/ri";

function Footer() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const myEmail = "mailto:dariustaylor17@gmail.com";

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_vxj97az", "template_ocqklfv", form.current, {
                publicKey: "HSsfLzs5twJCQaAJB",
            })
            .then(
                () => {
                    console.log('SUCCESS');
                    handleSubmit(e);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Thank you ${firstName}. Message Sent. I look forward to hearing from you!`)
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
    }

    return (
        <footer id="ContactMe" className="container py-40 md:py-48">
            <div className="footer grid grid-cols-1 md:grid-cols-2">
                <div className="footer-excerpt md:flex md:justify-center md:flex-col md:mr-16">
                    <h1 className="text-5xl pb-4 text-lime text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-700">
                        You've made it this far!
                    </h1>
                    <h2 className="text-3xl pb-3">
                        Contact me!
                    </h2>
                    <p className="pb-3">
                        I greatly look forward to working with <sp />
                        <span className="text-3xl uppercase text-lime-600">you.</span>
                    </p>
                    <div className="social-media-icons flex gap-3 text-2xl">
                        <a href="https://www.linkedin.com/in/darius-taylor-1bb81120b/" target="_blank">
                            <IoLogoLinkedin className="footer-linkedin text-lime-600 cursor-pointer" />
                        </a>
                        <a href="https://github.com/Dtman50" target="_blank">
                            <IoLogoGithub className="footer cursor-pointer" />
                        </a>
                        <a href={myEmail} target="_blank">
                            <MdEmail className="footer-linkedin text-lime-600 cursor-pointer" />
                        </a>

                    </div>
                </div>
                <div className="footer-contactForm">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="md:border-l md:border-gray-900/10 md:pl-12">
                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm/6 font-medium text-zinc-100/80">
                                        First name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            autoComplete="given-name"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="block w-full rounded-md bg-zinc-100 px-3 py-1.5 text-base text-gray-400 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm/6 font-medium text-zinc-100/80">
                                        Last name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="last-name"
                                            name="last-name"
                                            type="text"
                                            autoComplete="family-name"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="block w-full rounded-md bg-zinc-100 px-3 py-1.5 text-base text-gray-400 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label htmlFor="email" className="block text-sm/6 font-medium text-zinc-100/80">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-md bg-zinc-100 px-3 py-1.5 text-base text-gray-400 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-5">
                                    <label htmlFor="message" className="block text-sm/6 font-medium text-zinc-100/80">
                                        Message
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={3}
                                            required
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="block w-full appearance-none rounded-md bg-zinc-100 py-1.5 pr-8 pl-3 text-base text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-lime-500 sm:text-sm/6"
                                        />
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className="mt-6 flex items-center md:pl-12">
                            <button
                                type="submit"
                                className="rounded-md bg-lime-700 px-3 py-2 text-sm font-semibold text-zinc-100 shadow-xs hover:bg-lime-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 cursor-pointer"
                                // onClick={validateForm}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="spacer"></div>
        </footer>

    );
}

export default Footer;