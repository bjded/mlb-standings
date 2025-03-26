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
          <div key={team.id} className="*:pb-4 text-center">
            <p>
              <span className="font-bold block text-yellow-300">
                Team Name:
              </span>{" "}
              {team.clubName}
            </p>
            <p>
              <span className="font-bold block text-yellow-300">
                Abbreviation:
              </span>{" "}
              {team.abbreviation}
            </p>
            <p>
              <span className="font-bold block text-yellow-300">
                Established:
              </span>{" "}
              {team.firstYearOfPlay}
            </p>
            {/* <p>Status: {team.active}</p> */}
            <p>
              <span className="font-bold block text-yellow-300">Division:</span>{" "}
              {team.division.name}
            </p>
            <p>
              <span className="font-bold block text-yellow-300">
                Spring Training:
              </span>{" "}
              {team.springLeague.name}
            </p>
            {/* <p>{team.league.name}</p> */}
            <p>
              <span className="font-bold block text-yellow-300">
                Stadium Name:
              </span>{" "}
              {team.venue.name}
            </p>
            <p>
              <span className="font-bold block text-yellow-300">Located:</span>{" "}
              {team.locationName}
            </p>
          </div>
        ))}
      </Row>
    </div>
  );
};

export default TeamPage;
