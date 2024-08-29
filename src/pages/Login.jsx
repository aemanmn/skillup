import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Route, Routes } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAgTnCyZ287pG3gRJ0JbyG2YLbN7vi7kr4",
  authDomain: "skillhub1-d27ea.firebaseapp.com",
  projectId: "skillhub1-d27ea",
  storageBucket: "skillhub1-d27ea.appspot.com",
  messagingSenderId: "316919189830",
  appId: "1:316919189830:web:46a45a7cdb63b04baad547"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/Dashboard", { state: { username: user.displayName } });
      }
    });
    return unsubscribe;
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    if (isNewUser) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          updateProfile(userCredential.user, { displayName: username })
            .then(() => {
              console.log("User created successfully:", userCredential.user);
              navigate("/Dashboard", { state: { username: username } });
            })
            .catch((error) => {
              setError(error.message);
              setLoading(false);
            });
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("User logged in successfully:", userCredential);
          navigate("/Dashboard", { state: { username: userCredential.user.displayName } });
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">{isNewUser ? "Register" : "Login"}</h2>
      <form onSubmit={handleLogin} className="max-w-md mx-auto p-4 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
        {isNewUser && (
          <label className="block mb-2" htmlFor="username">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="block w-full p-2 pl-10 text-sm text-gray-700"
            />
          </label>
        )}
        <label className="block mb-2" htmlFor="email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        <label className="block mb-2" htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="block w-full p-2 pl-10 text-sm text-gray-700"
          />
        </label>
        {isNewUser ? (
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>
        ) : (
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        )}
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <p className="text-sm text-gray-600">
        {isNewUser ? (
                    <span>
                    Already have an account?{" "}
                    <button
                      onClick={() => setIsNewUser(false)}
                      className="text-orange-500 hover:text-orange-700"
                    >
                      Login
                    </button>
                  </span>
                ) : (
                  <span>
                    Don't have an account?{" "}
                    <button
                      onClick={() => setIsNewUser(true)}
                      className="text-orange-500 hover:text-orange-700"
                    >
                      Register
                    </button>
                  </span>
                )}
              </p>
            </div>
          );
        };
        
        export const Dashboard = () => {
          const navigate = useNavigate();
          const username = navigate.location.state.username;
        
          const handleLogout = () => {
            signOut(auth).then(() => {
              navigate("/");
            });
          };
        
          return (
            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
              <h2 className="text-3xl font-bold">Dashboard</h2>
              <p className="text-lg font-bold">Welcome, {username}!</p>
              <button
                onClick={handleLogout}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                Logout
              </button>
            </div>
          );
        };
        
        const App = () => {
          return (
            <div>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          );
        };
        
        export default App;