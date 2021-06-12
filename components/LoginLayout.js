import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import SwiperCore, { Autoplay } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

SwiperCore.use([Autoplay]);

const LoginLayout = ({ children }) => {
  return (
    <Flex w="100vw" h="100vh">
      <Flex
        w="46%"
        h="100%"
        display={["none", "none", "none", "flex"]}
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Flex w="75%" position="absolute" zIndex={3}>
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
          >
            <SwiperSlide>
              <Text color="white" fontSize="xl" fontWeight="light">
                Nuwe es la plataforma que convierte el desarrollo profesional,
                la búsqueda de trabajo y las conexiones de personas y empresas
                en un juego. Haciendo que puedas centrate en lo que te gusta,
                programar, diseñar, crear, planear...
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text color="white" fontSize="xl" fontWeight="light">
                Nuwe es la plataforma que convierte el desarrollo profesional,
                la búsqueda de trabajo y las conexiones de personas y empresas
                en un juego. Haciendo que puedas centrate en lo que te gusta,
                programar, diseñar, crear, planear...
              </Text>
            </SwiperSlide>
            <SwiperSlide>
              <Text color="white" fontSize="xl" fontWeight="light">
                Nuwe es la plataforma que convierte el desarrollo profesional,
                la búsqueda de trabajo y las conexiones de personas y empresas
                en un juego. Haciendo que puedas centrate en lo que te gusta,
                programar, diseñar, crear, planear...
              </Text>
            </SwiperSlide>
          </Swiper>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          bgColor="brand.100"
          opacity="0.85"
          position="absolute"
          zIndex={2}
        ></Flex>
        <Flex
          w="100%"
          h="100%"
          bgImage="url('/images/Background.png')"
          bgPosition="center"
          bgRepeat="no-repeat"
          position="relative"
          zIndex={1}
        ></Flex>
      </Flex>
      <Flex w={["100%", "100%", "100%", "54%"]}>{children}</Flex>
    </Flex>
  );
};

export default LoginLayout;
