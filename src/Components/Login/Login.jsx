import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
    const {googleSignIn, logIn } = useContext(AuthContext)


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
      logIn(email, password)
      .then()
      .catch()
    }

    return (
      <div>
        <h1 className="text-center text-4xl text-[#066163] font-bold my-8">
          Please Login
        </h1>

        <div>
          <div className=" min-h-screen ">
            <div className="hero-content">
              <div className="card md:w-3/4 lg:w-1/3 flex-shrink-0 w-full shadow-2xl bg-[#219C90] rounded-lg">
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
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered bg-transparent border-2 border-white rounded-[100px]"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button
                      className="btn text-center rounded-[100px] bg-[#482121] border-none mb-3 text-[#F0F0F0]"
                    >
                      Login
                    </button>
                    <button
                      onClick={handleGoogleLogin}
                      className="btn btn-primary "
                    >
                      google
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