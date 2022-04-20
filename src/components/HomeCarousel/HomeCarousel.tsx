import React, { FC, useEffect, useState } from "react"
import { Box, Center, Heading, Text, VStack } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"

import { Pagination, Navigation, EffectFade, Autoplay } from "swiper"
import { getContentByQuery } from "../../services/common/ContentfulService"
import { GetLatestHomePageGalleryQuery } from "./queries"

type GalleryCollectionItem = {
  description: string
  title: string
  url: string
}

const INITIAL_GALLERY_COLLECTION_STATE: GalleryCollectionItem = {
  description: "",
  title: "",
  url: "",
}

const IMAGE_RESPONSIVE_BOX_SIZE = ["2xs", "xs", "xl", "2xl", "3xl", "4xl"]
const CAROUSEL_IMG_GRADIENT =
  "linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.1))"
const CAROUSEL_AUTOPLAY_DELAY = 4000

const getCards = (items: Array<GalleryCollectionItem>) => {
  console.log("items", items)
  if (items) {
    return items.map(({ description, title, url }, index) => {
      return (
        <SwiperSlide key={index}>
          <Center
            h="100%"
            w="100%"
            backgroundSize="100%"
            bgImage={`${CAROUSEL_IMG_GRADIENT}, url(${url})`}
          >
            <VStack color={"white"}>
              <Heading as="h1">{title}</Heading>
              <Text>{description}</Text>
            </VStack>
          </Center>
        </SwiperSlide>
      )
    })
  }
  return []
}

const HomeCarousel: FC = () => {
  const [galleryImages, setGalleryImages] = useState([
    INITIAL_GALLERY_COLLECTION_STATE,
  ])

  useEffect(() => {
    getContentByQuery(GetLatestHomePageGalleryQuery).then((response) => {
      setGalleryImages(
        response?.data?.data?.homePagePhotosCollection.items[0]
          ?.photoGalleryCollection.items
      )
    })
  }, [])

  return (
    <>
      <Box w="100%" h={IMAGE_RESPONSIVE_BOX_SIZE}>
        <Swiper
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, EffectFade, Autoplay]}
          autoplay={{
            delay: CAROUSEL_AUTOPLAY_DELAY,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {getCards(galleryImages)}
        </Swiper>
      </Box>
    </>
  )
}

export default HomeCarousel
