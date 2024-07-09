import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Mode</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={mode}
        label="Mode"
        onChange={(e) => setMode(e.target.value)}
      >
        <MenuItem value={"light"}>
          <Box sx={{ alignItems: "center", gap: 2, display: "flex" }}>
            <LightModeIcon /> Light
          </Box>
        </MenuItem>
        <MenuItem value={"dark"}>
          <Box sx={{ alignItems: "center", gap: 2, display: "flex" }}>
            <DarkModeIcon /> Dark
          </Box>
        </MenuItem>
        <MenuItem value={"system"}>
          <Box sx={{ alignItems: "center", gap: 2, display: "flex" }}>
            <SettingsApplicationsIcon /> System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
function App() {
  return (
    <>
      <ModeToggle />
      <Button variant="contained">Hello world</Button>
    </>
  );
}

export default App;
