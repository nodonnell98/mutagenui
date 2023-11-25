import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="w-100 flex justify-start gap-2 items-center p-5 text-white bg-transparent">
      <Link to="/" className="text-3xl font-mono font-extrabold mr-5">MUTAGEN</Link>
      <ul className="flex space-x-5 font-mono">
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/rules">Rules</Link></li>
      </ul>
   </div>
  );
};

export default Navbar;