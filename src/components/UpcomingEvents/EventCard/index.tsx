import React from "react"
import { Center, Flex, Spacer, Text } from "@chakra-ui/react"

const EventCard = () => {
  return (
    <Flex
      flexDir={"column"}
      borderRadius="lg"
      bgColor={"brand.150"}
      overflow="hidden"
      h={"80%"}
      w={"30%"}
      color={"brand.800"}
    >
      <Flex flexDir={"column"} alignItems={"flex-start"} pl={5} pr={5}>
        <Flex flexDir={"column"}>
          <Text fontSize={["xl", "6xl"]}>
            25
            <Text fontSize={["2xs", "md"]} as={"sub"}>
              June
            </Text>
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} overflow="hidden" pl={5} pr={5} pb={5}>
        <Center>
          <Text fontSize={["xs", "3xl"]}>The Great Mission</Text>
        </Center>
        <Spacer />
        <Center>
          <Text fontSize={["2xs", "lg"]}>
            Come to the park to listen to experiences from young people and
            their journey to being Christian at such young age
          </Text>
        </Center>
      </Flex>
    </Flex>
  )
}

export default EventCard
