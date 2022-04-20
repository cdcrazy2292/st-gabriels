import React from "react"
import { Box, Center, Text, VStack } from "@chakra-ui/react"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import EventCard from "./EventCard"

const CAROUSEL_AUTOPLAY_DELAY = 4000
const BG_COLOR = "brand.100"
const UpcomingEvents = () => {
  return (
    <Box w="100%" h={["3xs", "xs"]} bgColor={BG_COLOR}>
      <VStack alignItems={"flex-start"} pl={["5%", "5%"]} pr={["5%", "5%"]}>
        <Text
          textStyle={"h1"}
          fontSize={["md", "lg", "xl", "4xl"]}
          textTransform={"uppercase"}
          color={"brand.700"}
        >
          Upcoming Events
        </Text>
      </VStack>
      <VStack h={"100%"}>
        <Swiper
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
          <SwiperSlide>
            <Center w={"100%"} h={"100%"} bgColor={BG_COLOR}>
              <EventCard />
            </Center>
          </SwiperSlide>
        </Swiper>
      </VStack>
    </Box>
  )
}

export default UpcomingEvents
