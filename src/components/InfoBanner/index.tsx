import React, { useEffect, useState } from "react"
import { Center, Flex, VStack, Text } from "@chakra-ui/react"
import ChurchIcon from "/public/icons/011-church.svg"
import Christianity from "/public/icons/009-christianism.svg"
import Prayer from "/public/icons/prayer.svg"
import Religious from "/public/icons/022-religious.svg"
import Priest from "/public/icons/priest.svg"
import { Icon } from "@chakra-ui/icons"
import InfoCard from "./InfoCard"
import { getContentByQuery } from "../../services/common/ContentfulService"
import { getRegularParishSchedule } from "../../services/common/ContentfulService/queries/queries"
import {
  InfoCardElementData,
  INITIAL_REG_PARISH_SCHEDULE_STATE,
  INITIAL_SCHEDULE,
  RegularParishSchedule,
  Schedule,
} from "./types"

const LIGHT_TEXT_COLOR = "brand.50"
const DARK_TEXT_COLOR = "brand.900"
const INFO_CARD_PADDING = 5
const INFO_CARD_GAP = 2
const InfoBanner = () => {
  const [regParishSched, setRegParsihSched] = useState(
    INITIAL_REG_PARISH_SCHEDULE_STATE
  )

  const getIcon = (icon: any) => {
    return (
      <VStack>
        <Center>
          <Icon as={icon} fontSize={["2xl", "10xl"]} />
        </Center>
      </VStack>
    )
  }

  const getInfoCardContent = (scheduleContent: Schedule[]): JSX.Element[] => {
    const getInnerSection = (content: Schedule) => {
      return (
        <Flex flexDir={"column"} gap={1}>
          <VStack>
            <Text fontSize={["xm", "lg"]} fontWeight={600} textAlign={"center"}>
              {content.name}
            </Text>
          </VStack>
          <VStack>
            <Text textAlign={"center"}>{content.dateCadance}</Text>
          </VStack>
          <VStack>
            <Text>{content.time}</Text>
          </VStack>
        </Flex>
      )
    }
    return scheduleContent.map((content, index) => (
      <VStack key={index}>{getInnerSection(content)}</VStack>
    ))
  }

  const getFinalInfoCardListObj = (parishSchedList: RegularParishSchedule) => {
    return Object.entries(parishSchedList).map(([key, val], index) => {
      switch (key) {
        case "churchOpenSchedule":
          return {
            bgColor: "brand.500",
            color: LIGHT_TEXT_COLOR,
            icon: ChurchIcon,
            schedule: val,
          }
        case "churchHolyHour":
          return {
            bgColor: "brand.200",
            color: DARK_TEXT_COLOR,
            icon: Christianity,
            schedule: val,
          }
        case "confessionsSchedule":
          return {
            bgColor: "brand.800",
            color: LIGHT_TEXT_COLOR,
            icon: Prayer,
            schedule: val,
          }
        case "massSchedule":
          return {
            bgColor: "brand.300",
            color: DARK_TEXT_COLOR,
            icon: Religious,
            schedule: val,
          }
        case "churchOfficeHours":
          return {
            bgColor: "brand.700",
            color: LIGHT_TEXT_COLOR,
            icon: Priest,
            schedule: val,
          }
        default:
          return {
            bgColor: "brand.500",
            color: LIGHT_TEXT_COLOR,
            icon: ChurchIcon,
            schedule: [INITIAL_SCHEDULE],
          }
      }
    })
  }

  const getInfoCards = (parishSchedList: RegularParishSchedule) => {
    const finalInfoCardListObj = getFinalInfoCardListObj(parishSchedList)
    return finalInfoCardListObj.map((cardObj: InfoCardElementData, index) => {
      return (
        <InfoCard
          bgColor={cardObj.bgColor}
          color={cardObj.color}
          p={INFO_CARD_PADDING}
          gap={INFO_CARD_GAP}
          key={index}
        >
          {getIcon(cardObj.icon)}
          <>{getInfoCardContent(cardObj.schedule)}</>
        </InfoCard>
      )
    })
  }

  /** Component Logic **/

  useEffect(() => {
    getContentByQuery(getRegularParishSchedule).then((response) => {
      const regParishSched =
        response?.data?.data?.regularParishSchedule?.schedule
      setRegParsihSched(regParishSched)
    })
  }, [])

  getInfoCards(regParishSched)
  return (
    <Center h={"xl"} bgColor={"brand.150"}>
      <Flex w={"70%"} h={"100%"}>
        {getInfoCards(regParishSched)}
      </Flex>
    </Center>
  )
}

export default InfoBanner
