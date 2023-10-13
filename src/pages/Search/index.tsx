import { ChangeEventHandler } from "react";
import SearchInput from "../../components/Input/SearchInput";
import { SearchWrapper } from "./styles";

interface ISearchProps {
  filter: ChangeEventHandler;
}

export default function Search({ filter }: ISearchProps) {
  return (
    <SearchWrapper>
      <SearchInput filter={filter} />
    </SearchWrapper>
  );
}
