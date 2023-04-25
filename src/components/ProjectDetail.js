import { React } from 'react'
import { Flex, Text, Image, Box, useColorModeValue, Badge, Button } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function ProjectDetail({ title, image, details, sourcelink }) {

    const bg = useColorModeValue('#edf1f8', 'whiteAlpha.100')

    return (
        <>
            <Flex flexDir={['column, column']} justifyContent='space-around' >
                <Flex flexDir='column'>
                    <Text fontWeight='600'> {title}</Text>

                    <Box w={['auto', '140vh']} border='sm' mt='2vh' >
                        <Image src={image} objectPosition='center center' objectFit='cover' borderRadius='md'></Image>
                    </Box>

                    <Box mt='2vh' bg={bg} borderRadius='md' p="5vh">
                        <Text>Languages and frameworks </Text>
                        <Flex w='30vh' justifyContent='space-between' flexDir='column'>
                           
                            <Box display='flex' alignItems='baseline' flexDir='column' gap={2}>
                                <Badge borderRadius='full' px='2' colorScheme='teal' ml={1}>
                                    Django
                                </Badge>
                                <Badge borderRadius='full' px='2' colorScheme='teal' ml={1}>
                                    React
                                </Badge>
                                <Badge borderRadius='full' px='2' colorScheme='teal' ml={1}>
                                    Chakra UI
                                </Badge>
                                <Badge borderRadius='full' px='2' colorScheme='teal' ml={1}>
                                    Django RestFramework
                                </Badge>

                            </Box>
                            
                        </Flex>

                        <Text mb={4}>
                            {details}
                        </Text>
                       
                        
                        <a href={sourcelink}><Button size='xs' ml="1vh">Site/Source</Button></a>
                       
                        

                    </Box>
                </Flex>

            </Flex>
        </>
    )
}

export default ProjectDetail