import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet /> //Show protected Routes
    ) : auth?.email ? (
        <>
            {console.log('Unauthorized')}
            <Navigate to="unauthorized" state={{ from: location }} replace />
        </>
    ) : (
        //Put popUp window, or some kind of callback to user interface, that user require to be logged in
        <Navigate to="" state={{ from: location }} replace /> //return to HomePage if not logged In
    );
};

export default RequireAuth;
