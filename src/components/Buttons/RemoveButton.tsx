import { ReactNode } from "react";
import { DangerButton } from "./styles";

interface RemoveButtonProps {
  handleClick: () => void;
  label?: ReactNode;
}

export const RemoveButton = ({ handleClick, label }: RemoveButtonProps) => {
  return <DangerButton onClick={handleClick}>{label}</DangerButton>;
};
