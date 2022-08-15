import { React, useRef, useContext } from 'react'
import { Heading, Flex, Menu, MenuButton, MenuList, MenuItem, Portal, IconButton, useColorModeValue } from '@chakra-ui/react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-scroll'
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
                            <Link activeClass="active" to="/" spy={true} smooth={true} offset={50} duration={500}>
                                <MenuItem>Home</MenuItem></Link>
                            <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>
                                <MenuItem>About</MenuItem></Link>
                            <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}>
                                <MenuItem>Projects</MenuItem></Link>
                        </MenuList>
                    </Portal>
                </Menu>
                <ColorModeSwitcher />
            </Flex>


        </Flex >
    )
}

export default Nav