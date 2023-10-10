import Search from "../Search";
import VehiclesList from "../VehiclesList";
import { HomeWrapper } from "./styles";

export default function Home() {
  return (
    <HomeWrapper>
      <Search />
      <VehiclesList />
    </HomeWrapper>
  );
}
