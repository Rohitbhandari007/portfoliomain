import { React } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ProjectItem from './ProjectItem'
import projectimg from './img/projectimg.png'
import proj2 from './img/proj2.png'


function Projects() {
    return (
        <>
            <Flex
                flexDir='column'
                w='80%'
                justifyContent='center'
                margin='auto'
                id='project'
                mt="5vh"
                alignItems='center'
                textAlign='center'
            >
                <Text fontSize='3xl' fontWeight='600'>Projects</Text>

                <Flex flexDir={['column', 'column']}>
                    <ProjectItem title={'Journal Note'} image={projectimg} details={'username:guest , password:guest'}></ProjectItem>

                    <ProjectItem title={'Social Media'} image={proj2} details={'Not live yet'}></ProjectItem>


                </Flex>



            </Flex>
        </>
    )
}

export default Projects