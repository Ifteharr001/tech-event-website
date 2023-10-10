import Team from "./Team";

const OurTeam = () => {
    return (
      <div>
        <div
          className="hero h-[70vh]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/zFqq7ky/pexels-christina-morillo-1181438.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold text-[#fff">Our Team</h1>
            </div>
          </div>
        </div>

        {/* team section */}
          <Team></Team>
      </div>
    );
};

export default OurTeam;