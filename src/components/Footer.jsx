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
        <Text color={"whiteAlpha.900"}>Copyright &copy; 2024 - All Rights Reserved</Text>
        <Text color={"whiteAlpha.900"}>Technomania - 2k24 - CSE - UBDTCE</Text>
      </VStack>
  )
}

export default Footer