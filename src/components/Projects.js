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

                <ProjectItem title={'Journal Note'}></ProjectItem>


            </Flex>
        </>
    )
}

export default Projects