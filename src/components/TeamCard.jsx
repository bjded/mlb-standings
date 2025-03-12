import React from "react";

const TeamCard = ({ teamId, teamName, teamAbbreviation, wins, losses }) => {
  return (
    <div
      className={`${teamAbbreviation.toLowerCase()} flex flex-col justify-center items-center p-4 rounded-xl bg-gray-900 text-gray-100 text-center`}
    >
      <img
        src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${teamId}.svg`}
        alt={teamName}
        className="h-10"
      />
      <p className="mt-3 mb-1 font-bold">
        {teamName} {teamId}
      </p>
      <p className="font-semibold text-gray-200 text-2xl">
        {wins} - {losses}
      </p>
    </div>
  );
};

export default TeamCard;
