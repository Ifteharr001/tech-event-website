import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./firebase.config";
export const AuthContext = createContext(null)
const auth = getAuth(app)

    // google login
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign up
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Login
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
      // Log Out
     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }

    // authState
    const [user, setUser] = useState(null);

    // loading
    const [loading, setLoading] = useState(true)

    useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, activeUser => {
        setUser(activeUser)
        setLoading(false)
      });
      return () => {
        unSubscribe
      }
    }, [])



    const AuthInfo = {
        user,
        googleSignIn,
        signUp,
        logIn,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.object,
};