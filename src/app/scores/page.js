"use client";

import React from "react";
import { useEffect, useState } from "react";
import { fetchSchedule } from "@/utils/api";
import NavBar from "@/components/NavBar";
import TeamScore from "@/components/TeamScore";

const SchedulePage = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const loadScheduleData = async () => {
      const scheduleData = await fetchSchedule();
      console.log(scheduleData);
      setSchedule(scheduleData);
    };

    loadScheduleData();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="max-w-[1200px] my-8 m-auto grid grid-cols-1 md:grid-cols-2 gap-3 px-8 box-content">
        {!schedule.length ? (
          <p className="col-start-1 col-end-[-1] text-center">
            No games are scheduled to be played today.. 🥹
          </p>
        ) : (
          ""
        )}

        {schedule.map((game) => (
          <div
            key={game.gamePk}
            className="flex-col justify-center items-center border-1 border-[#b5118f3f] rounded-sm p-4 bg-transparent"
          >
            <p className="mb-1 font-semibold text-gray-300">
              {game.status.detailedState}
            </p>

            {/* Home Team */}
            <TeamScore
              key={game.teams.home.team.id}
              teamId={game.teams.home.team.id}
              teamName={game.teams.home.team.name}
              teamWins={game.teams.home?.leagueRecord?.wins}
              teamLosses={game.teams.home?.leagueRecord?.losses}
              isWinner={game.teams.home.isWinner}
              teamScore={game.teams.home.score}
            />

            {/* Away Team */}
            <TeamScore
              key={game.teams.away.team.id}
              teamId={game.teams.away.team.id}
              teamName={game.teams.away.team.name}
              teamWins={game.teams.away?.leagueRecord?.wins}
              teamLosses={game.teams.away?.leagueRecord?.losses}
              isWinner={game.teams.away.isWinner}
              teamScore={game.teams.away.score}
            />

            <p className="mt-2 rounded-sm px-2 py-1 sm:text-[0.9rem] text-[0.8rem] font-bold text-right text-gray-300">
              {new Date(game.gameDate).toLocaleTimeString([], {
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
