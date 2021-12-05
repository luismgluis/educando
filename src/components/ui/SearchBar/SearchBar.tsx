import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TeacherList from "../../screens/TeacherScreen/TeacherList.json";
import { useEffect, useState } from "react";

import "./SearchBar.scss";
import React from "react";

type SearchBarItem = {
  id: string;
  name: string;
  lastName: string;
};
type CurrentListType = {
  data: SearchBarItem;
  firstLetter: string;
};
const TAG = "SEARCH BAR";
type SearchBarProps = {
  list: SearchBarItem[];
  onChange: (res: SearchBarItem) => void;
};
const SearchBar: React.FC<SearchBarProps> = ({ list, onChange }) => {
  const [currentlist, setCurrentList] = useState<CurrentListType[]>([]);

  useEffect(() => {
    const newList: CurrentListType[] = list.map((item) => {
      const firstLetter = item.name[0].toUpperCase();
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
        data: item,
      };
    });
    setCurrentList(newList);
  }, [list]);

  return (
    <Autocomplete
      options={currentlist.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.data.name}
      sx={{ width: 300 }}
      onChange={(e, newVal) => {
        if (newVal) onChange(newVal.data);
      }}
      renderInput={(params) => (
        <TextField {...params} label="usuarios registrados" />
      )}
    />
  );
};
export default SearchBar;
