"use client";
import { useState } from "react";
import { Codepen, LogIn, MoveRight, Menu, X } from "lucide-react";
import { Button } from "../../components/ui/button";

function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="lg:container lg:mx-auto lg:mt-1 bg-white ">
      <nav className="flex items-center justify-between lg:px-28 py-4 ">
        <div className="flex items-center gap-2 px-4">
          <Codepen />
          <h1 className="font-semibold text-logo-text">Logo goes here</h1>
        </div>
        <ul className="flex items-center gap-7 cursor-pointer text-nav-text max-lg:hidden">
          <li>Home</li>
          <li>
            <select className="outline-none bg-transparent cursor-pointer">
              <option>Features</option>
            </select>
          </li>
          <li>Pricing</li>
          <li>Solutions</li>
          <li>
            <select className="outline-none bg-transparent cursor-pointer">
              <option>Resources</option>
            </select>
          </li>
          <li>Contact</li>
        </ul>
        <div className="lg:hidden px-4">
          {show ? (
            <X onClick={() => setShow(false)} />
          ) : (
            <Menu onClick={() => setShow(true)} />
          )}
        </div>
        <div className="flex items-center gap-2 max-lg:hidden">
          <Button
            variant="outline"
            className="bg-primary cursor-pointer text-btn-text-primary border-none gap-2 hover:bg-hover-primary hover:text-white"
          >
            <LogIn size={16} />
            Login
          </Button>

          <Button
            variant="outline"
            className="cursor-pointer  text-btn-text-secondary gap-2"
          >
            Register
            <MoveRight size={14} />
          </Button>
        </div>
        <ul
          className={`fixed top-16  w-full
          flex flex-col gap-4
          transition-transform duration-150 transform ease-in-out
          cursor-pointer text-nav-text bg-gray-300
          lg:hidden px-5 py-3
          ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
        >
          <li>Home</li>
          <li>
            <select className="outline-none  cursor-pointer ">
              <option>Features</option>
            </select>
          </li>
          <li>Pricing</li>
          <li>Solutions</li>
          <li>
            <select className="outline-none  cursor-pointer">
              <option>Resources</option>
            </select>
          </li>
          <li>Contact</li>
          <div className="space-x-4">
            <Button
              variant="outline"
              className="bg-primary cursor-pointer text-btn-text-primary border-none gap-2 hover:bg-hover-primary hover:text-white  "
            >
              <LogIn size={16} />
              Login
            </Button>

            <Button
              variant="outline"
              className="cursor-pointer bg-transparent text-btn-text-secondary gap-2 "
            >
              Register
              <MoveRight size={14} />
            </Button>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
