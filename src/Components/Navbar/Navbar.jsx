import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navBar = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3F2305]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#3F2305]" : ""
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#61677A]">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52"
          >
            {navBar}
          </ul>
        </div>
        <h2 className="font-extrabold text-2xl text-[#F0F0F0]">TG Event</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-md  font-bold text-[#fff]">
          {navBar}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#482121] border-none rounded-none text-[#F0F0F0]">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
