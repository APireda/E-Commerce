import { Button } from "./styles";

interface ButtonProps {
  handleClick: () => void;
  label?: string;
}

export const PrimaryButton = ({ handleClick, label }: ButtonProps) => {
  return <Button onClick={handleClick}>{label}</Button>;
};
