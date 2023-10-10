import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
      <div className="bg-gray-300">
        <h1 className="text-center font-bold text-5xl mt-16 pt-16 text-[#066163]">
          Out Future Plane
        </h1>
        <div className="hero min-h-screen w-[1100px] mx-auto">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/K2Vb8dS/pexels-sound-on-3761135.jpg"
              className="max-w-sm rounded-lg shadow-2xl mr-4"
            />
            <div>
              <h1 className="text-4xl font-bold text-[#066163]">
                The Future of Gaming Tech
              </h1>
              <p className="py-6">
                Embark on a thrilling journey into the future of gaming
                technology with our upcoming series, where innovation meets
                immersion. Explore cutting-edge hardware, delve into the latest
                gaming peripherals, and unravel the secrets behind emerging
                technologies shaping the gaming landscape. From augmented
                reality wonders to mind-bending virtual realities, we will
                dissect the trends, review groundbreaking devices, and provide
                insights into the next frontier of game play. Gear up for a tech
                odyssey that transcends pixels, pushing the boundaries of gaming
                experience. Join us as we navigate the realms of gaming
                technological evolution, promising a tomorrow where play knows
                no limits.
              </p>
              <Link
                to="/about"
                className="btn text-center bg-[#482121] border-none rounded-none text-[#F0F0F0]"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;