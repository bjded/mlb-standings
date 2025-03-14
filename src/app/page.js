"use client";

import { useEffect, useState } from "react";
import { fetchTeams } from "@/utils/api";
import NavBar from "@/components/NavBar";
// import TeamCard from "@/components/TeamCard";

export default function Home() {
  // const [teams, setTeams] = useState([]);

  // useEffect(() => {
  //   const loadTeamData = async () => {
  //     const teamData = await fetchTeams();
  //     setTeams(teamData);
  //   };

  //   loadTeamData();
  // }, []); // Empty array to only run once

  return (
    <div>
      <NavBar />
      <div className="max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-2 pt-0 p-4 box-border">
        <h1>Coming Soon..</h1>
      </div>
    </div>
  );
}
