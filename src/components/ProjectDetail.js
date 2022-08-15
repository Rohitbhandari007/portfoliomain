import { React } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function ProjectDetail({ title, image }) {


    return (
        <>
            <Flex flexDir={['column, row']} justifyContent='space-around'>
                <Flex flexDir='column'>
                    <Text>Journal Note</Text>


                </Flex>
                <Flex>
                    <Text>Languages and frameworks</Text>

                </Flex>
            </Flex>
        </>
    )
}

export default ProjectDetail