import react from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Link,
  Text,
  Center,
  SimpleGrid,
  Icon,
  Badge,
  HStack,
  VStack,
  Image,
} from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import me from "./images/quin.png";
reactdom.render(
  <ChakraProvider>
    <Center>
      <VStack>
        <Heading maxW="95%">Quin'darius Lyles-Woods</Heading>
        <Image src={me} />
        <Text maxW="95%">
          Software Engineer attending Kennesaw State University. Below are some
          links to where I am on the internet. Feel free to connect with me
          through these magical portals!
        </Text>
        <SimpleGrid width="90%" minChildWidth="120px">
          <Badge colorScheme="purple" margin="2" maxW="120">
            <HStack>
              <Icon as={AiOutlineInstagram} />
              <Text>Instagram</Text>
            </HStack>
          </Badge>
          <Badge colorScheme="red" margin="2" maxW="120">
            <HStack>
              <Icon as={AiOutlineYoutube} />
              <Text>Youtube</Text>
            </HStack>
          </Badge>
          <Badge colorScheme="blue" margin="2" maxW="120">
            <HStack>
              <Icon as={AiOutlineGithub} />
              <Text>GitHub</Text>
            </HStack>
          </Badge>
          <Badge colorScheme="teal" margin="2" maxW="120">
            <HStack>
              <Icon as={AiOutlineTwitter} />
              <Text>Twitter</Text>
            </HStack>
          </Badge>
          <Badge colorScheme="teal" margin="2" maxW="120">
            <HStack>
              <Icon as={AiOutlineMedium} />
              <Text>Medium</Text>
            </HStack>
          </Badge>
        </SimpleGrid>
      </VStack>
    </Center>
  </ChakraProvider>,
  document.getElementById("root")
);
