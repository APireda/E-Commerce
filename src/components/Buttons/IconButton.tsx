import { ReactNode } from "react";
import { BlaButton } from "./styles";

interface IconButtonProps {
  handleClick: () => void;
  icon?: ReactNode;
}

export const IconButton = ({ handleClick, icon }: IconButtonProps) => {
  return <BlaButton onClick={handleClick}>{icon}</BlaButton>;
};
