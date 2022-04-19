import React from "react"
import { Stack, useColorModeValue } from "@chakra-ui/react"
import MobileNavItem from "../MobileNavItem"
import { NAV_ITEMS } from "../../../static/NavBarTabs"

const MobileNav = () => {
  const MENU_BACKGROUND_COLOR = useColorModeValue("brand.50", "brand.800")
  return (
    <Stack bg={MENU_BACKGROUND_COLOR} p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

export default MobileNav
