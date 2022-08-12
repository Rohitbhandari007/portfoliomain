import React from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'


function Footer() {

    const bg = useColorModeValue('gray.100', '#171f2e');

    return (
        <>
            <Flex justifyContent='center' mt='10vh' bg={bg} h="10vh" alignItems='center'>
                <Text textAlign='center'> 2022 - Rohit Bhandari -All Rights Reserved</Text>
            </Flex>
        </>
    )
}

export default Footer