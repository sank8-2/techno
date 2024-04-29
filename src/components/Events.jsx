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
} from "@chakra-ui/react";

import tech from "../techEventInfo";
import nontech from "../nonTechEventInfo";

import { Link } from "react-router-dom";
import {useEffect} from 'react';

const Events = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <>
      <Heading
        borderBottom={"10px double red"}
        borderRadius={"2xl"}
        textAlign={"center"}
        m={5}
        p={5}
      >
        Technical Events
      </Heading>
      <Stack p={[10,50]} flexDirection={["column","row"]} justifyContent={"space-evenly"} boxShadow='2xl' rounded='md' wrap={"wrap"} gap={5}>
        {tech.map((tech) => {
          return (
            <Card maxW={["full", "sm"]} border={"1px solid black"} boxShadow='2xl' rounded='md'>
              <CardBody>
                <Image src={tech.image} borderRadius="lg" />
                <Stack mt="6" spacing="3" textAlign={"center"}>
                  <Heading size="md">{tech.title}</Heading>
                  <Text>{tech.desc}</Text>
                  <Text color="yellow" fontSize="2xl">
                    {tech.timing} <br/> ({tech.date})
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
      <Stack p={[10,50]} flexDirection={["column","row"]} justifyContent={"space-evenly"} boxShadow='2xl' rounded='md' wrap={"wrap"} gap={5}>
        {nontech.map((nontech) => {
          return (
            <Card maxW={["full", "sm"]} border={"1px solid black"} boxShadow='2xl' rounded='md'>
              <CardBody>
                <Image src={nontech.image} borderRadius="lg" />
                <Stack mt="6" spacing="3" textAlign={"center"}>
                  <Heading size="md">{nontech.title}</Heading>
                  <Text>{nontech.desc}</Text>
                  <Text color="yellow" fontSize="2xl">
                    {nontech.timing} <br/>({nontech.date})
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
