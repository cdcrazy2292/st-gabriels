import React from "react"
import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react"
import { NavItem } from "../types/commonTypes"
import { Flex } from "@chakra-ui/react"
import { ChevronRightIcon, Icon } from "@chakra-ui/icons"

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const LINK_HOVER_BG_COLOR = useColorModeValue("brand.700", "gray.200")
  const GROUP_HOVER_COLOR = "gray.50"
  const SMALL_TEXT_COLOR = "gray.300"
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: LINK_HOVER_BG_COLOR }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: GROUP_HOVER_COLOR }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"} _groupHover={{ color: SMALL_TEXT_COLOR }}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={GROUP_HOVER_COLOR} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

export default DesktopSubNav
