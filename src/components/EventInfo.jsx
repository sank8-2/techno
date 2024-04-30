import {
  Container,
  Heading,
  Stack,
  Image,
  VStack,
  Text,
  UnorderedList,
  ListItem,
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Td,
  Tr,
  Button,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import tech from "../techEventInfo";
import nontech from "../nonTechEventInfo";

const EventInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const params = useParams();
  let event = {};
  if (params.id < 10) {
    event = tech.filter((event) => event.id === params.id);
  } else {
    event = nontech.filter((event) => event.id === params.id);
  }
  return (
    <VStack p={10} boxShadow="2xl" rounded="md">
      {event.map((e) => {
        return (
          <Container maxW={["80vw", "70vw"]}>
            <Heading
              textAlign={"center"}
              marginBottom={5}
              borderBottom={"10px double red"}
              borderRadius={"2xl"}
              p={5}
            >
              {e.title}
            </Heading>
            <VStack marginBottom={7}>
              <Stack
                flexDirection={["column", "row"]}
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={[5, 20]}
              >
                <Image src={e.image} w={["100%", "40%"]} />
                <Text textAlign={"justify"}>
                  {e.desc}
                  <Box
                    boxShadow="2xl"
                    rounded="3xl"
                    textAlign={"center"}
                    marginTop={5}
                    bg="linkedin.800"
                    w="100%"
                    p={4}
                    color="white"
                  >
                    Timings : {e.timing} ({e.date})
                  </Box>
                </Text>
              </Stack>
            </VStack>
            <Heading size={["md", "lg"]} textAlign={"center"} marginBottom={5}>
              Instructions & Guidelines
            </Heading>
            <Stack px={[0, "10vw"]} py={[0, 7]} marginBottom={5}>
              {e.rules.map((event) => {
                if ((typeof event) === "string")
                  return <UnorderedList> <ListItem>{event}</ListItem>; </UnorderedList>
                else
                  return (
                    <UnorderedList styleType={"none"}>
                    <ListItem>
                      <UnorderedList styleType={"square"}>
                        {event.map((x) => (
                          <ListItem>{x}</ListItem>
                        ))}
                      </UnorderedList>
                    </ListItem>
                    </UnorderedList>
                  );
              })}
              </Stack>
            
            <Heading size={["md", "lg"]} textAlign={"center"} marginBottom={5}>
              Event Coordinators
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
                    Name
                  </Th>
                  <Th color={"red.400"} textAlign={"center"}>
                    Phone Number
                  </Th>
                </Thead>
                <Tbody>
                  {e.coordinators.map((coord) => {
                    return (
                      <Tr>
                        <Td textAlign={"center"}>{coord.name}</Td>
                        <Td textAlign={"center"}>{coord.phno}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </Stack>
            <Center>
              <Button colorScheme={"red"} size={"lg"} w={["80%"]}>
                <Link to={e.link} target="_blank">
                  REGISTER NOW
                </Link>
              </Button>
            </Center>
          </Container>
        );
      })}
    </VStack>
  );
};

export default EventInfo;
