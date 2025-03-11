import TeamCard from "@/components/TeamCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>MLB Standings</h1>
      <TeamCard logoUrl="" teamName="New York Yankees" wins="88" losses="39" />
    </div>
  );
}
