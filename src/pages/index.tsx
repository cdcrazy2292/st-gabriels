import type { NextPage } from "next"
import HomeCarousel from "../components/HomeCarousel/HomeCarousel"
import { Box } from "@chakra-ui/react"
import React from "react"
import UpcomingEvents from "../components/UpcomingEvents"

const Home: NextPage = () => {
  return (
    <Box>
      <HomeCarousel />
      <UpcomingEvents />
    </Box>
  )
}

export default Home
