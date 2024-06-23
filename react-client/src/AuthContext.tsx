import React, { useContext, useState } from 'react'



interface AuthContext {
    authUser: string,
    setAuthUser: React.Dispatch<React.SetStateAction<string>>,
    isLoggedIn: boolean,
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const AuthContext = React.createContext<AuthContext>({
    authUser: "",
    setAuthUser: () => {},
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider(props: any) {
    const [authUser, setAuthUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const value = {
        authUser,
        setAuthUser, 
        isLoggedIn, 
        setIsLoggedIn
    }
    return( 
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
}

