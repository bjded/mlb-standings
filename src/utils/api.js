// https://statsapi.mlb.com/api/v1/teams?sportId=1
// https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024

const defaultSeason = 2025;

export const fetchTeams = async (season = defaultSeason) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MLB_API}/teams?sportId=1&season=${season}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch team data.");
    }
    const data = await response.json();
    return data.teams;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
};

export const fetchTeamById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MLB_API}/teams?sportId=1&teamId=${id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch team data.");
    }
    const data = await response.json();
    return data.teams;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
};

export const fetchSchedule = async (season = defaultSeason) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MLB_API}/schedule?sportId=1`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch team data.");
    }
    const data = await response.json();
    return data.dates.flatMap((record) => record.games);
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
};

export const fetchStandings = async (season = defaultSeason) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MLB_API}/standings?leagueId=103,104&season=${season}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch team data.");
    }
    const data = await response.json();
    return data.records.flatMap((record) => record.teamRecords);
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
};
