import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
    const {googleSignIn, logIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState("");
    const [success, setSuccess] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    // google login
    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => console.log(result.user))
        .catch(error => console.log(error))
    }

    // email, password login
    

    const handleLogin = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      console.log(email, password)
      setErrorLogin("");
      setSuccess("");
      logIn(email, password)
      .then(result => {
        console.log(result.user)
        navigate(location?.state ? location.state : "/");
        setSuccess("User Login successfully")
      })
      .catch(error =>{
        console.log(error);
        setErrorLogin(error.message);
      })
    }

    return (
      <div>
        <h1 className="text-center text-4xl text-[#066163] font-bold my-8">
          Please Login
        </h1>

        <div>
          <div className=" min-h-screen ">
            <div className="hero-content mx-auto">
              <div className="card md:w-3/4 lg:w-1/3 mx-auto flex-shrink-0 w-full shadow-2xl bg-[#219C90] rounded-lg">
                <form onSubmit={handleLogin} className="card-body">
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
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="password"
                        className="input input-bordered w-full bg-transparent border-2 border-white rounded-[100px]"
                        required
                      />
                      <span
                        className="absolute top-4 right-3"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <FaRegEyeSlash></FaRegEyeSlash>
                        ) : (
                          <FaRegEye></FaRegEye>
                        )}
                      </span>
                    </div>
                  </div>
                  {errorLogin && <p className="text-red-800">{errorLogin}</p>}
                  {success && <p className="text-green-800">{success}</p>}
                  <div className="form-control mt-6">
                    <button className="btn text-center rounded-[100px] bg-[#482121] border-none mb-3 text-[#F0F0F0]">
                      Login
                    </button>
                    <button
                      onClick={handleGoogleLogin}
                      className="btn text-center rounded-[100px] bg-[#482121] border-none mb-3 text-[#F0F0F0] "
                    >
                      Login with Google
                    </button>
                  </div>
                  <div>
                    <h2 className="text-white">
                      Do not have account, Please{" "}
                      <Link
                        to="/register"
                        className="text-[#482121] text-center font-bold"
                      >
                        Register
                      </Link>
                    </h2>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;