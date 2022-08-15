import React from 'react'
import { Flex, Text, Divider, Box, Image, Icon } from '@chakra-ui/react'
import rohitbhandari from './img/rohitbhandari.jpg'
import { FaDotCircle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

function About() {
    return (
        <>
            <Flex flexDir='column'
                w={['100%', "80%"]}
                justifyContent='center'
                margin='auto'
                mt="20vh"
                alignItems='center'
                textAlign='center'
                id='about'

            >
                <Divider></Divider>

                <Text fontSize='3xl' fontWeight='600' mt='5vh'>About me</Text>
                <Flex flexDirection={['column', 'row']} justifyContent='space-between' alignItems='center' mt='5vh'>
                    <Box bg='' w={['100%', "50%"]} display='flex' flexDir={['column', 'row']} alignItems='center'>

                        <Image src={rohitbhandari} h={["35vh", "40vh"]} w={["38vh", "40vh"]} borderRadius='lg'></Image>
                    </Box>
                    <Box borderRadius='sm' borderWidth='1px' w={['80%', "50%"]} mt={['2vh', '0vh']}>
                        <Flex justifyContent='flex-start'>
                            <Icon m="1vh" color='red.400' as={FaDotCircle}></Icon>
                            <Icon m="1vh" color='green.400' as={FaDotCircle}></Icon>
                            <Icon m="1vh" color='yellow.400' as={FaDotCircle}></Icon>
                        </Flex>
                        <Divider></Divider>

                        <Text fontSize='sm' mt='1vh' p={2} textAlign='justify'>
                            Hello my name is Rohit Bhandari. Im a full-stack web developer from Nepal.
                            I've been learning web development process since 3 years.
                            I'm working with frontend  and backend frameworks like React and Django.

                        </Text>
                    </Box>

                </Flex>

                <Divider mt="5vh"></Divider>

            </Flex>
        </>
    )
}

export default About