import React from "react";
import Image from "next/image";

const TeamScore = ({
  teamId,
  teamName,
  teamWins,
  teamLosses,
  isWinner,
  teamScore,
}) => {
  return (
    <div className="mb-1 flex justify-between items-center">
      <p className="flex justify-center items-center gap-2 text-[1.1rem] lg:text-2xl md:text-xl font-bold text-white">
        <Image
          src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${teamId}.svg`}
          alt={teamName}
          width={24}
          height={24}
          className="w-6 h-auto aspect-square"
        />
        {teamName}
        <span className="text-[0.9rem] font-semibold color-gray-300">
          ({teamWins}-{teamLosses})
        </span>
      </p>
      <p
        className={`text-2xl lg:text-3xl font-extrabold ${
          isWinner == true ? "text-yellow-300" : "text-white"
        }`}
      >
        {teamScore ?? 0}
      </p>
    </div>
  );
};

export default TeamScore;
