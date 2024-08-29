import React, { useState, useEffect } from "react";
import { LinkData } from "../assets/data/dummydata";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(user !== null);
    });
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  const handleToggleDropdown = (event) => {
    if (isAuthenticated) {
      setShowDropdown(!showDropdown);

      // Check if the clicked element is "Logout"
      if (event.target.textContent.trim() === "Logout") {
        handleLogout();
      }
    }
  };

  return (
    <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
      <div className='container flex justify-between items-center'>
        <div className="flex justify-center items-center h-12 w-40 bg-gradient-to-r  rounded-lg ">
          <span className="text-3xl text-black font-playfair">SkillUp</span>
        </div>
        <nav className={open ? "mobile-view" : "desktop-view"}>
          <ul className='flex items-center gap-6'>
            {LinkData.map((link) => (
              <li key={link.id} onClick={() => setOpen(null)}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary text-sm" : "text-[15px]"
                  }
                  to={link.url}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className='account flex items-center gap-5'>
          <button className='open-menu' onClick={() => setOpen(!open)}>
            <HiOutlineMenuAlt1 size={25} />
          </button>
          <div className='flex justify-end'>
            {isAuthenticated && (
              <button
                onClick={handleToggleDropdown}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
              >
                <FontAwesomeIcon icon={faUser} size={25} className="text-gray-800" />
              </button>
            )}
            {showDropdown && (
              <div className='dropdown absolute top-full right-0 z-10 w-48 bg-white rounded shadow-md py-2'>
                <ul>
                  <li>
                    <a href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Profile
                    </a>
                  </li>

                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      My Courses
                    </a>
                  </li>
                  <li>
                    <a href="/progresspage" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Progress
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Certificates
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      Settings
                    </a>
                  </li>
                  <li>
                    <button
                      onClick={(e) => handleToggleDropdown(e)}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
            {!isAuthenticated && (
              <button onClick={() => window.location.href = "/login"}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};