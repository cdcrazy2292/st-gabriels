import type { NextPage } from "next"
import HomeCarousel from "../components/HomeCarousel/HomeCarousel"
import { Box } from "@chakra-ui/react"
import React from "react"
import UpcomingEvents from "../components/UpcomingEvents"
import InfoBanner from "../components/InfoBanner"
import Footer from "../components/Footer"

const Home: NextPage = () => {
  return (
    <Box>
      <HomeCarousel />
      <UpcomingEvents />
      <InfoBanner />
      <Footer />
    </Box>
  )
}

export default Home
