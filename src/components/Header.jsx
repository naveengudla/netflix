import { HEADER_LOGO } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          setUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/home");
      } else {
        dispatch(clearUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="fixed top-0 left-0 px-6 py-4 bg-gradient-to-b from-black to-transparent w-full z-2000 flex justify-between items-center">
      <img className="w-44" src={HEADER_LOGO} alt="Netflix" />
      {user && (
        <div className="flex items-center gap-6">
          <div className="px-4 py-2 rounded-md backdrop-blur-sm">
            <div className="text-white text-sm font-semibold">
              Welcome, <span className="text-red-500">{user.displayName}</span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
