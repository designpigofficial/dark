import { Flex, Box, Spacer, Link } from '@chakra-ui/react'

function Navbar() {
    return (
        <Flex justify='spaceBetween' align='center' mx='auto' maxW='80%' height='80px'>
            <Box>
                Logo
            </Box>
            <Spacer  />
            <Box>
                <Link href='/' passHref pr='25px'>
                    Home
                </Link>
                <Link href='/about' passHref pr='25px'>
                    About Us
                </Link>
                <Link href='/services' passHref pr='25px'>
                    Services
                </Link>
                <Link href='/projects' passHref pr='25px'>
                    Projects
                </Link>
                <Link href='/rogue' passHref pr='25px'>
                    Rogue Electric
                </Link>
                <Link href='/contact' passHref pr='25px'>
                    Contact Us
                </Link>
            </Box>
        </Flex>
        )
}

export default Navbar