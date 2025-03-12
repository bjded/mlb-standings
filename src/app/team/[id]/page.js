"use client";

import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchTeamById } from "@/utils/api";

const TeamPage = () => {
  const { id } = useParams();
  const [teamInfo, setTeamInfo] = useState([]);

  useEffect(() => {
    const loadTeamData = async () => {
      const teamData = await fetchTeamById(id);
      setTeamInfo(teamData);
    };

    loadTeamData();
  }, [id]); // Empty array to only run once

  return (
    <div>
      <h1 className="my-2 text-4xl font-bold text-center">Team Page</h1>
      <div className="max-w-[1200px] m-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center items-center gap-2 pt-0 p-6">
        <Link href="/" className="col-span-full">
          <span className="border-b-2 text-blue-400 font-bold m-auto">
            Back to Teams
          </span>
        </Link>
        {teamInfo.map((team) => (
          <div key={team.id}>
            <p>{team.abbreviation}</p>
            <p>{team.active}</p>
            <p>{team.clubName}</p>
            <p>{team.division.name}</p>
            <p>{team.firstYearOfPlay}</p>
            <p>{team.league.name}</p>
            <p>{team.locationName}</p>
            <p>{team.springLeague.name}</p>
            <p>{team.venue.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
