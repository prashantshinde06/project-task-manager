import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@utils/authProvider";

const Header = () => {
  const navigate = useNavigate();
   const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header__logo">Task Manager</div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <button 
              onClick={handleLogout} 
              className="logout-button"
              type="button"
            >
              LogOut
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
