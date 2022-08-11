import { React, useState, useEffect } from 'react'
import { Flex, Text, Image, Box, Progress, Divider } from "@chakra-ui/react"
import earth from './img/earth.svg'
import './css/Mainpage.css'

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
                    <Text fontSize='5xl' className='myname'>Rohit Bhandari</Text>
                    <Text fontSize='xl'>Web Developer</Text>
                    <Progress value={69} size='xs' colorScheme='pink' />


                </Flex>
                <Box
                    boxSize='sm'
                >
                    <Image
                        className='App-logo'
                        id='logo'
                        src={earth}
                    ></Image>

                </Box>


            </Flex>
        </>
    )
}

export default Mainpage