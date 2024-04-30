import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Text,
  Stack,
  Heading,
  Image,
  Divider,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";

import tech from "../techEventInfo";
import nontech from "../nonTechEventInfo";

import { Link } from "react-router-dom";
import { useEffect } from "react";

const Events = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Heading
        borderBottom={"10px double red"}
        borderRadius={"2xl"}
        textAlign={"center"}
        m={5}
        p={5}
      >
        Special Prize
      </Heading>
      <UnorderedList px={[0, "10vw"]} py={[0, 7]} marginBottom={5}>
        <ListItem>
          Now get a chance to compete for Miss/Mr Technomania, awarded with cash
          prize.
        </ListItem>
        <ListItem>
          There will be a point system to deduce the Champions
        </ListItem>
        <ListItem>
          The student with highest winnings will have a chance to attain the
          Miss/Mr Technomania Title
        </ListItem>
        <ListItem>
          For Individual Events;
          <OrderedList>
            <ListItem>First Place Winners Will get 10 points</ListItem>
            <ListItem>Second Place Winners Will get 8 points</ListItem>
          </OrderedList>
        </ListItem>
        <ListItem>
          For Group Events;
          <OrderedList>
            <ListItem>
              Each Participant of First Place Will get 5 points
            </ListItem>
            <ListItem>
              Each Participant of Second Place Will get 3 points
            </ListItem>
          </OrderedList>
        </ListItem>
      </UnorderedList>
      <Heading
        borderBottom={"10px double red"}
        borderRadius={"2xl"}
        textAlign={"center"}
        m={5}
        p={5}
      >
        Technical Events
      </Heading>
      <Stack
        p={[10, 50]}
        flexDirection={["column", "row"]}
        justifyContent={"space-evenly"}
        boxShadow="2xl"
        rounded="md"
        wrap={"wrap"}
        gap={5}
      >
        {tech.map((tech) => {
          return (
            <Card
              maxW={["full", "sm"]}
              border={"1px solid black"}
              boxShadow="2xl"
              rounded="md"
            >
              <CardBody>
                <Image src={tech.image} borderRadius="lg" />
                <Stack mt="6" spacing="3" textAlign={"center"}>
                  <Heading size="md">{tech.title}</Heading>
                  <Text>{tech.desc}</Text>
                  <Text color="black" fontSize="2xl">
                    {tech.timing} <br /> ({tech.date})
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justifyContent={"center"}>
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/event/${tech.id}`}>REGISTER</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Stack>

      <Heading
        borderBottom={"10px double red"}
        borderRadius={"2xl"}
        textAlign={"center"}
        m={10}
        p={5}
      >
        Non-Technical Events
      </Heading>
      <Stack
        p={[10, 50]}
        flexDirection={["column", "row"]}
        justifyContent={"space-evenly"}
        boxShadow="2xl"
        rounded="md"
        wrap={"wrap"}
        gap={5}
      >
        {nontech.map((nontech) => {
          return (
            <Card
              maxW={["full", "sm"]}
              border={"1px solid black"}
              boxShadow="2xl"
              rounded="md"
            >
              <CardBody>
                <Image src={nontech.image} borderRadius="lg" />
                <Stack mt="6" spacing="3" textAlign={"center"}>
                  <Heading size="md">{nontech.title}</Heading>
                  <Text>{nontech.desc}</Text>
                  <Text color="black" fontSize="2xl">
                    {nontech.timing} <br />({nontech.date})
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter justifyContent={"center"}>
                <Button variant="solid" colorScheme="blue">
                  <Link to={`/event/${nontech.id}`}>REGISTER</Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </Stack>
    </>
  );
};

export default Events;
