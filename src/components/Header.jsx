import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Image,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        position={"absolute"}
        top={[5, 7]}
        left={[1, 5]}
        variant={"outline"}
        borderRadius={"10"}
        zIndex={10}
        _hover={{ bgColor: "whiteAlpha.400" }}
        p={1}
        onClick={onOpen}
      >
        <BiMenuAltLeft color="white" size={[25, 45]} />
      </Button>
      <Drawer isOpen={isOpen} placement={"left"} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>TECHNOMANIA 2k24❤️</DrawerHeader>
            <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                  <Link to={"/"} >Home</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                  <Link to={"/schedule"} >Schedule</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme={"purple"}>
                  <Link to={"/events"} >Events</Link>
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <HStack
        justifyContent={"center"}
        w={"full"}
        h={["10vh", "15vh"]}
        bgColor={"blackAlpha.900"}
        position={"sticky"}
      >
        <Image src={logo} w={60} />
      </HStack>
    </>
  );
};

export default Header;
