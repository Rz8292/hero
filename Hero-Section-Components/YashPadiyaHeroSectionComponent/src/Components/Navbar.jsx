import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Logo from "../assets/logoipsum-330.svg";
import React, { useState } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { GoFileDirectoryFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [control, setControl] = useState(false);
  const MenuItems = ["Home", "Portfolio", "About", "Contact"];
  const MenuIcons = [<IoHome />,<GoFileDirectoryFill />,<FaUser />,<MdMail />]
  const listVariant = {
    open: {
      clipPath: "circle(1200px at 0px 0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 40,
        staggerChildren: 0.1,
      },
    },
    closed: {
      clipPath: "circle(18px at 28px 34px)",
      transition: {
        delay: 0.22,
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };
  const listItemVariant = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <nav>
      <Box py={4} display={"flex"} pos={"relative"}>
        <Button
          bg={"none"}
          borderRadius={"full"}
          color={"#304463"}
          p={0}
          ml={2}
          style={{
            transform: `${control ? "rotate(90deg)" : "rotate(0deg)"}`,
            transition: "transform 0.6s ",
          }}
          _hover={{
            bg: ``,
          }}
          _active={{ bg: "" }}
          zIndex={30}
          onClick={() => setControl(!control)}
        >
          {control ? <IoMdClose size={25} /> : <HiMenuAlt2 size={25} />}
        </Button>
        <Box
          position={"absolute"}
          top={"0"}
          left={"0"}
          overflow={"hidden"}
          color={"#2F3645"}
          zIndex={10}
          
        >
          <motion.div
            variants={listVariant}
            className="flex h-[100vh] lg:w-[20vw] md:w-[30vw] max-sm:w-[50vw] max-md:w-[40vw] flex-col gap-5 bg-[#E6B9A6] overflow-hidden pt-20 "
            animate={`${control ? "open" : "closed"}`}
          >
            {MenuItems.map((item, i) => (
              <motion.a
                href="/"
                variants={listItemVariant}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setControl(false);
                }}
              >
                <Text as={"h2"} fontSize={"2xl"} fontWeight={"bold"} display={"flex"} gap={1} alignItems={"center"} ml={5} >
                  {MenuIcons[i]}{item}
                </Text>
              </motion.a>
            ))}
          </motion.div>
        </Box>
        <Container maxW={"container.xl"}>
          <Flex justifyContent={"space-between"}>
            <Link href="/">
              <Box>
                <Image src={Logo} />
              </Box>
            </Link>
            <Button
              onClick={() => toggleColorMode()}
              bg={""}
              _hover={{ color: "white" }}
              _active={{
                borderWidth: 2,
                borderColor: `${colorMode === "dark" ? "white" : "gray.700"}`,
              }}
              _focus={{
                borderWidth: 2,
                borderColor: `${colorMode === "dark" ? "white" : "gray.700"}`,
              }}
              p={0}
            >
              {colorMode === "dark" ? (
                <MdOutlineLightMode color="white" size={20} />
              ) : (
                <MdOutlineNightlight color="black" size={20} />
              )}
            </Button>
          </Flex>
        </Container>
      </Box>
    </nav>
  );
}

export default Navbar;
