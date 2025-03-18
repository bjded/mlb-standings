import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="w-full bg-purple-500 p-8 box-border">
      <nav className="max-w-[1200px] m-auto flex flex-wrap justify-between items-center">
        <h1 className="text-3xl font-bold">MLB Standings</h1>
        <ul className="inline-flex gap-10 *:font-extrabold *:hover:opacity-75">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
          <li>
            <Link href="/schedule">Schedule</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
