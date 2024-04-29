import React from "react";
import {
  Container,
  Heading,
  Stack,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
} from "@chakra-ui/react";

import all from "../allEvents";

// import { Link } from "react-router-dom";

import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxW={["90vw", "100vw"]}>
        <Heading
          borderBottom={"10px double red"}
          borderRadius={"2xl"}
          textAlign={"center"}
          m={5}
          p={5}
        >
          Event Schedule
        </Heading>
        <Stack marginBottom={10} alignItems="center">
          <Table
            border={"2px"}
            width={["100%", "80%"]}
            variant="striped"
            colorScheme="blackAlpha"
          >
            <Thead>
              <Th color={"red.400"} textAlign={"center"}>
                Event
              </Th>
              <Th color={"red.400"} textAlign={"center"}>
                Date
              </Th>
              <Th color={"red.400"} textAlign={"center"}>
                Timings
              </Th>
              <Th color={"red.400"} textAlign={"center"}>
                Event Hall
              </Th>
            </Thead>

            <Tbody>
              {all.map((e) => {
                if (e.bold == "true")
                  return (
                    <Tr fontWeight={"bold"}>
                      <Td textAlign={"center"}>{e.title}</Td>
                      <Td textAlign={"center"}>{e.date}</Td>
                      <Td textAlign={"center"}>{e.timing}</Td>
                      <Td textAlign={"center"}>{e.room}</Td>
                    </Tr>
                  );
                else
                  return (
                    <Tr>
                      <Td textAlign={"center"}>{e.title}</Td>
                      <Td textAlign={"center"}>{e.date}</Td>
                      <Td textAlign={"center"}>{e.timing}</Td>
                      <Td textAlign={"center"}>{e.room}</Td>
                    </Tr>
                  );
              })}
            </Tbody>
          </Table>
        </Stack>
      </Container>
    </>
  );
};

export default Schedule;
