"use client"
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 border-t border-gray-300 mt-auto">
      <div className="w-full md:w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-6 gap-4">
        
        {/* Logo & About */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-900">FreshCart</h2>
          <p className="text-sm text-gray-600">
            Fresh groceries, top deals, and fast delivery.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex gap-5">
          <a href="#" target="_blank" className="hover:text-[#4fa74f]">
            <i className="fa-brands fa-facebook text-2xl"></i>
          </a>
          <a href="#" target="_blank" className="hover:text-[#4fa74f]">
            <i className="fa-brands fa-twitter text-2xl"></i>
          </a>
          <a href="#" target="_blank" className="hover:text-[#4fa74f]">
            <i className="fa-brands fa-instagram text-2xl"></i>
          </a>
          <a href="#" target="_blank" className="hover:text-[#4fa74f]">
            <i className="fa-brands fa-linkedin text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FreshCart. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
