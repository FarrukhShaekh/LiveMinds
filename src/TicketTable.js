import React from 'react';
import './Dashboard.css';

const TicketTable = () => {
    // Sample data for tickets
    const tickets = [
        { ticketNumber: 1, subject: "Login Issue", date: "2023-10-01", department: "IT", subDepartment: "Support", status: "Open" },
        { ticketNumber: 2, subject: "Feature Request", date: "2023-10-02", department: "Product", subDepartment: "Development", status: "Closed" },
        { ticketNumber: 3, subject: "Bug Report", date: "2023-10-03", department: "QA", subDepartment: "Testing", status: "Open" },
        // Add more sample data as needed
    ];

    return (
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
                {tickets.map(ticket => (
                    <tr key={ticket.ticketNumber}>
                        <td>{ticket.ticketNumber}</td>
                        <td>{ticket.subject}</td>
                        <td>{ticket.date}</td>
                        <td>{ticket.department}</td>
                        <td>{ticket.subDepartment}</td>
                        <td>{ticket.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TicketTable;
