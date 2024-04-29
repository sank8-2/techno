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

import tech from "../techEventInfo";
import nontech from "../nonTechEventInfo";

// import { Link } from "react-router-dom";

import { useEffect } from "react";

const Schedule = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container maxW={["80vw", "70vw"]}>
        <Heading
          borderBottom={"10px double red"}
          borderRadius={"2xl"}
          textAlign={"center"}
          m={5}
          p={5}
        >
          Schedule
        </Heading>
        <Stack marginBottom={10} alignItems="center">
          <Table
            border={"2px"}
            width={["100%", "50%"]}
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
            </Thead>

            <Tbody>
              {tech.map((e) => {
                return (
                  <Tr>
                    <Td textAlign={"center"}>{e.title}</Td>
                    <Td textAlign={"center"}>{e.date}</Td>
                    <Td textAlign={"center"}>{e.timing}</Td>
                  </Tr>
                );
              })}
              {nontech.map((e) => {
                return (
                  <Tr>
                    <Td textAlign={"center"}>{e.title}</Td>
                    <Td textAlign={"center"}>{e.date}</Td>
                    <Td textAlign={"center"}>{e.timing}</Td>
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
