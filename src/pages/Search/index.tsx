import { SearchButton } from "../../components/Button/styles";
import SearchInput from "../../components/Input/SearchInput";
import { SearchWrapper } from "./styles";

export default function Search() {
  return (
    <SearchWrapper>
      <SearchInput />
      <SearchButton>Buscar veículo</SearchButton>
    </SearchWrapper>
  );
}
