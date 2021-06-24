import { useState } from "react";
import { Heading } from "@chakra-ui/react";
import { Box, Input, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Square } from "./Square";
import { FixStart } from "./FixStart";
import { NotBad } from "./NotBad";

export function AssignmentTwo() {
  return (
    <Box p="10" bgGradient="linear(to-l, #7928CA, #FF0080)">
      <Square />
      <FixStart />
      <NotBad />
      <Box boxSize="4xl" />
    </Box>
  );
}
