import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)
    if(loading) {
        return <div className="w-full flex items-center justify-center"><span className="loading loading-infinity  text-sky-500 h-24 w-24"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}