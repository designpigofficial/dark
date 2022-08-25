import { HamburgerIcon } from '@chakra-ui/icons'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import {
    Button,
    Drawer,
    Box,
    Flex,
    Text,
    Link,
    Icon,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Spacer,
    Stack,
    } from "@chakra-ui/react"

    import { DarkModeSwitch } from './DarkModeSwitch'

    import React from 'react'

    function NavDrawer() {
        const { isOpen, onOpen, onClose } = useDisclosure()
    
        return (
        <>
        <Box display={["flex", "flex", "flex", "none"]}>
            <Button colorScheme='blue' onClick={onOpen}>
            <HamburgerIcon  />
            </Button>
            <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>
                <Flex>
                <Text>Rogue Electric</Text>
                <Spacer  />
                <DarkModeSwitch  />
                </Flex>
                </DrawerHeader>
                <DrawerBody display="flex" flexDirection='column' justifyContent='space-around' alignItems='center' py='50px'>
                <Link href='/' passHref>
                        Home
                    </Link>
                    <Link href='/about' passHref>
                        About Us
                    </Link>
                    <Link href='/services' passHref>
                        Services
                    </Link>
                    <Link href='/projects' passHre>
                        Projects
                    </Link>
                    <Link href='/rogue' passHref>
                        Rogue Electric
                    </Link>
                    <Link href='/contact' passHref>
                        Contact Us
                    </Link>

                </DrawerBody>
                <DrawerFooter>
                <Stack direction={"row"} spacing={6}>
                <Icon fontSize={'22px'} label={"Twitter"} href={"#"}>
                <AiOutlineFacebook />
                </Icon>
                <Icon fontSize={'22px'} label={"Twitter"} href={"#"}>
                <AiOutlineTwitter />
                </Icon>
                <Icon fontSize={'22px'} label={"YouTube"} href={"#"}>
                <AiOutlineYoutube />
                </Icon>
                <Icon fontSize={'22px'} label={"Instagram"} href={"#"}>
                <AiOutlineInstagram />
                </Icon>
                </Stack>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>
            </Box>
        </>
        )
    }

    export default NavDrawer