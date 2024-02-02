import React from "react";
import Fixtures from "./components/Fixtures";
import Teams from "./components/Teams";
import { Box, ChakraProvider, Flex, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import { ContextProvider } from "./contexts/Index";

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
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <Box bg="color1" color="grey1" minHeight="100vh">
          <Box maxW="1400px" mx="auto">
            <Header />
            <Flex>
              <Box flex="1">
                <SideMenu />
              </Box>
              <Box flex="1">
                <Teams />
                <Fixtures />
              </Box>
            </Flex>
          </Box>
        </Box>
      </ChakraProvider>
    </ContextProvider>
  );
};

export default App;
