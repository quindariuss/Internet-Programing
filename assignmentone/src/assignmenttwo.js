import { useState, useEffect } from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  VStack,
  Spacer,
  Box,
  Link,
  Input,
  ButtonGroup,
  HStack,
  Button,
} from "@chakra-ui/react";

export function Assignmenttwo() {
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
    <Box p="20">
      <Heading>Welcome to Assignment Two!</Heading>
      {words.map((item, index) => {
        return (
          <HStack>
            <Input
              mt="5"
              value={item}
              onChange={(e) => {
                returnArray(index, e.target.value);
              }}
            />
            <Text>{item.length}</Text>
          </HStack>
        );
      })}
      <ButtonGroup pt="10">
        <Button onClick={addWord}>Add</Button>
        <Button onClick={deleteWord}>Delete</Button>
        <Button onClick={sort}>Sort</Button>
      </ButtonGroup>
    </Box>
  );
}
