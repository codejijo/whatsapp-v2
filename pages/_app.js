import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import Login from "./login";
import Loader from "../components/Loading";
import { useEffect } from "react";
import { ToastProvider } from "../context/ToastContext";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, "users", user.uid),
        {
          name: user?.displayName,
          email: user?.email,
          lastSeen: serverTimestamp(),
          photoURL: user?.photoURL,
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) return <Loader />;
  if (!user) return <Login />;
  return (
    <ToastProvider>
      <Component {...pageProps} />
    </ToastProvider>
  );
}

export default MyApp;
