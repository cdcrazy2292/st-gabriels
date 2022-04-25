import React from "react"
import { Center, Flex, Text, VStack } from "@chakra-ui/react"

const About = () => {
  return (
    <Flex
      flexDir={"column"}
      h={["2xs", "xs"]}
      w={"100%"}
      bgColor={"brand.100"}
      justify={"center"}
      color={"brand.700"}
    >
      <VStack>
        <Center w={"100%"}>
          <Text textStyle={"h1"}>Welcome</Text>
        </Center>
      </VStack>
      <VStack>
        <Center w={"100%"}>Description </Center>r
      </VStack>
    </Flex>
  )
}

export default About
