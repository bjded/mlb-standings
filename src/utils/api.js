// https://statsapi.mlb.com/api/v1/teams?sportId=1
// https://statsapi.mlb.com/api/v1/standings?leagueId=103,104&season=2024

export const fetchTeamData = async (season = 2024) => {
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

export const fetchStandings = async (season = 2024) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_MLB_API}/standings?leagueId=103,104&season=${season}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch team data.");
    }
    const data = await response.json();
    const teamRecords = data.records.flatMap((record) => record.teamRecords);
    return teamRecords;
  } catch (error) {
    console.error("Error fetching team data:", error);
    return [];
  }
};

export const fetchCombinedStandings = async (season = 2024) => {
  try {
    const [teamsResponse, standingsResponse] = await Promise.all([
      fetch(
        `${process.env.NEXT_PUBLIC_MLB_API}/teams?sportId=1&season=${season}`
      ),
      fetch(
        `${process.env.NEXT_PUBLIC_MLB_API}/standings?leagueId=103,104&season=${season}`
      ),
    ]);

    if (!teamsResponse.ok || !standingsResponse.ok) {
      throw new Error("Failed to fetch data.");
    }

    const teamsData = await teamsResponse.json();
    const standingsData = await standingsResponse.json();

    // Create a lookup map for team abbreviations
    const teamMap = teamsData.teams.reduce((map, team) => {
      map[team.id] = team.abbreviation; // Assuming abbreviation is the field name
      return map;
    }, {});

    // Flatten standings and merge abbreviation from teamMap
    const teamRecords = standingsData.records.flatMap((record) =>
      record.teamRecords.map((teamRecord) => ({
        ...teamRecord,
        abbreviation: teamMap[teamRecord.team.id] || "N/A", // Add abbreviation
      }))
    );

    return teamRecords;
  } catch (error) {
    console.error("Error fetching combined team data:", error);
    return [];
  }
};
