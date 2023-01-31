import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      spacing={5}
      backgroundColor="white"
      color="black"
      borderRadius={20}
    >
      <Image src={imageSrc} borderRadius={15} width="100%" />
      <Heading as="h2" size="md" paddingX={4}>
        {title}
      </Heading>
      <Text paddingX={4} color="gray">
        {description}
      </Text>
      <HStack padding={4}>
        <Text>See more</Text>
        <FontAwesomeIcon icon={faArrowRight} />
      </HStack>
    </VStack>
  );
};

export default Card;
