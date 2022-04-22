import React from "react"
import { Center, Flex, VStack, Text } from "@chakra-ui/react"
import ChurchIcon from "/public/icons/011-church.svg"
import Christianity from "/public/icons/009-christianism.svg"
import Prayer from "/public/icons/prayer.svg"
import Religious from "/public/icons/022-religious.svg"
import Priest from "/public/icons/priest.svg"
import { Icon } from "@chakra-ui/icons"
import InfoCard from "./InfoCard"

const InfoBanner = () => {
  const getIcon = (icon: any) => {
    return (
      <VStack>
        <Center>
          <Icon as={icon} fontSize={["2xl", "10xl"]} />
        </Center>
      </VStack>
    )
  }

  const getInfoCardContent = (
    title: string,
    description: string,
    time: string
  ) => {
    return (
      <VStack>
        <Flex flexDir={"column"} gap={5}>
          <VStack>
            <Text fontSize={["xm", "2xl"]}>{title}</Text>
          </VStack>
          <VStack>
            <Text textAlign={"center"}>{description}</Text>
          </VStack>
          <VStack>
            <Text>{time}</Text>
          </VStack>
        </Flex>
      </VStack>
    )
  }

  return (
    <Center h={"lg"} bgColor={"brand.150"}>
      <Flex w={"70%"} h={"100%"}>
        <InfoCard bgColor="brand.500" color={"brand.100"} p={10} gap={10}>
          {getIcon(ChurchIcon)}
          {getInfoCardContent(
            "Church Hours",
            "Our church is open everyday",
            "11:00AM - 5:00PM"
          )}
        </InfoCard>
        <InfoCard bgColor={"Brand.200"} color={"brand.900"} p={10} gap={10}>
          {getIcon(Christianity)}
          {getInfoCardContent("Holy Hour", "Weekdays", "8:00AM - 10:00AM")}
        </InfoCard>
        <InfoCard bgColor={"brand.800"} color={"brand.50"} p={10} gap={10}>
          {getIcon(Prayer)}
          {getInfoCardContent(
            "Confessions",
            "Every Thursday",
            "5:00PM - 7:00PM"
          )}
        </InfoCard>
        <InfoCard bgColor={"brand.300"} color={"brand.900"} p={10} gap={10}>
          {getIcon(Religious)}
          {getInfoCardContent("Mass Times", "TBD", "TBD")}
        </InfoCard>
        <InfoCard bgColor={"brand.700"} color={"brand.50"} p={10} gap={10}>
          {getIcon(Priest)}
          {getInfoCardContent("Office Hours", "Everyday", "10:00AM - 2:00PM")}
        </InfoCard>
      </Flex>
    </Center>
  )
}

export default InfoBanner
