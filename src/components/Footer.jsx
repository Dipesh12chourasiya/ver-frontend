import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import footerBg from "../assets/images/Rectangle.svg";
import { subscribeEmail } from "../services/Services";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const res = await subscribeEmail(email);
      setMessage(res.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      setMessage(error.message || "Failed to subscribe. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="mt-10">
      {/* Hero Section */}
      <div
        className="relative bg-gray-100 py-16 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage: `url('${footerBg}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-semibold mb-6 sm:mb-8">
            Learn more about our listing process, as well as our additional staging and design work.
          </p>
          <button className="bg-white text-blue-700 font-bold py-3 px-8 rounded-md hover:bg-gray-200 transition duration-300 shadow-lg">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Primary Footer Section */}
      <div className="bg-blue-600 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white space-y-4 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/projects" className="hover:underline">
              Projects
            </Link>
            <Link to="/clients" className="hover:underline">
              Testimonials
            </Link>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
            <span className="hidden sm:inline">Subscribe to us:</span>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded-l-md focus:outline-none border-1 border-white focus:ring-2 focus:ring-blue-300 placeholder-gray-400 text-gray-900"
            />
            <button
              onClick={handleSubscribe}
              disabled={loading}
              className="bg-white text-blue-600 font-medium py-2 px-4 rounded-r-md hover:bg-gray-200 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
        </div>
        {message && <p className="text-center text-sm text-white mt-2">{message}</p>}
      </div>

      {/* Secondary Footer Section */}
      <div className="bg-gray-800 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 space-y-2 sm:space-y-0">
          {/* Copyright */}
          <span>All rights reserved 2025</span>

          {/* Brand */}
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            <span className="font-semibold text-white">Real trust</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-3">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
