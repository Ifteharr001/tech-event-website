

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
        <div className="flex items-center justify-between">
          {/* banner content */}
          <div className="">
            <div className="text-left mr-8">
              <h1 className="mb-5 text-5xl font-bold leading-[60px]">
                Navigating the Future of <br /> Tech and Gaming
              </h1>
              <p className="mb-5">
                Join us at the Tech Expo Extravaganza, where innovation meets
                excitement! Explore the latest <br /> in cutting-edge technology, from
                virtual reality wonders to AI-powered gadgets.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
          {/* banner slider */}
          <div className="">
            <img
              className="h-[500px]"
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
