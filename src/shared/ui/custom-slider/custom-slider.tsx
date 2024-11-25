import React from "react";
import axios from "axios";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import { Flex, Button, Image, Box, Text } from "@chakra-ui/react";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { SliderBtn } from "./slider-btn";

import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";

interface SliderItemType {
  title: string;
  description?: string;
  external_link?: string;
  video_url?: string;
  image_url?: string;
}

export const CustomSlider = () => {
  const navigate = useNavigate();

  const [swiperKey] = React.useState(0);
  const refSlide = React.useRef<SwiperRef>(null);

  const [data, setData] = React.useState<SliderItemType[]>([]);

  const handleClickChangeSlide = (pos: string) => {
    pos === "left" ? refSlide.current?.swiper.slidePrev() : refSlide.current?.swiper.slideNext();
  };

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/all-events";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Flex w={"100%"} pos={"relative"} zIndex={1}>
      <Swiper
        key={swiperKey}
        ref={refSlide}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        // pagination={{ clickable: true }}
        style={{ width: "100%", height: "fit-content", zIndex: 1 }}>
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <Flex w={"100%"} pos={"relative"} zIndex={2}>
              <Image src={item.image_url} alt="item" w={"100%"} h={{ base: "100%", sm: "360px" }} objectFit={{ base: "contain", sm: "unset" }} />
              <Flex
                w={"100%"}
                bg={"rgba(0,0,0,0.5)"}
                flexDir={{ base: "column", md: "row" }}
                justify={"space-between"}
                align={"center"}
                gap={2}
                pos={"absolute"}
                left={0}
                bottom={0}
                zIndex={3}
                p={3}>
                <Flex flexDir={"column"} gap={1} pr={4}>
                  {item.title && <Text as={"h2"}>{item.title}</Text>}
                  {item.description && <Text fontSize={"sm"}>{item.description}</Text>}
                </Flex>
                {item.external_link && (
                  <Button w={"140px"} onClick={() => navigate("../package-selection")}>
                    See more
                  </Button>
                )}
              </Flex>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box pos={"absolute"} top={"50%"} left={"10px"} transform={"translate(0, -50%)"} zIndex={11}>
        <Button bg={"#f7931a"} borderRadius={"50%"} p={0} onClick={() => handleClickChangeSlide("left")}>
          <SliderBtn icon={IoIosArrowBack} direct={"left"} size={24} />
        </Button>
      </Box>
      <Box pos={"absolute"} top={"50%"} right={"10px"} transform={"translate(0, -50%)"} zIndex={11}>
        <Button bg={"#f7931a"} borderRadius={"50%"} p={0} onClick={() => handleClickChangeSlide("right")}>
          <SliderBtn icon={IoIosArrowForward} direct={"right"} size={24} />
        </Button>
      </Box>
    </Flex>
  );
};
