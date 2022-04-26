import React from "react"
import { Center, Flex, Text, VStack } from "@chakra-ui/react"
import { GeneralPageMessage } from "../../../common/commonModels"

const PageMessage = (props: GeneralPageMessage) => {
  return (
    <Flex
      flexDir={"column"}
      h={["2xs", "sm"]}
      w={"100%"}
      bgColor={"brand.100"}
      justify={"center"}
      color={"brand.800"}
      bgImage={props.messageBackgroundImage.url}
      backgroundSize="100%"
      backgroundPosition={"center"}
    >
      <Center
        flexDir={"column"}
        background={"rgba(255, 255, 255, 0.1)"}
        h={"100%"}
        backdropFilter={"blur(4px)"}
      >
        <VStack>
          <Center w={"100%"}>
            <Text textStyle={"h1"} fontSize={["2xl", "7xl"]}>
              {props.headingMessage}
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Center w={"100%"}>
            <Text fontSize={["md", "3xl"]} textAlign={"center"}>
              {props.messageBody}
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Center w={"100%"}>
            <Text
              as={"sub"}
              fontWeight={800}
              fontSize={["xs", "md"]}
              textAlign={"center"}
            >
              {props.citation}
            </Text>
          </Center>
        </VStack>
      </Center>
    </Flex>
  )
}

export default PageMessage
