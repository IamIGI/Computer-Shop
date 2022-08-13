import { useLocation, Navigate, Outlet } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log(auth);

    //check roles if roles missing, check if user is logged in if not navigate him to page where he come
    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <>
            {console.log('Access granted: protected routes ')}
            <Outlet /> {/*//Show protected Routes */}
        </>
    ) : auth?.email ? (
        <>
            {console.log('Unauthorized')}
            <Navigate to="unauthorized" state={{ from: location }} replace />
        </>
    ) : (
        //Back user to page where he came from
        <Navigate to="" state={{ from: location }} replace />
    );
};

export default RequireAuth;
