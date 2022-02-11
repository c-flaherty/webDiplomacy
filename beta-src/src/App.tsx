import * as React from "react";
import "./assets/css/App.css";
import Box from "@mui/material/Box";
import WDMain from "./components/ui/WDMain";
import map from "./assets/svg/map.svg";

const App: React.FC = function (): React.ReactElement {
  return (
    <Box className="App">
      <WDMain />
    </Box>
  );
};

export default App;