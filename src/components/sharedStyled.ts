import styled from 'styled-components';
import { motion, Variants } from 'framer-motion';

export const TotalContainer = styled.div`
  height: auto;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: ${(props) => props.theme.mp.xxl};
  @media screen and (max-width: ${(props) => props.theme.responsive.xl}) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.md}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: ${(props) => props.theme.mp.xl};
  }
  @media screen and (max-width: ${(props) => props.theme.responsive.sm}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: ${(props) => props.theme.mp.lg};
  }
`;

export const ComponentContainer = styled(motion.div)`
  margin-bottom: 7rem;
`;

export const containerVar: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,

    transition: {
      ease: 'linear',
    },
  },
  exit: {
    opacity: 0,
  },
};

export const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 6.5em;
`;
