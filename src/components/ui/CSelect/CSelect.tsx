import {
  Select,
  MenuItem,
  SelectProps,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useEffect, useState } from "react";
const TAG = "CUSTOM SELECT";
type SelectItems = {
  key: string;
  value: string;
};
interface CSelectProps extends SelectProps {
  items: SelectItems[];
}
const CSelect: React.FC<CSelectProps> = (props) => {
  console.log(TAG, "render");
  const [value, setValue] = useState("");
  useEffect(() => {
    if (props.value) {
      setValue(props.value + "");
    }
  }, [props.value]);
  useEffect(() => {
    if (props.items.length > 0) {
      setValue(props.items[0].key);
    }
  }, [props.items]);
  console.log(TAG, value);
  return (
    <FormControl fullWidth={props.fullWidth || true} sx={{ my: 1 }}>
      <InputLabel variant="standard" htmlFor={props.id} sx={{ p: 1 }}>
        {props.label}
      </InputLabel>
      <Select
        {...props}
        value={value}
        variant="filled"
        onChange={(e) => setValue(e.target.value + "")}
      >
        {props.items.map((item, index) => (
          <MenuItem key={`CSelectItem${index}`} value={item.key}>
            {item.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export default CSelect;
