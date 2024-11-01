import React from 'react';
import logo from './assets/logo.png'; // Adjust the path as needed
import './Dashboard.css'; // Optional: Create a CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <img src={logo} alt="Logo" className="dashboard-logo" />
                <h1>Welcome to the Dashboard</h1>
            </header>
            <table className="ticket-table">
                <thead>
                    <tr>
                        <th>Ticket Number</th>
                        <th>Subject</th>
                        <th>Date of Creation</th>
                        <th>Department</th>
                        <th>Sub-Department</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add your ticket data here */}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;
