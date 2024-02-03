import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="w-screen h-24 flex justify-start gap-2 items-center p-5 bg-transparent absolute top-0 left-0 z-100 shadow-xl" style={{backgroundColor: '#233039'}}>
      <Link to="/" className="text-5xl font-mono font-extrabold mr-5">MUTAGEN</Link>
      <ul className="flex space-x-5 font-mono text-xl">
        {/* <li><Link to="/characters">Characters</Link></li> */}
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/strikey">S.A.M</Link></li>
      </ul>
   </div>
  );
};



export default Navbar;