import React from 'react'
import { Flex, Text, Box, Image, Tag, Badge, Button, transition } from '@chakra-ui/react'
import projectimg from './img/projectimg.png'

function ProjectItem({ title }) {

    const property = {
        imageUrl: projectimg,
        imageAlt: 'Social media',
        beds: 3,
        baths: 2,
        title: 'Social Media',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <>
            <Flex mt='2vh' cursor='pointer' borderRadius="lg" _hover={{ background: 'whiteAlpha.100', transition: '.2s ease', }}>

                <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                    <Text p={4}>{title}</Text>
                    <Image src={property.imageUrl} alt={property.imageAlt} />

                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal' ml={1}>
                                Django
                            </Badge>
                            <Badge borderRadius='full' px='2' colorScheme='teal' ml={1}>
                                React
                            </Badge>
                            <Badge borderRadius='full' px='2' colorScheme='teal' ml={1}>
                                Chakra UI
                            </Badge>

                        </Box>
                        <Box display='flex' mt='2' alignItems='center'>
                            <Button size='xs' ml="1vh">View Site</Button>
                            <Button size='xs' ml="1vh">Source Code</Button>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default ProjectItem