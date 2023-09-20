import styled from "styled-components";

export const Button = styled.button`
  max-width: 300px;
  background-color: black;
  color: white;
  width: 80%;
  height: 40px;
  border-radius: 20px;
  border: solid 1px black;
  font-size: 1rem;
  padding: 0 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const BlaButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: black;

  &:hover {
    opacity: 0.7;
  }
`;

export const DangerButton = styled.div`
  color: #cc0c39;
  cursor: pointer;
  font-size: 0.8;
  background: transparent;
  transition: all 0.3s ease-in-out;
  padding: 10px;

  &:hover {
    opacity: 0.7;
  }
`;
