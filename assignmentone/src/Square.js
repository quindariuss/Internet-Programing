import { Heading } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  Text,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState } from "react";

export function Square() {
  const [snumber, setsnumber] = useState(0);
  const handleChange = (value) => setsnumber(value);
  return (
    <div>
      <Heading color="white">Square Numbers</Heading>
      <NumberInput
        colorScheme="whiteAlpha"
        value={snumber}
        onChange={handleChange}
      >
        <NumberInputField color="white" />
        <NumberInputStepper color="white">
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text color="white">
        The result of squaring the number {snumber} is {snumber * snumber}.
      </Text>
    </div>
  );
}
