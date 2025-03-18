"use client";

import { useEffect, useState } from "react";
import { fetchTeams } from "@/utils/api";
import NavBar from "@/components/NavBar";
import TeamCard from "@/components/TeamCard";

export default function Home() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const loadTeamData = async () => {
      const teamData = await fetchTeams();

      // Sort first by division.id, then by team name alphabetically
      const sortedTeams = teamData.sort((a, b) => {
        // First compare by division.id
        const divisionComparison = a.division.id - b.division.id;

        // If divisions are equal, compare by name alphabetically
        if (divisionComparison === 0) {
          return a.name.localeCompare(b.name);
        }

        // If divisions are different, return the division comparison
        return divisionComparison;
      });

      console.log(sortedTeams);
      setTeams(sortedTeams);
    };

    loadTeamData();
  }, []); // Empty array to only run once

  return (
    <div>
      <NavBar />
      <div className="max-w-[1200px] my-8 m-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-3 px-8 box-content">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            teamId={team.id}
            teamName={team.name}
            teamAbbreviation={team.abbreviation}
            teamLeagueId={team.league.id}
            teamDivisionName={team.division.name}
          />
        ))}
      </div>
    </div>
  );
}
