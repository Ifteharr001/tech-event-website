import { Link } from "react-router-dom";

const About = () => {
    return (
      <div>
        {/* card one */}
        <div className="hero min-h-screen w-[1100px] mx-auto">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/YWGS7q0/pexels-harsch-shivam-2007647.jpg"
              className="max-w-sm rounded-lg shadow-2xl mr-4"
            />
            <div>
              <h1 className="text-5xl font-bold text-[#066163]">
                Tech and Gaming Hub
              </h1>
              <p className="py-6">
                Welcome to our Tech and Gaming Hub, where passion meets
                innovation! We are a dedicated team of tech enthusiasts and
                gaming aficionados driven by a shared love for cutting-edge
                technology and the immersive world of gaming.
              </p>
              <Link
                to="/"
                className="btn text-center bg-[#482121] border-none rounded-none text-[#F0F0F0]"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
        {/* card two */}
        <div className="hero min-h-screen  w-[1100px] mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/bLpRkQK/pexels-rfstudio-3810792.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold  text-[#066163]">
                Join Us on the Journey
              </h1>
              <p className="py-6">
                Whether your a tech wizard, a gaming prodigy, or simply
                someone curious about the future, we invite you to join us on
                this exciting journey. Lets explore, learn, and game on
                together, pushing the boundaries of whats possible in the
                realms of technology and gaming. Welcome to Tech and Gaming Hub
                 where the future unfolds, and the adventure never ends!
              </p>
              <Link
                to="/"
                className="btn text-center bg-[#482121] border-none rounded-none text-[#F0F0F0]"
              >
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;