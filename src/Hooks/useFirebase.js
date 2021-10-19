import initializeFirebase from "../Firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();
    const googleSignIn = ()=>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
            setSuccess("your Are Successfully Sign up")
        })
        .catch(error => {
            setError(error.message)
            setSuccess("")
        })
    }
    const registerNewUser = (email, password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError('')
                updateUser(name)
            })
            .catch((error) => {
                if(error.message.includes('email-already-in-use')){
                    setError('Your Already registered. Please Login')
                }else{
                    setError(error.message)
                }
            });
        }
    const logIn = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setSuccess("your Are Successfully login")
        setError("");
      }).catch(error => {
        if (error.message.includes("user-not-found")) {
          setError("invalid email and Password");
          setSuccess("")
        }else if(error.message.includes("wrong-password")){
            setError('Your password is incorrect')
        }
        else{
            setError(error.message)
        }
    })
    }
    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => { }).catch(err => setError(err.message));
    }
    // Get currenly signIn user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            setUser(user)
            setError('')
            }else{
                setUser({})
            }
          });
    },[])

    const logOut = ()=>{
        signOut(auth).then(() => {
            setUser({})
            setSuccess('')
          }).catch((error) => {
            setError(error.message)
          });
    }
    return {
        googleSignIn,
        logOut,
        registerNewUser,
        setError,
        logIn,
        success,
        user,
        error,
    }
}
export default useFirebase