import React from 'react'
import { Heading, Flex, Menu, MenuButton, MenuList, MenuItem, Portal, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

function Nav() {

    const bg = useColorModeValue('gray.100', '#171f2e');


    let lol = '</>'
    return (
        <Flex
            w='100%'
            bg={bg}
            flexDir='row'
            justifyContent='space-around'
            h="10vh"
            alignItems='center'
            position='sticky'
            zIndex='1'
            top={0}
        >

            <Heading size='lg' fontWeight='100'> {lol} rohit   </Heading>
            <Flex>
                <Menu>
                    <MenuButton as={IconButton} variant='ghost' icon={<FaBars />}> </MenuButton>
                    <Portal>
                        <MenuList>
                            <MenuItem>Home</MenuItem>
                            <MenuItem>About</MenuItem>
                            <MenuItem>Contact</MenuItem>
                            <MenuItem>Resume</MenuItem>
                        </MenuList>
                    </Portal>
                </Menu>
                <ColorModeSwitcher />
            </Flex>


        </Flex >
    )
}

export default Nav