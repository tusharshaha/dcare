import initializeFirebase from "../Firebase/firebase.init"
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();
    const googleSignIn = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const registerNewUser = (email, password,name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setError('')
                updateUser(name)
                window.history.go(0)
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
        setIsLoading(true)
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
    }).finally(()=>setIsLoading(false))
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
            setIsLoading(false);
          });
    },[auth])

    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            setSuccess('')
          }).catch((error) => {
            setError(error.message)
          }).finally(()=>setIsLoading(false));
    }
    return {
        googleSignIn,
        logOut,
        registerNewUser,
        setError,
        logIn,
        setSuccess,
        setUser,
        setIsLoading,
        isLoading,
        success,
        user,
        error,
    }
}
export default useFirebase