import type { NextPage } from "next"
import HomeCarousel from "../components/HomeCarousel/HomeCarousel"
import Navbar from "../components/Navbar"
import { Box } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <Box>
      <Navbar />
      <HomeCarousel />
    </Box>
  )
}

export default Home
