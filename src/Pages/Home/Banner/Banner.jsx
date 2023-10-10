import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/gy7L1cC/bg.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="md:flex grid items-center justify-between">
          {/* banner content */}
          <div className="">
            <div className="text-left mr-8">
              <h1 className="mb-5 text-4xl md:text-4xl md:text-left lg:text-5xl lg:text-left font-bold mt-12 text-center md:leading-[60px]">
                Navigating the Future of <br /> Tech and Gaming
              </h1>
              <p className="mb-5 md:text-left lg:text-left text-center ">
                Join us at the Tech Expo Extravaganza, where innovation meets
                excitement! Explore the latest in <br /> cutting-edge technology, from
                virtual reality wonders to AI-powered gadgets.
              </p>
              <div className="text-center md:text-left lg:text-left mb-5">
                <Link to="/about" >
                <button className="btn rounded-none border-none bg-[#482121] text-[#F0F0F0]">About Us</button>
              </Link>
              </div>
            </div>
          </div>
          {/* banner slider */}
          <div className="text-center">
            <img
              className="h-[500px] "
              src="https://i.ibb.co/dP9FVNw/three.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
