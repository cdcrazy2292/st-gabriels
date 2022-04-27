import React, { useEffect, useState } from "react"
import { Box, Center, Flex, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"
import StaffMemberCard from "../shared/StaffMemberCard"
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper"
import { getContentByQuery } from "../../services/ContentfulService"
import { GET_STAFF_MEMBERS } from "../../services/ContentfulService/queries/queries"
import {
  INITIAL_PARISH_STAFF_MEMBER_OBJ,
  ParishStaffMember,
} from "../../common/commonModels"
import {
  getAllByPropertyAndValue,
  getAllExcept,
  sortByProperty,
} from "../../utils/ListUtils"
import AvatarCard from "./AvatarCard"

const PastoralBanner = () => {
  const [staffMembers, setStaffMembers] = useState([
    INITIAL_PARISH_STAFF_MEMBER_OBJ,
  ])

  const getSliders = (members: Array<ParishStaffMember>) => {
    const allPastoralMembers = getAllExcept(
      members,
      "membersRole",
      "Seminarian"
    )
    const sortedMembers = sortByProperty(allPastoralMembers, "name")
    return sortedMembers.map((member: ParishStaffMember, index) => {
      return (
        <SwiperSlide key={index}>
          <Center h={"100%"} w={"100%"} bgColor={"brand.900"}>
            <StaffMemberCard
              name={member.name}
              lastName={member.lastName}
              prefix={member.prefix}
              membersRole={member.membersRole}
              membersPicture={member.membersPicture}
              membersBiography={member.membersBiography}
            />
          </Center>
        </SwiperSlide>
      )
    })
  }

  const getSeminarianAvatarCards = () => {
    const seminarianList = getAllByPropertyAndValue(
      staffMembers,
      "membersRole",
      "Seminarian"
    )
    console.log(seminarianList)
    return seminarianList.map((seminarian: ParishStaffMember, index) => {
      return (
        <AvatarCard
          name={seminarian.name}
          lastName={seminarian.lastName}
          membersPicture={seminarian.membersPicture}
          residence={seminarian.residence}
          key={index}
        />
      )
    })
  }

  useEffect(() => {
    getContentByQuery(GET_STAFF_MEMBERS).then((response) => {
      const memberObjs: Array<ParishStaffMember> =
        response?.data?.data?.parishStaffMemberCollection?.items
      setStaffMembers(memberObjs)
    })
  }, [])

  getSeminarianAvatarCards()
  return (
    <Box>
      <Box h={["xs", "xl"]} bgColor={"brand.900"}>
        <Center w={"100%"} color={"brand.150"}>
          <Text textStyle={"h1"}>Pastoral Team</Text>
        </Center>

        <Flex h={"88%"} gap={3}>
          <Swiper
            effect={"coverflow"}
            loop={true}
            centeredSlides={false}
            slidesPerView={3}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
          >
            {getSliders(staffMembers)}
          </Swiper>
        </Flex>
      </Box>
      <Flex flexDir={"column"} h={["xs", "sm"]} bgColor={"brand.100"}>
        <Center color={"brand.700"}>
          <Text textStyle={"h1"}>Our Seminarians</Text>
        </Center>
        <Flex justifyContent={"center"} gap={20}>
          {getSeminarianAvatarCards()}
        </Flex>
      </Flex>
    </Box>
  )
}

export default PastoralBanner
