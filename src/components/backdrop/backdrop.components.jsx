import React from "react";
import { motion } from "framer-motion";
import { BackdropContainer } from "./backdrop.styles";

const Backdrop = ({ children, onClick }) => {
  return (
    <BackdropContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClick}
    >
      {children}
    </BackdropContainer>
  );
};

export default Backdrop;
