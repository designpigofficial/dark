import {
  Container,
  VStack,
  Box,
} from "@chakra-ui/react"
import Slider from '../components/Carousel'

import AboutPartial from '../components/AboutPartial'
import Services from './services'
import Projects from './projects'
import Rogue from './rogue'
import Contact from './contact'

function Home() {
  return (
    <Container display='flex' flexDirection='column' justifyContent='center' alignItems='center' zIndex={1}>
      <VStack my={-20} spacing={12}>
        <Box as='section' display='flex' flexDirection='column' justifyContent='center' alignItems='center' minH='90vh'>
        <Slider  />
        </Box>
        <Box as='section'>
          <AboutPartial  />
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
