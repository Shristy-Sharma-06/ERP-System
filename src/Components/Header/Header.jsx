import React from "react";

import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="bg-blue-600 text-white w-full shadow-md  sticky z-50 top-0">
        <nav className="w-full px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Left side: Logo and School Name */}
            <div className="flex items-center space-x-4">
              <img
                src="https://dummyimage.com/40x40/ffffff/000000&text=L"
                alt="logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">XYZ LiteraZee School</span>
            </div>

            {/* Right side: NavLink and profile */}
            {/* <ul className="mt-4 md:mt-0">
            <li>
              <NavLink
                to="/profile"
                className="flex items-center space-x-2 hover:text-yellow-300 transition-colors"
              >
                <span>Welcome Teacher</span>
                <img
                  src="https://dummyimage.com/30x30/ffffff/000000&text=T"
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover"
                />
              </NavLink>
            </li>
          </ul> */}
          </div>
        </nav>
      </header>

      
    </>
  );
}

export default Header;
