import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();
  console.log(path);

  return (
    <header className="w-full bg-[#b5118f14] border-b-[#b5118f3f] border-b-1 p-4 md:p-8 box-border">
      <nav className="max-w-[1200px] m-auto flex flex-wrap sm:justify-between justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">MLB Standings</h1>
        <ul className="inline-flex gap-2  *:rounded-4xl *:px-6 *:py-2 *:font-bold *:hover:bg-[#b5118f3f]">
          <li className={path == "/" ? "border-1 border-[#b5118f7f]" : ""}>
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              path == "/teams" || path.includes("team")
                ? "border-1 border-[#b5118f7f]"
                : ""
            }
          >
            <Link href="/teams">Teams</Link>
          </li>
          <li
            className={path == "/scores" ? "border-1 border-[#b5118f7f]" : ""}
          >
            <Link href="/scores">Scores</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
