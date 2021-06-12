import React, { useState } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const TypeCard = ({ icon, title, description, onClick }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Flex
      w="100%"
      marginTop="10px"
      padding={["10px", "10px", "20px"]}
      alignItems="center"
      boxShadow="lg"
      borderWidth="1px"
      borderRadius="10px"
      borderColor={isHover ? "brand.100" : "white"}
      bgColor={isHover ? "gray.100" : "white"}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <Flex
        minW="60px"
        minH="60px"
        marginRight={["10px", "10px", "30px"]}
        alignItems="center"
        justifyContent="center"
        position="relative"
        color={isHover ? "white" : "brand.100"}
        bgImage={
          isHover ? "/icons/filledPolygon.png" : "/icons/unfilledPolygon.png"
        }
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Icon boxSize={5} position="absolute" zIndex={2} as={icon} />
      </Flex>
      <Flex marginRight="10px" direction="column">
        <Text fontSize="lg" fontWeight="semibold">
          {title}
        </Text>
        <Text
          maxW={["60vw", "60vw", "300px"]}
          color="gray.400"
          overflow="hidden"
          sx={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis"
          }}
        >
          {description}
        </Text>
      </Flex>
      <ArrowForwardIcon
        display={["none", "none", "inline"]}
        marginRight="10px"
        boxSize={6}
        color={isHover ? "brand.100" : "white"}
      />
    </Flex>
  );
};

export default TypeCard;
