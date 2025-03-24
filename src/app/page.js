"use client";

import { useEffect, useState } from "react";
import { fetchStandings } from "@/utils/api";
import NavBar from "@/components/NavBar";
import Row from "@/components/Row";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [standing, setStanding] = useState([]);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const divisions = [
    "AL East",
    "AL Central",
    "AL West",
    "NL East",
    "NL Central",
    "NL West",
  ];

  useEffect(() => {
    const loadStandingData = async () => {
      const standingData = await fetchStandings(selectedYear);
      setStanding(standingData);
    };

    loadStandingData();
  }, [selectedYear]);

  const handleInputChange = (e) => {
    let newYear = parseInt(e.target.value, 10);
    if (!isNaN(newYear)) {
      newYear = Math.min(Math.max(newYear, 2000), currentYear);
      setSelectedYear(newYear);
    }
  };

  const incrementYear = () => {
    setSelectedYear((prevYear) => Math.min(prevYear + 1, currentYear));
  };

  const decrementYear = () => {
    setSelectedYear((prevYear) => Math.max(prevYear - 1, 2000));
  };

  return (
    <div>
      <NavBar />
      <Row>
        <div className="flex items-center justify-center md:justify-end sm:mb-0 mb-5">
          <label htmlFor="current-year" className="mr-2 font-bold">
            Current Year:{" "}
          </label>
          <div className="flex items-center">
            <button
              onClick={decrementYear}
              className="px-4 py-1 border border-gray-400 rounded-l font-bold bg-[#b5118f3f] text-white hover:cursor-pointer"
            >
              -
            </button>
            <input
              id="current-year"
              type="number"
              value={selectedYear}
              onChange={handleInputChange}
              className="border-t border-b border-gray-400 w-24 p-1 pl-4 text-center"
              min="2000"
              max={currentYear}
            />
            <button
              onClick={incrementYear}
              className="px-4 py-1 border border-gray-400 rounded-r font-bold bg-[#b5118f3f] text-white hover:cursor-pointer"
            >
              +
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {divisions.map((division, index) => (
            <div key={division}>
              <h2 className="text-xl font-bold mb-2">{division}</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {standing.slice(index * 5, index * 5 + 5).map((team) => (
                  <div
                    key={team.team.id}
                    className="border-1 border-[#b5118f3f] rounded-sm p-4"
                  >
                    <p className="text-[1.2rem] font-semibold">
                      {team.team.name}
                    </p>
                    <p className="font-bold">
                      Record: ({team.leagueRecord.wins} -{" "}
                      {team.leagueRecord.losses})
                    </p>
                    <p className="font-semibold">{team.leagueRecord.pct}%</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
}
