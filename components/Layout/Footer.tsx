"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">
          © {new Date().getFullYear()} Project Management Dashboard
        </p>
        <p className="text-sm mb-4">Designed and developed by Kartik Gothwal</p>
        <div>
          <a href="/privacy-policy" className="text-sm hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms-of-service" className="text-sm hover:underline ml-2">
            Terms of Service
          </a>
        </div>
        <div className="flex justify-center items-center mt-4">
          <a href="https://www.linkedin.com/in/kartikgothwal/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href="https://github.com/kartikgothwal" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaGithub className="text-2xl" />
          </a>
          <a href="https://kartik-gothwal.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <FaGlobe className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
