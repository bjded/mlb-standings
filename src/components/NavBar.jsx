import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center flex-wrap gap-2 p-4 max-w-[1200px] m-auto box-border">
        <h1 className="text-3xl font-bold">MLB Standings</h1>
        <ul className="inline-flex gap-3">
          <li className="text-purple-300">
            <Link href="/">Home</Link>
          </li>
          <li className="text-purple-300">
            <Link href="/teams">Teams</Link>
          </li>
          <li className="text-purple-300">
            <Link href="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
