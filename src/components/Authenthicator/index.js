import { createContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const AuthenticatorContext = createContext(null);

export const AuthenticatorProvider = ({ children }) => {

    const [isLoggedIn , setIsLoggedIn ] = useState(false);
    const [userName   , setUserName   ] = useState('');
    const [firstName  , setFirstName  ] = useState('');
    const [lastName   , setLastName   ] = useState('');

    useEffect(() => {
        let lsToken = localStorage.getItem('jwt-key');

        /**
         * If the JWT token is already stored in local storage,
         * decodes it and update state
         */ 
        if (lsToken) {
            let decodedToken = jwt_decode(lsToken);

            setUserName(decodedToken.user_name);
            setFirstName(decodedToken.first_name);
            setLastName(decodedToken.last_name);
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthenticatorContext.Provider
            value={{
                ctxUserName:   {userName  , setUserName  },
                ctxFirstName:  {firstName , setFirstName },
                ctxLastName:   {lastName  , setLastName  },
                ctxIsLoggedIn: {isLoggedIn, setIsLoggedIn}
            }}
        >
            {children}
        </AuthenticatorContext.Provider>
    )

}