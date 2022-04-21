import React, { useEffect, useState } from "react"
import { Box, Center, Text, VStack } from "@chakra-ui/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import EventCard from "./EventCard"
import { getContentByQuery } from "../../services/common/ContentfulService"
import { GetParishEvents } from "../../services/common/ContentfulService/queries/queries"
import { ParishEvent } from "./types"

const CAROUSEL_AUTOPLAY_DELAY = 4000
const BG_COLOR = "brand.100"

const INITIAL_PARISH_EVENTS_LIST: Array<ParishEvent> = []
const UpcomingEvents = () => {
  const [parishEvents, setParishEvents] = useState(INITIAL_PARISH_EVENTS_LIST)
  useEffect(() => {
    getContentByQuery(GetParishEvents).then((response) => {
      const parishEvents =
        response?.data?.data?.events?.eventsRefCollection?.items
      setParishEvents(parishEvents)
    })
  }, [])
  const getSwiperEventCards = () => {
    return parishEvents.map((event, index) => {
      return (
        <SwiperSlide key={`swiper-slide-${index}`}>
          <Center w={"100%"} h={"100%"} bgColor={BG_COLOR}>
            <EventCard
              eventTitle={event.eventTitle}
              eventDescription={event.eventDescription}
              startDate={event.startDate}
              endDate={event.endDate}
            />
          </Center>
        </SwiperSlide>
      )
    })
  }

  return (
    <Box w="100%" h={["3xs", "xs"]} bgColor={BG_COLOR}>
      <VStack alignItems={"flex-start"}>
        <Text
          textStyle={"h1"}
          fontSize={["md", "lg", "xl", "4xl"]}
          textTransform={"uppercase"}
          color={"brand.700"}
          pl={["5%", "2%"]}
          pr={["5%", "2%"]}
        >
          Upcoming Events
        </Text>
      </VStack>
      <VStack h={"100%"}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          autoplay={{
            delay: CAROUSEL_AUTOPLAY_DELAY,
            disableOnInteraction: false,
          }}
        >
          {getSwiperEventCards()}
        </Swiper>
      </VStack>
    </Box>
  )
}

export default UpcomingEvents
