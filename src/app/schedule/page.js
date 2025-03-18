"use client";

import React from "react";
import { useEffect, useState } from "react";
import { fetchSchedule } from "@/utils/api";
import NavBar from "@/components/NavBar";

const SchedulePage = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const loadScheduleData = async () => {
      const scheduleData = await fetchSchedule();
      console.log(scheduleData);
      setSchedule(scheduleData);
    };

    loadScheduleData();
  }, []); // Empty array to only run once

  return (
    <div>
      <NavBar />
      <div className="max-w-[1200px] my-8 m-auto grid grid-cols-1 md:grid-cols-2 gap-3 px-8 box-content">
        {schedule.map((game) => (
          <div
            key={game.gamePk}
            className="flex-col justify-center items-center border-1 border-[#b5118f3f] rounded-sm p-4 bg-transparent"
          >
            <p className="mb-1 font-semibold text-gray-300">
              {game.status.detailedState}
            </p>
            {/* Home Team */}
            <div className="mb-1 flex justify-between items-center">
              <p className="flex justify-center items-center gap-2 lg:text-2xl md:text-xl font-bold text-white">
                <img
                  src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${game.teams.home.team.id}.svg`}
                  alt={game.teams.home.team.name}
                  className="w-6 aspect-square"
                />
                {game.teams.home.team.name}
                <span className="text-[0.9rem] font-semibold color-gray-300">
                  ({game.teams.home?.leagueRecord?.wins}-
                  {game.teams.home?.leagueRecord?.losses})
                </span>
              </p>
              <p
                className={`text-2xl lg:text-3xl font-extrabold ${
                  game.teams.home.isWinner == true
                    ? "text-yellow-300"
                    : "text-white"
                }`}
              >
                {game.teams.home.score ?? 0}
              </p>
            </div>
            {/* Away Team */}
            <div className="flex justify-between items-center">
              <p className="flex justify-center items-center gap-2 lg:text-2xl md:text-xl font-bold text-white">
                <img
                  src={`https://www.mlbstatic.com/team-logos/team-cap-on-dark/${game.teams.away.team.id}.svg`}
                  alt={game.teams.away.team.name}
                  className="w-6 aspect-square"
                />
                {game.teams.away.team.name}
                <span className="text-[0.9rem] font-semibold color-gray-300">
                  ({game.teams.away?.leagueRecord?.wins}-
                  {game.teams.away?.leagueRecord?.losses})
                </span>
              </p>
              <p
                className={`text-2xl lg:text-3xl font-extrabold ${
                  game.teams.away.isWinner == true
                    ? "text-yellow-300"
                    : "text-white"
                }`}
              >
                {game.teams.away.score ?? 0}
              </p>
            </div>
            <p className="mt-2 rounded-sm px-2 py-1 sm:text-[0.9rem] text-[0.8rem] font-bold text-right text-gray-300">
              {new Date(game.gameDate).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
