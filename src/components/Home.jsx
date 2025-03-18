import animated from "../assets/DTanimated.png";

function Home() {
    return (
        <section id="Home" className="home md:py-48">
            <div className="container md:grid md:grid-cols-2 items-center md:gap-10">
                <div className="flex flex-col">
                    <h3 className="home-welcome text-sm text-center md:text-md md:text-left">
                        <span className="text-2xl md:text-4xl">Welcome! 👋 </span>
                        My name is
                    </h3>
                    <h1 className="mt-6 mb-3 ">
                        <span className="home-DT text-center text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-700 md:text-7xl md:text-left">
                            Darius Taylor
                        </span>

                    </h1>
                    <p className="home-title text-xs text-center text-zinc-300 mb-7 md:text-sm md:text-left">
                        Software Development Engineer | Web & App Development 👨🏾‍💻
                    </p>
                    <p className="home-description text-xs text-center md:text-sm md:text-left">
                        I am a professional Software Development Engineer with full stack skills based in Houston, Texas
                    </p>
                    <button
                        className="home-aboutMeBtn mt-4 w-18 h-8 text-xs md:w-24 md:h-12 md:text-base bg-lime-600 rounded-br-2xl rounded-tl-2xl "
                    >
                        <a href="#AboutMe">About Me!</a>

                    </button>
                </div>
                <figure className="flex justify-center">
                    <img
                        src={animated}
                        alt="animated photo of me"
                        className="flex justify-center rounded-full h-3/4 w-3/4 mt-6 md:h-full md:w-full"
                    />
                </figure>
            </div>
            <div className="spacer"></div>

        </section>
    );
}

export default Home;