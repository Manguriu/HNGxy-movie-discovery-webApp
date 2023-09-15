import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Transition({}: Props) {
  return (
    <>
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen z-30 bg-gray-500"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.3, duration: 0.4, ease: "easeInOut" }}
      />
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen z-30 bg-white"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className=" fixed top-0 bottom-0 right-full w-screen z-30 bg-[#BE123C]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
      />
    </>
  );
}

export default Transition;
