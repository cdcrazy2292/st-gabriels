import React from "react"
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Text,
  Icon,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  HStack,
} from "@chakra-ui/react"
import { FaChurch } from "react-icons/fa"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const Navbar = () => {
  const NAVBAR_BG_COLOR_SCHEME = useColorModeValue("brand.50", "brand.900")
  const NAVBAR_TEXT_COLOR_SCHEME = useColorModeValue("brand.900", "gray.50")
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        bg={NAVBAR_BG_COLOR_SCHEME}
        color={NAVBAR_TEXT_COLOR_SCHEME}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.900", "gray.100")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <HStack as={"a"} href={"/"}>
            <Icon as={FaChurch} />
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "center" })}
              fontFamily={"sans-serif"}
            >
              St. Gabriel Roman Catholic Church
            </Text>
          </HStack>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

export default Navbar
