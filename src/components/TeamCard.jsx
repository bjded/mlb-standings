import React from "react";
import Link from "next/link";

const TeamCard = ({
  teamId,
  teamName,
  teamAbbreviation,
  teamLeagueId,
  teamDivisionName,
}) => {
  return (
    <Link href={`/team/${teamId}`}>
      <div
        className={`${teamAbbreviation.toLowerCase()} flex flex-col justify-center items-center px-4 pt-8 pb-7 rounded-xl hover:scale-[103%] hover:transition-transform bg-gray-900 text-gray-100 text-center`}
      >
        <img
          src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${teamId}.svg`}
          alt={teamName}
          className="h-14"
        />
        <p className="mt-3 mb-3 text-[1.2rem] font-bold">{teamName}</p>
        <p
          className={`rounded-sm px-2 py-1 font-semibold bg-white text-[0.7rem] text-black tracking-wide ${
            teamLeagueId == 103 ? "text-red-600" : "text-blue-600"
          }`}
        >
          {teamDivisionName
            .replace(/American League/, "AL")
            .replace(/National League/, "NL")}
        </p>
      </div>
    </Link>
  );
};

export default TeamCard;
