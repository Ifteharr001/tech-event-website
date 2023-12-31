import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
  const { title, img, description, price, id } = service;
  return (
    <div className="">
      <div className="card card-compact  bg-[#066163] rounded-none shadow-xl">
        <figure>
          <img className="w-[400px] h-[220px] p-3" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold  text-2xl text-[#F0F0F0]">
            {title}
          </h2>
          <p className="text-gray-300">{description.slice(0, 120)}....</p>
          <span className="text-gray-300 font-bold">Price: {price}</span>
          <div className="card-actions justify-end">
            <Link
              to={`/details/${id}`}
              className="btn w-full text-center bg-[#482121] border-none rounded-none text-[#F0F0F0]"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;

Service.propTypes = {
  service: PropTypes.object,
};
