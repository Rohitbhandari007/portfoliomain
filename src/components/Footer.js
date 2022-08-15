import React from 'react'
import { Flex, Text, useColorModeValue, IconButton, Icon } from '@chakra-ui/react'
import { FaLinkedin, FaGithub } from 'react-icons/all'


function Footer() {

    const bg = useColorModeValue('gray.100', '#171f2e');

    return (
        <>
            <Flex justifyContent='center' mt='10vh' bg={bg} h="20vh" alignItems='center' flexDir='column'>
                <Flex >
                    <a href='https://www.linkedin.com/in/rohit-bhandari-688b95214/'><Icon as={FaLinkedin} w={6} h={6} m={1}></Icon></a>
                    <a href='https://github.com/Rohitbhandari007'><Icon as={FaGithub} w={6} h={6} m={1}></Icon></a>
                </Flex>


                <Text fontSize='xs'>
                    Contact email : rohitbhandari20561210@gmail.com
                </Text>
                <Text textAlign='center' mt='2vh'> 2022 - Rohit Bhandari -All Rights Reserved</Text>
            </Flex>
        </>
    )
}

export default Footer