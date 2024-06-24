import React, { useEffect, useState } from 'react';
import { getAuthInfoDB } from '../js/userScripts';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getAuthInfo();
    }, []);

    const getAuthInfo = async () => {

        var token = localStorage.getItem("token");

        if (token) {

            var res = await getAuthInfoDB(token);

            console.log(res)

            if (res.success) {
                setUser(res.user);
            }
        }
    };

    return <AuthContext.Provider value={{
        user: user,
        setUser: setUser
    }}>
        {children}
    </AuthContext.Provider>
}

export { AuthContext, AuthProvider };