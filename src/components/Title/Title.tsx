import styled from "styled-components";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.h1`
  text-align: center;
  margin: 1rem auto;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
`;
