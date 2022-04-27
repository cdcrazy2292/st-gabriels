import React from "react"
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import { ParishStaffMember } from "../../../common/commonModels"

const AvatarCard = (props: ParishStaffMember) => {
  const { name, lastName, residence, membersPicture } = props
  return (
    <Center w={"30%"}>
      <Box
        w={"100%"}
        bg={useColorModeValue("brand.100", "brand.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
        color={"brand.700"}
      >
        <Image
          h={"130px"}
          w={"full"}
          src={"/imgs/RedemptorisMatterDome.png"}
          objectFit={"cover"}
          alt={"background"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"2xl"}
            src={membersPicture.url}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box pt={2} pb={5}>
          <Stack spacing={0} align={"center"}>
            <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              <Text fontWeight={600}>
                {name} {lastName}
              </Text>
            </Heading>
            <Text>{residence}</Text>
          </Stack>
        </Box>
      </Box>
    </Center>
  )
}

export default AvatarCard
