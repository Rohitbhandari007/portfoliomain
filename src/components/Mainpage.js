import { React, useState, useEffect } from 'react'
import { Flex, Text, Image, Box, Progress, Divider } from "@chakra-ui/react"
import earth from './img/earth.svg'
import './css/Mainpage.css'

function Mainpage() {


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
                    w={["70vh", "80vh"]}
                >
                    <Text fontSize='5xl' className='myname' ml={['2vh', '0vh']}>Rohit Bhandari</Text>
                    <Text fontSize='xl' ml={['2vh', '0vh']}>Software Developer</Text>
                    <Progress value={69} size='xs' colorScheme='pink' ml={['2vh', '0vh']} />


                </Flex>
                <Box
                    boxSize='sm'
                >
                    <Image
                        className='App-logo'
                        id='logo'
                        src={earth}
                        mt={['10vh', '0vh']}
                    ></Image>

                </Box>


            </Flex>
        </>
    )
}

export default Mainpage