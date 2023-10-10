const Team = () => {
  return (
    <div>
      <div className="lg:flex justify-center grid gap-6 md:grid-cols-2  lg:w-[1140px] md:mx-auto py-12">
        {/* card one */}
        <div className="card lg:w-[280px] bg-[#066163] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/6HMWhcP/download-7.jpg"
              alt="Shoes"
              className="rounded-full h-[150px] w-[150px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-bold  text-2xl text-[#F0F0F0]">
              Irfan Shah
            </h2>
            <p className="text-gray-300"> Expert in hardware wizardry</p>
            {/* md */}
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        {/* card two */}
        <div className="card lg:w-[280px] bg-[#066163] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/3vH2fNL/download-1.jpg"
              alt="Shoes"
              className="rounded-full h-[150px] object-cover w-[150px]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-bold  text-2xl text-[#F0F0F0]">
              Johan Doe
            </h2>
            <p className="text-gray-300">Code Connoisseur</p>
            {/* md */}
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        {/* card three */}
        <div className="card lg:w-[280px] bg-[#066163] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/bN6PjRP/download.jpg"
              alt="Shoes"
              className="rounded-full h-[150px] w-[150px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-bold  text-2xl text-[#F0F0F0]">
              Wiliam Johan
            </h2>
            <p className="text-gray-300"> Expert in VR Virtuoso</p>
            {/* md */}
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
        {/* card four */}
        <div className="card lg:w-[280px] bg-[#066163] shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src="https://i.ibb.co/0hpSfHZ/download-6.jpg"
              alt="Shoes"
              className="rounded-full h-[150px] w-[150px] object-cover"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  font-bold  text-2xl text-[#F0F0F0]">
              Tom Kru
            </h2>
            <p className="text-gray-300"> Expert in Cybernetic Maverick</p>
            {/* md */}
            <div className="rating rating-md">
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-7"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
