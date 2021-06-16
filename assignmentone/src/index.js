import react from "react";
import reactdom from "react-dom";
import {
  ChakraProvider,
  Heading,
  Link,
  Box,
  Text,
  Center,
  SimpleGrid,
  List,
  Spacer,
  ListItem,
  Icon,
  Badge,
  HStack,
  VStack,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  AiOutlineInstagram,
  AiOutlineYoutube,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";
import me from "./images/quin.png";
reactdom.render(
  <ChakraProvider>
    <Box
      marginBottom="5"
      marginRight={["5%", "15%", "25%"]}
      marginLeft={["5%", "15%", "25%"]}
    >
      <Center>
        <VStack>
          <Image src={me} />
          <Heading maxW="95%" textAlign="center">
            Quin'darius Lyles-Woods
          </Heading>
          <Text maxW="95%" textAlign="center">
            Software Engineer attending Kennesaw State University. Below are
            some links to where I am on the internet. Feel free to connect with
            me through these magical portals!
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
            <Badge colorScheme="linkedin" margin="2" maxW="120">
              <HStack>
                <Icon as={AiOutlineLinkedin} />
                <Text>LinkedIn</Text>
              </HStack>
            </Badge>
          </SimpleGrid>
        </VStack>
      </Center>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Places I have Worked
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List>
              <ListItem>
                <HStack>
                  <Text>MindSense</Text>
                  <Spacer />
                  <Badge colorScheme="green">ongoing</Badge>
                  <Badge colorScheme="gray">Software Engineer</Badge>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text>Underdog Developers</Text>
                  <Spacer />
                  <Badge colorScheme="green">ongoing</Badge>
                  <Badge colorScheme="gray">Mentor</Badge>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text>Lavendale</Text>
                  <Spacer />
                  <Badge colorScheme="red">6 Months</Badge>
                  <Badge colorScheme="gray">Tech Lead</Badge>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text>Apple</Text>
                  <Spacer />
                  <Badge colorScheme="red">2 Years</Badge>
                  <Badge colorScheme="gray">Techinical</Badge>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text>Speech and Debate</Text>
                  <Spacer />
                  <Badge colorScheme="green">ongoing</Badge>
                  <Badge colorScheme="gray">Vice-President</Badge>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text>Association for Computing Machinery</Text>
                  <Spacer />
                  <Badge colorScheme="green">ongoing</Badge>
                  <Badge colorScheme="gray">President</Badge>
                </HStack>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Platforms I have Developed For
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List>
              <ListItem>
                <HStack>
                  <Text>macOS</Text>
                  <Spacer />
                  <Badge colorScheme="green">1 Year</Badge>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text>iOS</Text>
                  <Spacer />
                  <Badge colorScheme="green">2 years</Badge>
                </HStack>
              </ListItem>
              <ListItem>
                <HStack>
                  <Text>Web</Text>
                  <Spacer />
                  <Badge colorScheme="green">1 year</Badge>
                </HStack>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Earthly Things I Enjoy
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I enjoy my pitbull, her name is octavia, she makes remote work
            bearable. Reading and writing are where most of my time goes if you
            include programming into the idea of writing. Rode trips are always
            awesome, but I dont know if I cant drive another one without a
            tesla, autopilot is next level. Riding motorcycles on cold brisk
            morning are something I can never get enough of. My girlfriend is
            probably the weirdest person I know and I enjoy that as well. Good
            design is another earthly pleasure in any form in comes in.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  </ChakraProvider>,
  document.getElementById("root")
);
