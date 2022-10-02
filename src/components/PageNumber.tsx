import React from "react";
import styled from "styled-components";

const MoreItemsButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreNumber = styled.span`
  position: relative;
  display: inline-block;
  border: 1px solid white;
  color: ${(props) => props.theme.color.textColor.xs};
  font-weight: 700;
  padding: ${(props) => props.theme.mp.md};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.md};
  margin-right: ${(props) => props.theme.mp.md};
  z-index: 10;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: white;
    background-color: ${(props) => props.theme.color.red.xl};
  }
`;

const MoreNumberMark = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: ${(props) => props.theme.color.red.xl};
`;

interface PageNumberProps {
  pageNumbers: number[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageNumber: React.FC<PageNumberProps> = ({
  pageNumbers,
  page,
  setPage,
}) => {
  const handlePage = (number: number) => {
    setPage(number);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <MoreItemsButton>
      {pageNumbers.map((number) => (
        <MoreNumber onClick={() => handlePage(number)} key={number}>
          {number}
          {number === page && <MoreNumberMark />}
        </MoreNumber>
      ))}
    </MoreItemsButton>
  );
};
export default PageNumber;
