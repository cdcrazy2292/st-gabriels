import React from "react"
import { Center, Flex, Spacer, Text } from "@chakra-ui/react"
import { ParishEvent } from "../types"
import { getLocaleDateDetails } from "../../../utils/LocaleUtils/localeutils"

const EventCard = (parishEvent: ParishEvent) => {
  const localeStartDateDetails = getLocaleDateDetails(parishEvent.startDate)
  // const localeEndDateDetails = parishEvent.endDate
  //   ? getLocaleDateDetails(parishEvent.endDate)
  //   : null

  const getTime = () =>
    `${localeStartDateDetails.enDate.hour}:
    ${localeStartDateDetails.enDate.minute} 
    ${localeStartDateDetails.enDate.dayPeriod}`

  return (
    <Flex
      flexDir={"column"}
      rounded={"lg"}
      boxShadow={"lg"}
      bgColor={"brand.150"}
      h={"90%"}
      w={"90%"}
      color={"brand.800"}
    >
      <Flex flexDir={"column"} alignItems={"flex-start"} pl={5} pr={5}>
        <Flex flexDir={"row"} w={"100%"}>
          <Flex flexDir={"column"}>
            <Text fontSize={["sm", "6xl"]}>
              {localeStartDateDetails.enDate.day}
              <Text fontSize={["2xs", "md"]} as={"sub"}>
                {localeStartDateDetails.enDate.month}
              </Text>
            </Text>
          </Flex>
          <Spacer />
          <Center>
            <Text fontSize={["3xs", "2xl"]}>{getTime()}</Text>
          </Center>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} overflow="hidden" pl={5} pr={5} pb={5}>
        <Center>
          <Text fontSize={["2xs", "3xl"]}>{parishEvent.eventTitle}</Text>
        </Center>
        <Spacer />
        <Center>
          <Text fontSize={["3xs", "lg"]}>{parishEvent.eventDescription}</Text>
        </Center>
      </Flex>
    </Flex>
  )
}

export default EventCard
