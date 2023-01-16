import {
  Tr,
  Th,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useState } from "react";

interface TableListProps {
  name: string;
}

export const ListBodyCompo = ({ name }: TableListProps) => {
  const [value, setValue] = useState(1);
  return (
    <>
      <Tr>
        <Th fontSize='xl'>{name}</Th>
        <Th>
          <NumberInput
            maxW="100px"
            mr="2rem"
            value={value}
            onChange={(value: any) => setValue(value)}
            min={1}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Th>
        <Th fontSize='xl'>{value}</Th>
      </Tr>
    </>
  );
};