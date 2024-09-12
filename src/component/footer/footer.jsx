import React from 'react'
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-24 ">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <p className="text-sm">© {new Date().getFullYear()} DARK . All rights reserved.</p>
                </div>
                <div className="flex space-x-4">
                    <a href="/contact" className="hover:underline">Contact</a>
                    <a href="/about" className="hover:underline">About</a>
                    <a href="/" className="hover:underline">Terms of Service</a>
                    <a href="/" className="hover:underline">License</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
