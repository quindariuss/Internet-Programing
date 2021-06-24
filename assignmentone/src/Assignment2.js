import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  Box,
  NumberInputStepper,
  Input,
  Button,
  NumberIncrementStepper,
  Text,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function AssignmentTwo() {
  const [snumber, setsnumber] = useState(0);
  const [start, setstart] = useState("");
  const [newstart, setnewstart] = useState(start);
  const [notbad, setnotbad] = useState("");
  const [newnotbad, setnewnotbad] = useState(notbad);

  const handleChange = (value) => setsnumber(value);
  function handleStart(value) {
    setstart(value);
    const newString = value.replaceAll(value.charAt(0), "*");
    setnewstart(newString.replace("*", value.charAt(0)));
  }
  function handleNotBad(value) {
    setnotbad(value);
    const newString = value.replaceAll(value);
    if (value.includes("bad")) {
      setnewnotbad(
        notbad.slice(0, notbad.search(/not/)) +
          " good " +
          notbad.slice(notbad.search(/bad/) + 3, notbad.length)
      );
    }
  }
  return (
    <Box p="10" bgGradient="linear(to-l, #7928CA, #FF0080)">
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
      <Heading color="white">Fix Start</Heading>
      <Input
        color="white"
        value={start}
        onChange={(e) => handleStart(e.target.value)}
      />
      <Text color="white">The Word is now: {newstart}</Text>
      <Heading color="white">Not Bad</Heading>
      <Input
        color="white"
        value={notbad}
        onChange={(e) => handleNotBad(e.target.value)}
      />
      <Text color="white">The new sentence is: {newnotbad}</Text>
      <Link to="/home">
        <Button m="10">Back to home</Button>
      </Link>
      <Box boxSize="4xl" />
    </Box>
  );
}
