import { useState, useEffect } from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  VStack,
  Spacer,
  Box,
  Input,
  ButtonGroup,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export function Assignmentthree() {
  function handleChange(position) {
    const newArray = words.map((item, index) => {
      if (index === position) {
        return;
      }
    });
  }

  const [words, setwords] = useState([""]);

  function returnArray(placetoAdd, wordtoAdd) {
    const updatedArray = [...words];
    console.log(updatedArray);
    updatedArray[placetoAdd] = wordtoAdd;
    console.log(updatedArray);
    setwords(updatedArray);
  }
  function addWord() {
    const updatedArray = [...words];
    updatedArray.push("");
    console.log("New fucking :" + updatedArray);
    setwords(updatedArray);
  }
  function deleteWord() {
    const updatedArray = [...words];
    updatedArray.pop();
    console.log("New fucking :" + updatedArray);
    setwords(updatedArray);
  }
  function sort() {
    const updatedArray = [...words];
    updatedArray.sort();
    console.log("New fucking :" + updatedArray);
    setwords(updatedArray);
  }

  return (
    <Box p="20" bgGradient="linear(to-l, #7928CA, #FF0080)">
      <Heading color="white">Welcome to Assignment Three!</Heading>
      {words.map((item, index) => {
        return (
          <HStack>
            <Input
              color="white"
              mt="5"
              value={item}
              onChange={(e) => {
                returnArray(index, e.target.value);
              }}
            />
            <Text color="white">{item.length}</Text>
          </HStack>
        );
      })}
      <ButtonGroup pt="10">
        <Button onClick={addWord}>Add</Button>
        <Button onClick={deleteWord}>Delete</Button>
        <Button onClick={sort}>Sort</Button>
      </ButtonGroup>
      <Link to="/home">
        <Button m="10">Back to home</Button>
      </Link>
      <Box boxSize="4xl" />
    </Box>
  );
}
