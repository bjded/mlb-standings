"use client";

import { useEffect, useState } from "react";
import { fetchStandings } from "@/utils/api";
import NavBar from "@/components/NavBar";
import Row from "@/components/Row";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const minimumYear = currentYear - 10;
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
      console.log(standingData);
      setStanding(standingData);
    };

    loadStandingData();
  }, [selectedYear]);

  const handleInputChange = (e) => {
    let newYear = parseInt(e.target.value, 10);
    if (!isNaN(newYear)) {
      newYear = Math.min(Math.max(newYear, minimumYear), currentYear);
      setSelectedYear(newYear);
    }
  };

  const incrementYear = () => {
    setSelectedYear((prevYear) => Math.min(prevYear + 1, currentYear));
  };

  const decrementYear = () => {
    setSelectedYear((prevYear) => Math.max(prevYear - 1, minimumYear));
  };

  return (
    <div>
      <NavBar />
      <Row>
        <div className="flex items-center justify-center md:justify-end">
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
              type="text"
              value={selectedYear}
              onChange={handleInputChange}
              className="border-t border-b border-gray-400 w-16 p-1 text-center"
              min={minimumYear}
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
        <p className="my-3 md:my-2 text-[0.9rem] text-center md:text-right">
          You can view the 10 most recent seasons! 🤓
        </p>

        <div className="grid grid-cols-1 gap-6">
          {divisions.map((division, index) => (
            <div key={division}>
              <h2 className="text-xl font-bold mb-2">{division}</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {standing.slice(index * 5, index * 5 + 5).map((team) => (
                  <div
                    key={team.team.id}
                    className="*:py-1 border-1 border-[#b5118f3f] rounded-sm p-4 text-center"
                  >
                    <p className="text-[1.1rem] font-semibold text-yellow-300">
                      {team.team.name}
                    </p>
                    <p className="font-bold text-xl">
                      ({team.leagueRecord.wins} - {team.leagueRecord.losses})
                    </p>
                    <p className="font-bold text-[1.1rem]">
                      {team.leagueRecord.pct}%
                    </p>
                    <p className="font-semibold text-[0.9rem]">
                      Games Behind:{" "}
                      {team.gamesBack === "-" ? "0.0" : team.gamesBack}
                    </p>
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
