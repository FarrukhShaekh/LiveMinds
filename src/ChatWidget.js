import React, { useState } from 'react';
import './ChatWidget.css'; // Ensure this file exists and has your styles

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    const handleSend = () => {
        if (inputValue.trim() !== '') {
            setMessages([...messages, { text: inputValue, sender: 'user' }]);
            setInputValue('');
            // Simulate a response
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: "Hello! How can I assist you?", sender: 'bot' },
                ]);
            }, 1000);
        }
    };

    return (
        <div className={`chat-widget ${isOpen ? 'open' : ''}`}>
            <div className="floating-icon" onClick={toggleChat}>
                💬
            </div>
            {isOpen && (
                <div className="chat-body">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={msg.sender}>
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            )}
        </div>
    );
};

export default ChatWidget;
