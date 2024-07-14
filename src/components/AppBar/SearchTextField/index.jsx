import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";

const SearchTextField = () => {
  const [value, setSearch] = useState("");
  return (
    <TextField
      label="Search"
      type="text"
      size="small"
      value={value}
      onChange={(event) => {
        setSearch(event.target.value);
      }}
      sx={{
        minWidth: 120,
        maxWidth: 200,
        "& label": {
          color: "white"
        },
        "& input": {
          color: "white"
        },
        "& label.Mui-focused": {
          color: "white"
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white"
          },
          "&:hover fieldset": {
            borderColor: "white"
          },
          "& .Mui-focused fieldset": {
            borderColor: "white"
          }
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: "white" }} />
          </InputAdornment>
        ),
        endAdornment: value ? (
          <InputAdornment position="end">
            <ClearIcon
              sx={{ color: "white", cursor: "pointer" }}
              onClick={() => setSearch("")}
            />
          </InputAdornment>
        ) : null
      }}
    />
  );
};

export default SearchTextField;
