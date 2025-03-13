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
      {schedule.map((game) => (
        <div key={game.gamePk} className="max-w-[1200px] m-auto pt-0 p-4">
          <p>{new Date(game.gameDate).toLocaleString()}</p>
          <p>
            ({game.teams.home.score}) {game.teams.home.team.name} vs. (
            {game.teams.away.score}) {game.teams.away.team.name}
          </p>
          <p>{game.status.detailedState}</p>
        </div>
      ))}
    </div>
  );
};

export default SchedulePage;
