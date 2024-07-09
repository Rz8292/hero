import React from "react";
import { motion } from "framer-motion";
import { Box, useColorMode } from "@chakra-ui/react";
import Earth from "../assets/Earth.png";
import Sun from "../assets/Sun.png";
import Moon from "../assets/Moon.png";

function GalaxyBg() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const { colorMode } = useColorMode();
  const imageVariants = {
    earthAnimate: {
      rotate: [0, 360],
      x: [-240, screenWidth],
      y: [-70, screenHeight / 3],
      scale: [1, 1.3],
      transition: {
        rotate: { duration: 50, ease: "linear", repeat: Infinity },
        x: { duration: 20, ease: "linear", repeat: Infinity },
        y: { duration: 20, ease: "linear", repeat: Infinity },
        scale: { duration: 20, ease: "linear", repeat: Infinity },
      },
    },
    sunAnimate: {
      rotate: 360,
      scale: [0.98, 1.09],
      filter: ["contrast(1.1)", "contrast(1.85)"],
      transition: {
        // opacity: {
        //   duration: 5,
        //   ease: "linear",
        //   repeat: Infinity,
        //   repeatType: "mirror",
        // },
        rotate: { duration: 80, ease: "linear", repeat: Infinity },
        scale: {
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        },
        filter: {
          duration: 5,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        },
      },
    },
    // marsAnimate: {
    //   rotate: [0,360],
    //   x: [-480,screenWidth],
    //   y: [0,-200],
    //   scale: [1, 1.1],
    //   transition: {
    //     rotate: { duration: 50, ease: "linear", loop: Infinity },
    //     x: { duration: 20, ease: "linear", repeat: Infinity },
    //     y: { duration: 20, ease: "linear", repeat: Infinity },
    //     scale: { duration: 20, ease: "linear", repeat: Infinity },
    //   },
    // },
  };
  return (
    <>
      <Box
        pos={"absolute"}
        top={0}
        left={0}
        pointerEvents={"none"}
        zIndex={-10}
        opacity={0.8}
      >
        <motion.img
          src={colorMode === "dark" ? Moon : Earth}
          variants={imageVariants}
          animate="earthAnimate"
          className="h-[50%] w-[50%]"
        />
        <motion.img
          src={colorMode === "dark" ? Earth : Sun}
          className={`${
            colorMode === "dark" ? "h-[280px] w-[280px]" : "h-[250px] w-[250px]"
          } absolute top-0 left-[90%] z-[-3] max-md:left-[60%] max-[530px]:left-[50%] max-[465px]:left-[30%] max-md:w-[230px] max-md:h-[230px]`}
          variants={imageVariants}
          animate="sunAnimate"
        />
      </Box>
    </>
  );
}

export default GalaxyBg;
