import { Heading } from "@chakra-ui/react";
import { Input, Text } from "@chakra-ui/react";
import { useState } from "react";

export function FixStart() {
  const [start, setstart] = useState("");
  const [newstart, setnewstart] = useState(start);

  function handleStart(value) {
    setstart(value);
    const newString = value.replaceAll(value.charAt(0), "*");
    setnewstart(newString.replace("*", value.charAt(0)));
  }
  return (
    <div>
      <Heading color="white">Fix Start</Heading>
      <Input
        color="white"
        value={start}
        onChange={(e) => handleStart(e.target.value)}
      />
      <Text color="white">The Word is now: {newstart}</Text>
    </div>
  );
}
