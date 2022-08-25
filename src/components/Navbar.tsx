import { Flex, Box, Spacer, Link } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import Drawer from '../components/Drawer'
import React from 'react'

const Navbar = () => {
    return (
        <Flex justify='spaceBetween' align='center' mx='auto' maxW='80%' height='80px' zIndex={20}>
            <Box>
                Rogue Solar
            </Box>
            <Spacer  />
            <Box display={["none", "none", "none", "flex"]}>
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
                <DarkModeSwitch  />
            </Box>
            <Drawer  />
        </Flex>
        )
}
export default Navbar