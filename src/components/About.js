import React from 'react'
import { Flex, Text, Divider, Box, Image, Icon,UnorderedList, ListItem  } from '@chakra-ui/react'
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
                    <Box borderRadius='sm' borderWidth='1px' w={['80%', "50%"]} mt={['2vh', '0vh']} textAlign='start'>
                        <Flex justifyContent='flex-start'>
                            <Icon m="1vh" color='red.400' as={FaDotCircle}></Icon>
                            <Icon m="1vh" color='green.400' as={FaDotCircle}></Icon>
                            <Icon m="1vh" color='yellow.400' as={FaDotCircle}></Icon>
                        </Flex>
                        <Divider></Divider>
                        
                        <Box m={2}>
                        <Text fontSize='sm' mt='1vh' p={2}></Text>
                        Hello, my name is Rohit Bhandari and I'm a software developer from Nepal
                        <Text mt={2} >Here are some of the technologies I work with:</Text>
                            <UnorderedList fontSize='xs'>
                                <ListItem>Django (MVT, Rest API, Channels)</ListItem>
                                <ListItem>React (Web)</ListItem>
                                <ListItem>AWS (EC2 monitoring, deployment, cost management)</ListItem>
                                <ListItem>Bootstrap/CSS/HTML/JavaScript</ListItem>
                                <ListItem>Postgres, Redis, Mysql, Firebase</ListItem>
                                <ListItem>Extraas: Soap API, WordPress, Docker</ListItem>

                            </UnorderedList>
                            </Box>
                    </Box>

                </Flex>
                <Flex mt={10} flexDirection='column' justifyContent='start' textAlign='start' >
                    <Text fontWeight="bold" mt="2rem" mb="2rem" fontSize='lg'>Employment Hisotry</Text>
                <Text fontWeight="bold" fontSize='sm'>Software Developer | Pathway Technology (Thapathali Kathmandu, Nepal)</Text>
                        <Text fontSize='xs'>December 2022 - Present</Text>
                        <Text fontSize='xs'>
                            I'm working as a backend software developer mainly using Django.
                        </Text>
                        <Text fontWeight="bold" mt="2rem" fontSize='sm'>
                            Full-stack Developer | API IT Lab Pvt Ltd (Kailali, Nepal)
                        </Text>
                        <Text fontSize='xs' >February 2021 - January 2022</Text>
                        <Text fontSize='xs'>
                            I worked as a full stack web developer (React + Django). Worked on multiple CMS and management software projects.
                        </Text>
                </Flex>
                <Divider mt="5vh"></Divider>

            </Flex>
        </>
    )
}

export default About