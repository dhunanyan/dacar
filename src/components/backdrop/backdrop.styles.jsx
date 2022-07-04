import styled from "styled-components";
import { motion } from "framer-motion";

export const BackdropContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000e1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000000000;
`;
