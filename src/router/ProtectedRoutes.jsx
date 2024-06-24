import { useContext } from 'react';
import {  Navigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const ProtectedRoute = ({children}) => {

    const AuthData = useContext(AuthContext);

    if(!AuthData.user){
        return <Navigate to="/404" replace />
    }

    return children;
}

export default ProtectedRoute;