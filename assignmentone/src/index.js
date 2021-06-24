import react from "react";
import reactdom from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./App";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

reactdom.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
