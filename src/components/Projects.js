import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ProjectItem from './ProjectItem'

function Projects() {
    return (
        <>
            <Flex
                flexDir='column'
                w='80%'
                justifyContent='center'
                margin='auto'

                mt="5vh"
                alignItems='center'
                textAlign='center'
            >
                <Text fontSize='3xl' fontWeight='600'>Projects</Text>

                <Flex flexDir={['column', 'row']} >
                    <ProjectItem title={'Journal Note'}></ProjectItem>

                    <ProjectItem title={'Journal Note'}></ProjectItem>


                </Flex>



            </Flex>
        </>
    )
}

export default Projects