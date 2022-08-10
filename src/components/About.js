import React from 'react'
import { Flex, Text, Divider } from '@chakra-ui/react'

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

                <Text fontSize='lg' mt='5vh'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Divider mt='5vh'></Divider>

            </Flex>
        </>
    )
}

export default About