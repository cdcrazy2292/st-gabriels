import type { NextPage } from "next"
import HomeCarousel from "../components/HomeCarousel/HomeCarousel"
import { Box } from "@chakra-ui/react"
import React from "react"
import UpcomingEvents from "../components/UpcomingEvents"
import InfoBanner from "../components/InfoBanner"

const Home: NextPage = () => {
  return (
    <Box>
      <HomeCarousel />
      <UpcomingEvents />
      <InfoBanner />
    </Box>
  )
}

export default Home
