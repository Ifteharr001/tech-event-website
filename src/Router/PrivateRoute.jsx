import { useContext } from "react";
import { AuthContext } from "../Hook/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    
    if(loading){
        return <span className="loading loading-dots loading-lg"></span>;
    }

    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to="/login">
            
        </Navigate>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.object,
};