import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import PersonImage from "../assets/developerphoto.png";
import { motion } from "framer-motion";
import GalaxyBg from "./GalaxyBg";
import Mountains from "../assets/mountains.png";

function HeroSection() {
  const { colorMode } = useColorMode();
  const textVariants = {
    initial: {
      x: -400,
      opacity: 0,
    },
    start: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.1,
      },
    },
    imageAnimate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    imageInitial: {
      y: 60,
      opacity: 0,
    },
  };
  return (
    <>
      <Container maxW={"container.xl"} pos={"relative"} overflow={"hidden"}>
        <Flex
          w={"full"}
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={2}
          pt={{
            base: "200px",
            sm: "120px",
          }}
          overflow={"hidden"}
        >
          <Flex flexDir={"column"} gap={3} alignItems={"center"} w={"full"}>
            <motion.div
              variants={textVariants}
              animate="start"
              initial="initial"
            >
              <Text
                color={`${colorMode === "dark" ? "#F6B9A6" : "gray.600"}`}
                fontSize={"2xl"}
                letterSpacing={5}
              >
                Yash Padiya
              </Text>
              <Heading
                color={`${colorMode === "dark" ? "gray.300" : "gray.700"}`}
                textTransform={"uppercase"}
              >
                web developer
              </Heading>
              <Text
                color={`${colorMode === "dark" ? "#F6B9A6" : "gray.600"}`}
                fontSize={"xl"}
                letterSpacing={2}
                p={1}
                borderRadius={5}
              >
                Web wizard weaving wonders with every click!
              </Text>
              <Button
                bg={"#F6B9A6"}
                color={"gray.800"}
                _hover={{ bg: "#FA9DA6" }}
                _active={{ bg: "#FA9DA6" }}
                zIndex={0}
                mt={2}
              >
                <a href="#ctacontent">
                Check My Latest Works
                </a>
              </Button>
            </motion.div>
          </Flex>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"full"}
          >
            <motion.div
              variants={textVariants}
              animate="imageAnimate"
              initial="imageInitial"
            >
              <Image
                src={PersonImage}
                className="w-[auto] h-[450px] max-[417px]:h-[350px]"
                pointerEvents={"none"}
              />
            </motion.div>
          </Box>
        </Flex>
        <GalaxyBg />
      </Container>
      <Box pos={"relative"} overflow={"hidden"} id="ctacontent">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 , ease :"easeIn"} }}
        >
          <Heading pos={"absolute"} top={"10%"} left={5}>
            User - Centric Web Applications
          </Heading>
          <Image src={Mountains} h={{ base: "400px", sm: "auto" }} mt={-10} />
        </motion.div>
      </Box>
    </>
  );
}

export default HeroSection;
