import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {

    cosnt [user, setUser] = useState({});
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        return setDoc(doc(db, "user", email), {
            favorites: [],
        })
    }
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth);
    }

    useEffect(() => {
        cosnt unsubscribe = onAuthStateChanged(a, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <UserContext.Provider value={{user, signUp, signIn, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext)
}