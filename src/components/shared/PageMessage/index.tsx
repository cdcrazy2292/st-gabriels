import React from "react"
import { Center, Flex, Text, VStack } from "@chakra-ui/react"
import { GeneralPageMessage } from "../../../common/commonModels"

const PageMessage = (props: GeneralPageMessage) => {
  return (
    <Flex
      flexDir={"column"}
      h={["2xs", "xs"]}
      w={"100%"}
      bgColor={"brand.100"}
      justify={"center"}
      color={"brand.700"}
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
            <Text textStyle={"h1"} fontSize={["2xl", "5xl"]}>
              {props.headingMessage}
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Center w={"100%"}>
            <Text fontSize={["md", "2xl"]} textAlign={"center"}>
              {props.messageBody}
            </Text>
          </Center>
        </VStack>
        <VStack>
          <Center w={"100%"}>
            <Text as={"sub"} fontSize={["xs", "sm"]} textAlign={"center"}>
              {props.citation}
            </Text>
          </Center>
        </VStack>
      </Center>
    </Flex>
  )
}

export default PageMessage
