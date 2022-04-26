import React, { useEffect, useState } from "react"
import { Center, Flex, VStack, Text } from "@chakra-ui/react"
import ChurchIcon from "/public/icons/011-church.svg"
import Christianity from "/public/icons/009-christianism.svg"
import Prayer from "/public/icons/prayer.svg"
import Religious from "/public/icons/022-religious.svg"
import Priest from "/public/icons/priest.svg"
import { Icon } from "@chakra-ui/icons"
import InfoCard from "./InfoCard"
import { getContentByQuery } from "../../services/ContentfulService"
import { GET_REGULAR_PARISH_SCHEDULE } from "../../services/ContentfulService/queries/queries"
import {
  InfoCardElementData,
  INITIAL_REG_PARISH_SCHEDULE_STATE,
  INITIAL_SCHEDULE,
  RegularParishSchedule,
  Schedule,
} from "./types"
import { divideListInChunks, sortByProperty } from "../../utils/ListUtils"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"

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
    const schedList = Object.entries(parishSchedList).map(
      ([key, val], index) => {
        switch (key) {
          case "churchOpenSchedule":
            return {
              bgColor: "brand.500",
              color: LIGHT_TEXT_COLOR,
              icon: ChurchIcon,
              schedule: val,
              pos: 1,
            }
          case "churchHolyHour":
            return {
              bgColor: "brand.200",
              color: DARK_TEXT_COLOR,
              icon: Christianity,
              schedule: val,
              pos: 2,
            }
          case "massSchedule":
            return {
              bgColor: "brand.800",
              color: LIGHT_TEXT_COLOR,
              icon: Religious,
              schedule: val,
              pos: 3,
            }
          case "confessionsSchedule":
            return {
              bgColor: "brand.300",
              color: DARK_TEXT_COLOR,
              icon: Prayer,
              schedule: val,
              pos: 4,
            }
          case "churchOfficeHours":
            return {
              bgColor: "brand.700",
              color: LIGHT_TEXT_COLOR,
              icon: Priest,
              schedule: val,
              pos: 5,
            }
          default:
            return {
              bgColor: "brand.500",
              color: LIGHT_TEXT_COLOR,
              icon: ChurchIcon,
              schedule: [INITIAL_SCHEDULE],
              pos: 0,
            }
        }
      }
    )
    return sortByProperty(schedList, "pos")
  }

  const getSliderInfoCards = (
    chunks: Array<Array<Schedule>>,
    bgColor: string
  ) => {
    const cards = chunks.map((chunk) => {
      return getInfoCardContent(chunk)
    })
    return cards.map((card, index) => {
      return (
        <SwiperSlide key={index}>
          <VStack w={"100%"} h={"100%"} bgColor={bgColor}>
            {card}
          </VStack>
        </SwiperSlide>
      )
    })
  }

  const getInfoCards = (parishSchedList: RegularParishSchedule) => {
    const finalInfoCardListObj = getFinalInfoCardListObj(parishSchedList)
    return finalInfoCardListObj.map((cardObj: InfoCardElementData, index) => {
      const cardObjChunks = divideListInChunks(cardObj.schedule, 3) as Array<
        Array<Schedule>
      >
      return (
        <InfoCard
          bgColor={cardObj.bgColor}
          color={cardObj.color}
          p={INFO_CARD_PADDING}
          gap={INFO_CARD_GAP}
          key={index}
        >
          {getIcon(cardObj.icon)}
          <VStack w={"100%"} h={"100%"} pt={10}>
            <Swiper
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation, EffectFade, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {getSliderInfoCards(cardObjChunks, cardObj.bgColor)}
            </Swiper>
          </VStack>
        </InfoCard>
      )
    })
  }

  /** Component Logic **/

  useEffect(() => {
    getContentByQuery(GET_REGULAR_PARISH_SCHEDULE).then((response) => {
      const regParishSched =
        response?.data?.data?.regularParishSchedule?.schedule
      setRegParsihSched(regParishSched)
    })
  }, [])

  return (
    <Center h={"xl"} bgColor={"brand.150"}>
      <Flex w={"70%"} h={"100%"}>
        {getInfoCards(regParishSched)}
      </Flex>
    </Center>
  )
}

export default InfoBanner
