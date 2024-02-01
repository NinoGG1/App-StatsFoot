import React from "react";
import Fixtures from "./components/Fixtures";
import Teams from "./components/Teams";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    color1: "#011e29",
    color2: "#010a10",
    color3: "#c80037",
    grey1: "#eeeeee",
    white1: "rgb(252, 252, 252)",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Teams />
      <Fixtures />
    </ChakraProvider>
  );
};

export default App;
