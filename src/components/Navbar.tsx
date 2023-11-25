import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="w-100 flex justify-between gap-2 items-center h h-12 pl-5 pr-5 text-white bg-transparent">
      <a href="/" className="text-3xl font-mono font-extrabold">MUATGEN</a>
      <ul className="flex space-x-2">
        <li><a href="/characters">Characters</a></li>
        <li><a href="/rules">Rules</a></li>
      </ul>
   </div>
  );
};

export default Navbar;