import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useCountries } from "../../contexts/CountryContext";
import { useLeagues } from "../../contexts/LeagueContext";
import { useSelectedLeague } from "../../contexts/SelectedLeagueContext";

const CountriesList = () => {
  const countries = useCountries();
  const leagues = useLeagues();
  const setSelectedLeague = useSelectedLeague();

  return (
    <Accordion allowToggle>
      {countries.map((country) => (
        <AccordionItem key={country}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {country}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {leagues
              .filter((league) => league.country === country)
              .map((league) => (
                <Box
                  key={league.id}
                  display="flex"
                  alignItems="center"
                  onClick={() => setSelectedLeague(league)}
                >
                  <Image
                    src={league.logo}
                    alt={league.name}
                    height="20px"
                    mr={3}
                  />
                  <Text>{league.name}</Text>
                </Box>
              ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CountriesList;
