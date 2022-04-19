import type { NextPage } from "next"
import HomeCarousel from "../components/HomeCarousel/HomeCarousel"
import { Box } from "@chakra-ui/react"
import React from "react"

const Home: NextPage = () => {
  return (
    <Box>
      <HomeCarousel />
    </Box>
  )
}

export default Home
