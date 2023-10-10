import Team from "../OurTeam/Team";
import AboutUs from "./About Us/AboutUs";
import Banner from "./Banner/Banner";
import Services from "./Service/Services";

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Services></Services>
        <AboutUs></AboutUs>
        <div>
          <h2 className="text-center text-4xl md:text-5xl font-bold mt-12 text-[#066163]">
            Our Team Member
          </h2>
          <Team></Team>
        </div>
      </div>
    );
};

export default Home;