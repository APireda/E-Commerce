import styled from "styled-components";
import { PrimaryButton } from "../Buttons/PrimaryButton";

interface ProductCategoriesProps {
  categories: Array<string>;
  filterItems: (arg: string) => void;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ProductCategories = ({
  categories,
  filterItems,
}: ProductCategoriesProps) => {
  return (
    <Flex>
      {categories.map((category) => {
        return (
          <PrimaryButton
            label={category}
            handleClick={() => filterItems(category)}
          />
        );
      })}
    </Flex>
  );
};
