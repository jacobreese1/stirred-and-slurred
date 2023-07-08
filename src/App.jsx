import { Box } from "@mui/material";
import "./App.css";
import Content from "./components/Content";
import Homepage from "./pages/Homepage";
import React from "react";

function App() {
  return (
    <Box>
      <Homepage />
      <Content />
    </Box>
  );
}

export default App;
