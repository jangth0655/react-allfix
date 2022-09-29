import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingCircle = styled(motion.div)`
  width: ${(props) => props.theme.mp.lg};
  height: ${(props) => props.theme.mp.lg};
  border-radius: 50%;
`;

const LoadingSpan = styled.span`
  display: inline-block;
  margin-top: 12px;
  font-size: ${(props) => props.theme.textSize.md};
`;

const loadingVar: Variants = {
  initial: {
    borderTop: "2px",
    borderRight: "2px",
    borderColor: "white",
    borderStyle: "solid",
  },
  animate: {
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: "linear",
    },
    rotate: 360,
  },
};

const Loading = () => {
  return (
    <LoadingBox>
      <LoadingCircle
        variants={loadingVar}
        initial="initial"
        animate="animate"
      />
      <LoadingSpan>Loading...</LoadingSpan>
    </LoadingBox>
  );
};
export default Loading;
