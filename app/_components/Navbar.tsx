import React from "react";
import { Codepen, LogIn, MoveRight } from "lucide-react";
import { Button } from "../../components/ui/button";

function Navbar() {
  return (
    <header className="container mx-auto mt-4 px-28">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Codepen />
          <h1 className="font-semibold">Logo goes here</h1>
        </div>
        <ul className="flex items-center gap-7 ">
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
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className=" cursor-pointer bg-(--color-primary) text-(--color-btn-text-primary)   border-none gap-2 hover:bg-[#6F75B8] hover:text-white"
          >
            <LogIn size={16} />
            Login
          </Button>

          <Button
            variant="outline"
            className="cursor-pointer
              bg-transparent
              text-(--color-btn-text-secondary)
              
              gap-2"
          >
            Register
            <MoveRight size={14} />
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
