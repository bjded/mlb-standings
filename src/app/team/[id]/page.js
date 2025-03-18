"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchTeamById } from "@/utils/api";
import NavBar from "@/components/NavBar";
import Row from "@/components/Row";

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
      <NavBar />
      <Row>
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
      </Row>
    </div>
  );
};

export default TeamPage;
