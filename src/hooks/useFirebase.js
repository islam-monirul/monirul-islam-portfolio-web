import { useEffect, useState } from "react";
import initializeFirebase from "./../Pages/Authentication/Firebase/firebase.init";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const auth = getAuth();

  //   sign in with email and password
  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // Signed in
        setAuthError("");

        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   logout function
  const logout = (history) => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setAuthError("");

        // reseting previous history on logout
        const destination = "/login";
        history.replace(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //   observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;

    // eslint-disable-next-line
  }, []);

  return {
    user,
    isLoading,
    authError,
    loginUser,
    logout,
  };
};

export default useFirebase;
