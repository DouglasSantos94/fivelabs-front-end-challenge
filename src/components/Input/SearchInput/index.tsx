import { ChangeEventHandler } from "react";
import { SearchInputWrapper } from "../styles";

interface ISearchInputProps {
  filter: ChangeEventHandler;
}

export default function SearchInput({ filter }: ISearchInputProps) {
  return <SearchInputWrapper onChange={filter} placeholder="Busque por nome ou modelo" />;
}
