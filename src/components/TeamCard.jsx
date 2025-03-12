import React from "react";
import Link from "next/link";

const TeamCard = ({ teamId, teamName, teamAbbreviation }) => {
  return (
    <Link href={`/team/${teamId}`}>
      <div
        className={`${teamAbbreviation.toLowerCase()} flex flex-col justify-center items-center p-4 rounded-xl bg-gray-900 text-gray-100 text-center`}
      >
        <img
          src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${teamId}.svg`}
          alt={teamName}
          className="h-10"
        />
        <p className="mt-3 mb-1 font-bold">{teamName}</p>
      </div>
    </Link>
  );
};

export default TeamCard;
