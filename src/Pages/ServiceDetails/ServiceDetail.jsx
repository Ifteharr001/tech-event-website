
import { Link, useLoaderData, useParams } from "react-router-dom";

const ServiceDetail = () => {
    const details = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const detail = details.find(detail => detail.id === idInt)

    console.log( detail)
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img src={detail.img} className="lg:max-w-3xl rounded-lg shadow-2xl mr-4" />
            <div>
              <h1 className="text-3xl text-center  lg:text-5xl font-bold text-[#066163]">
                {detail.title}
              </h1>
              <p className="py-6 text-center lg:text-left">{detail.description}</p>
              <p className="text-xl font-bold pb-3 text-center lg:text-left">Price: {detail.price}</p>
              <div className="text-center lg:text-left">
                <Link to="/" className="btn text-center bg-[#482121] border-none rounded-none text-[#F0F0F0]">
                Go Back
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetail;