"use client";

import { useEffect, useState } from "react";
import { fetchTeamData } from "@/utils/api";
import TeamCard from "@/components/TeamCard";

export default function Home() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Fetch team data on component mount
    const loadTeams = async () => {
      const teamData = await fetchTeamData();
      setTeams(teamData);
    };

    loadTeams();
  }, []);

  return (
    <div>
      <h1 className="my-4 text-4xl font-bold text-center">MLB Standings</h1>
      <div className="max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-2 pt-0 p-6">
        {teams.map((team) => (
          <TeamCard
            key={team.id}
            teamId={team.id}
            teamName={team.name}
            teamAbbreviation={team.abbreviation}
            wins="0"
            losses="0"
          />
        ))}
      </div>
    </div>
  );
}
