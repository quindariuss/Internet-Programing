import { useState } from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Text,
  Link,
  Input,
  HStack,
  Button,
} from "@chakra-ui/react";

function App() {
  const [word, setword] = useState("");
  return (
    <HStack>
      <Input value={word} onChange={(e) => setword(e.target.value)} />
      <Text>{word.length}</Text>
    </HStack>
  );
}

reactdom.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
