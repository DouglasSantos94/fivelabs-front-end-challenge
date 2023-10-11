import { SearchItemsButton } from "../../components/Button/styles";
import SearchInput from "../../components/Input/SearchInput";
import { SearchWrapper } from "./styles";

export default function Search() {
  return (
    <SearchWrapper>
      <SearchInput />
      <SearchItemsButton>Buscar veículo</SearchItemsButton>
    </SearchWrapper>
  );
}
