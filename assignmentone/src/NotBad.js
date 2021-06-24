import { Heading, Input, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NotBad() {
  const [notbad, setnotbad] = useState("");
  const [newnotbad, setnewnotbad] = useState(notbad);

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
    <div>
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
    </div>
  );
}
