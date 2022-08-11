import React from 'react'
import { Flex, Text, Divider, Box, Image, Icon } from '@chakra-ui/react'
import rohitbhandari from './img/rohitbhandari.jpg'
import { FaDotCircle, FaReact, FaLinkedin, FaGithub } from 'react-icons/fa'

function About() {
    return (
        <>
            <Flex flexDir='column'
                w='80%'
                justifyContent='center'
                margin='auto'

                mt="20vh"
                alignItems='center'
                textAlign='center'


            >
                <Divider></Divider>

                <Text fontSize='3xl' fontWeight='600' mt='5vh'>About me</Text>
                <Flex flexDirection='row' justifyContent='space-between' alignItems='center' mt='5vh'>
                    <Box bg='' w="50%" display='flex'>
                        <Image src={rohitbhandari} h="40vh" w="40vh" borderRadius='lg'></Image>
                        <Flex flexDir='column' m="5vh">
                            <Icon as={FaLinkedin} m="1vh" h={10} w={10} cursor="pointer" color="#2566ba"></Icon>
                            <Icon as={FaGithub} m="1vh" h={10} w={10} cursor="pointer"></Icon>

                        </Flex>
                    </Box>
                    <Box borderRadius='sm' borderWidth='1px' w="50%">
                        <Flex justifyContent='flex-start'>
                            <Icon m="1vh" color='red.400' as={FaDotCircle}></Icon>
                            <Icon m="1vh" color='green.400' as={FaDotCircle}></Icon>
                            <Icon m="1vh" color='yellow.400' as={FaDotCircle}></Icon>
                        </Flex>
                        <Divider></Divider>

                        <Text fontSize='sm' mt='1vh' p={2} textAlign='justify'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </Box>

                </Flex>

                <Divider mt="5vh"></Divider>

            </Flex>
        </>
    )
}

export default About