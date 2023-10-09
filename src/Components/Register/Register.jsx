import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    
     const { googleSignIn, signUp } = useContext(AuthContext);

     // google login
     const handleGoogleRegister = () => {
       googleSignIn()
         .then((result) => console.log(result.user))
         .catch((error) => console.log(error));
     };

     // email, password register

     const handleRegister = (e) => {
       e.preventDefault();
       const form = new FormData(e.currentTarget);
       const name = form.get('name');
       const email = form.get('email');
       const password = form.get('password')
       console.log(name, email, password);
       signUp(email, password)
       .then(result => {
        console.log(result.user)
       })
       .catch(error => {
        console.log(error)
       })
     };

    return (
      <div>
        <div>
          <h1 className="text-center text-4xl text-[#066163] font-bold my-8">
            Please Register
          </h1>

          <div>
            <div className=" min-h-screen ">
              <div className="hero-content mx-auto">
                <div className="card md:w-3/4 lg:w-1/3 flex-shrink-0 w-full shadow-2xl bg-[#219C90] rounded-lg">
                  <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control text-white">
                      <label className="label text-white">
                        <span className="label-text text-white font-bold">
                          Your Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input input-bordered bg-transparent border-2 border-white rounded-[100px]"
                        required
                      />
                    </div>
                    <div className="form-control text-white">
                      <label className="label text-white">
                        <span className="label-text text-white font-bold">
                          Your Email
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered bg-transparent border-2 border-white rounded-[100px]"
                        required
                      />
                    </div>
                    <div className="form-control text-white">
                      <label className="label text-white">
                        <span className="label-text text-white font-bold">
                          Password
                        </span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered bg-transparent border-2 border-white rounded-[100px]"
                        required
                      />
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn text-center rounded-[100px] bg-[#482121] border-none mb-3 text-[#F0F0F0]">
                        Register
                      </button>
                      <button
                        onClick={handleGoogleRegister}
                        className="btn btn-primary "
                      >
                        google
                      </button>
                    </div>
                    <div>
                      <h2 className="text-white">
                        Already have account, Please{" "}
                        <Link
                          to="/login"
                          className="text-[#482121] text-center font-bold"
                        >
                          Login
                        </Link>
                      </h2>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;