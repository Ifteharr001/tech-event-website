import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">404 Error</h1>
            <div>
              <Link to="/">
                <button className="btn text-center rounded-[100px] bg-[#482121] border-none mb-3 text-[#F0F0F0]">
                  Go Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
