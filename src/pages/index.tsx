import {
  Container,
  Heading,
  VStack,
  Stack,
  Text,
  Code,
  OrderedList,
  ListItem,
  Link,
  Button,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Switch,
  Avatar,
  Flex,
  Badge,
  Box,
  Divider,
} from '@chakra-ui/react'

import About from './about'
import Services from './services'
import Projects from './projects'
import Rogue from './rogue'
import Contact from './contact'

function Home() {
  return (
    <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <VStack my={24} spacing={12}>
        <Box as='section'>
        <Heading>
          abnerdev
        </Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti sequi reprehenderit, perferendis officia sit nisi iusto eaque nobis maiores officiis corrupti labore doloremque alias quisquam, placeat distinctio cumque aliquam!
        </Text>
        </Box>
        <Box as='section'>
          <About  />
        </Box>
        <Box as='section'>
          <Services  />
        </Box>
        <Box as='section'>
          <Projects  />
        </Box>
        <Box as='section'>
          <Rogue  />
        </Box>
        <Box as='section'>
          <Contact  />
        </Box>
      </VStack>
    </Container>
  )
}

export default Home
