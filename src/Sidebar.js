import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/logout">Logout</Link></li>
            </ul>
            <Link to="/login" className="login-button">Login</Link> {/* Login Button */}
        </div>
    );
}

export default Sidebar;
