import { VStack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <VStack
        justifyContent={"center"}
        w={"full"}
        h={"fit-content"}
        bgColor={"blackAlpha.900"}
        p={8}
      >
        <Text color={"whiteAlpha.900"}>Copyright &copy; 2023 - All Rights Reserved</Text>
        <Text color={"whiteAlpha.900"}>Technomania - 2k23 - CSE - UBDTCE</Text>
        <Text color={"whiteAlpha.900"} fontSize={10}>Designed by Suhas Mallya</Text>
      </VStack>
  )
}

export default Footer