import React from "react";

// https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024

const TeamCard = ({ logoUrl, teamName, wins, losses }) => {
  return (
    <div className="grid justify-center items-center p-4 bg-gray-900 text-amber-50">
      <img src={logoUrl} alt={teamName} />
      <p className="text-2xl font-semibold">{teamName}</p>
      <p className="font-bold">
        {wins} - {losses}
      </p>
    </div>
  );
};

export default TeamCard;
