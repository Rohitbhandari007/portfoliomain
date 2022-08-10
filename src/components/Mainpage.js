import { React, useState, useEffect } from 'react'
import { Flex, Text, Image, Box, Progress, Divider } from "@chakra-ui/react"
import earth from './img/earth.svg'


function Mainpage() {


    let [rotate, setRotate] = useState('rotate(0deg)')

    useEffect(() => {
        setRotate('rotate(360deg)')
    }, [])


    return (
        <>
            <Flex
                w='100%'
                flexDir='row'
                justifyContent='center'
                mt="10vh"
                alignItems='center'
            >

                <Flex flexDir='column'
                    w="70vh"
                >
                    <Text fontSize='5xl'>Rohit Bhandari</Text>
                    <Text fontSize='xl'>Web Developer</Text>
                    <Progress value={69} size='xs' colorScheme='pink' />


                </Flex>
                <Box
                    boxSize='sm'
                >
                    <Image
                        src={earth}
                        transform={rotate}
                        transitionDuration='5s'
                        animation='rotating 2s linear infinite'

                    ></Image>

                </Box>


            </Flex>
        </>
    )
}

export default Mainpage