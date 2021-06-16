import { ChakraProvider } from "@chakra-ui/react";
import me from "../public/favicon.ico";
import { Heading } from "@chakra-ui/react";
import { Text, Center, SimpleGrid } from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import { Icon, Badge, HStack, VStack, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <VStack>
          <Center>
            <Heading>Quin'darius Lyles-Woods</Heading>
          </Center>
          <Center>
            <Text margin="5">
              Software Engineer attending Kennesaw State University. Below are
              some links to where I am on the internet. Feel free to connect
              with me through those magical portals!
            </Text>
          </Center>
        </VStack>

        <SimpleGrid minChildWidth="120px">
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
        <Image src={me} />
      </div>
    </ChakraProvider>
  );
}
