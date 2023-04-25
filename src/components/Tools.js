import React from 'react'
import { Flex, Text, Icon } from '@chakra-ui/react'
import { FaReact, FaPython, FaJs, FaDatabase } from 'react-icons/fa'
import djangoproject from './img/djangoproject.svg'
import { SiDjango, SiPostgresql, SiRedis } from 'react-icons/all'

function Tools() {
    return (
        <>
            <Flex flexDir='column' alignItems='center'>
                <Text fontSize='3xl' fontWeight='600' mt='5vh' textAlign='center'>Frameworks and languages</Text>
                <Flex mt='5vh' flexDir='row' justifyContent='space-around' w={["90%", "50%"]} borderWidth='1px' p={[2, 4]} borderRadius='md'>
                    <Icon as={FaReact} h={10} w={10}></Icon> 
                    <Icon as={FaPython} h={10} w={10} ></Icon>
                    <Icon as={FaJs} h={10} w={10} ></Icon>
                    <Icon as={SiPostgresql} h={10} w={10}></Icon>
                    <Icon as={SiDjango} h={10} w={10}></Icon>
                    <Icon as={SiRedis} h={10} w={10}></Icon>

                </Flex>

            </Flex>
        </>
    )
}

export default Tools