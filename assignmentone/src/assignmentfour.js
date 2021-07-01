import { Heading, Text, Center, VStack, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ReactEmbedGist from "react-embed-gist";

export function AssignmentFour() {
  return (
    <Box bgGradient="linear(to-l, #7928CA, #FF0080)">
      <Center
        pt="15"
        marginBottom="5"
        marginRight={["5%", "15%", "25%"]}
        marginLeft={["5%", "15%", "25%"]}
      >
        <VStack spacing="10">
          <Heading size="md" color="white">
            Welcome to Assignment Four
          </Heading>
          <Text color="white">
            Here you be over to puruse the code that allows you to connect to
            the database provided for the assignment that is written in python
            script.
          </Text>
          <Link to="/home">
            <Button m="10">Back to home</Button>
          </Link>
          <Box boxSize="sm">
            <ReactEmbedGist
              gist="quinwoods/fdb3eefdd6488a12830a8b40c6606525"
              wrapperClass="gist__bash"
              loadingClass="loading__screen"
              titleClass="gist__title"
              contentClass="gist__content"
              errorClass="gist__error"
            />
          </Box>
        </VStack>
      </Center>
      <Box boxSize="4xl" />
      <Box boxSize="4xl" />
      <Box boxSize="4xl" />
    </Box>
  );
}
