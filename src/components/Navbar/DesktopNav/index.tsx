import React from "react"
import {
  Box,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import { NAV_ITEMS } from "../../../static/NavBarTabs"
import DesktopSubNav from "../DesktopSubNav"

const DesktopNav = () => {
  const LINK_COLOR = useColorModeValue("gray.800", "gray.200")
  const LINK_HOVER_COLOR = useColorModeValue("gray.800", "gray.100")
  const POPOVER_CONTENT_BG_COLOR = useColorModeValue("gray.50", "gray.900")

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={LINK_COLOR}
                _hover={{
                  textDecoration: "none",
                  color: LINK_HOVER_COLOR,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={POPOVER_CONTENT_BG_COLOR}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

export default DesktopNav
