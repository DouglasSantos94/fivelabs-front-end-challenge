import SearchInput from "../../components/Input/SearchInput";
import { SearchWrapper } from "./styles";

export default function Search() {
  return (
    <SearchWrapper>
      <SearchInput />
      <button>Buscar veículo</button>
    </SearchWrapper>
  );
}
