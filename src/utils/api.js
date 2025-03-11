// https://statsapi.mlb.com/api/v1/teams?sportId=1
// https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024

export const fetchTeamData = async () => {
  try {
    const response = await fetch(
      "https://statsapi.mlb.com/api/v1/teams?sportId=1&season=2025"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch team data.");
    }
    const data = await response.json();
    return data.teams;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return []; // Return an empty array in case of error
  }
};
