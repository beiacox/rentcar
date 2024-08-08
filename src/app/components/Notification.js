// components/Notification.js
import { useState, useEffect } from 'react';

const Notification = ({ message }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (message) {
            setShow(true);
            const timer = setTimeout(() => setShow(false), 3000); // Show for 3 seconds
            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!show) return null;

    return (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl transform transition-all duration-300 ease-in-out">
            <div className="flex items-center">
                <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2l4-4m0 9a9 9 0 1 0-18 0a9 9 0 0 0 18 0z"
                    ></path>
                </svg>
                <span className="text-lg font-semibold">{message}</span>
            </div>
        </div>
    );
};

export default Notification;
