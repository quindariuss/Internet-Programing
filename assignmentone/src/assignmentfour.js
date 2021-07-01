import { Heading, Text, Center, VStack } from "@chakra-ui/react";
import ReactEmbedGist from "react-embed-gist";

export function AssignmentFour() {
  return (
    <>
      <Center
        pt="15"
        marginBottom="5"
        marginRight={["5%", "15%", "25%"]}
        marginLeft={["5%", "15%", "25%"]}
      >
        <VStack spacing="10">
          <Heading>Welcome to Assignment Four</Heading>
          <Text>
            Here you be over to puruse the code that allows you to connect to
            the database provided for the assignment that is written in python
            script.
          </Text>
          <ReactEmbedGist
            gist="quinwoods/fdb3eefdd6488a12830a8b40c6606525"
            wrapperClass="gist__bash"
            loadingClass="loading__screen"
            titleClass="gist__title"
            contentClass="gist__content"
            errorClass="gist__error"
          />
        </VStack>
      </Center>
    </>
  );
}
