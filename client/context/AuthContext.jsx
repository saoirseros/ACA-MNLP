//first we need the backend url

import { createContext } from "react";
import axios from 'axios';
import { useState } from "react";


const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [authUser, setAuthUser] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [socket, setsocket] = useState(null);

    //check if user is authenticated and if so, set the user data and connect the socket
    const checkAuth = async () => {
        try {
           const { data } = await axios.get("/api/auth/check")
           if (data.success){
            setAuthUser(data.user)
           }
        } catch (error) {
            
        }
    }

    const value = {
        axios,
        authUser,
        onlineUsers,
        socket
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}