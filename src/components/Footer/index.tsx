import React from "react"
import { ReactNode } from "react"
import ChurchLogo from "/public/icons/church.svg"
import {
  Box,
  Center,
  Container,
  Flex,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { Icon } from "@chakra-ui/icons"
import { NAV_ITEMS } from "../../static/NavBarTabs"
import { NavItem } from "../Navbar/types"

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  )
}

const getGeneralLinks = () => {
  const generalLinks: Array<NavItem> = []
  NAV_ITEMS.forEach((item) => {
    if (!item.children) {
      generalLinks.push(item)
    }
  })
  return generalLinks.map((link, index) => {
    return (
      <Link href={link.href} key={index}>
        {link.label}
      </Link>
    )
  })
}

const getChildLinks = () => {
  const childLinks: Array<NavItem> = []
  NAV_ITEMS.forEach((item) => {
    if (item.children) {
      childLinks.push(item)
    }
  })
  const getChildLinkElements = (children: Array<NavItem>) => {
    return children?.map((child, index) => {
      return (
        <Link href={child.href} key={index}>
          {child.label}
        </Link>
      )
    })
  }
  return childLinks.map((link, index) => {
    return (
      <Stack align={"flex-start"} key={index}>
        <ListHeader>{link.label}</ListHeader>
        {getChildLinkElements(link.children || [])}
      </Stack>
    )
  })
}

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("brand.900", "gray.900")}
      color={useColorModeValue("brand.200", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Flex gap={3}>
              <Center>
                <Icon as={ChurchLogo} fontSize={["lg", "8xl"]} />
              </Center>
              <Center>
                <Text>Saint Gabriel </Text>
              </Center>
            </Flex>
            <Text fontSize={"sm"}>
              © 2022 developed by Cristhian Soria. All rights reserved
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>General</ListHeader>
            {getGeneralLinks()}
          </Stack>
          {getChildLinks()}
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}

export default Footer
