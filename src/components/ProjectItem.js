import React from 'react'
import {
    Flex, Text, Box, Image, Badge, Button, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from '@chakra-ui/react'
import ProjectDetail from './ProjectDetail'
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
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Flex mt='2vh' cursor='pointer' borderRadius="lg" _hover={{ background: 'whiteAlpha.100', transition: '.2s ease', }} ml={2}>

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
                            <Button size='xs' ml="1vh" onClick={onOpen}>Project Details</Button>
                            <Modal onClose={onClose} size='full' isOpen={isOpen}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <ProjectDetail></ProjectDetail>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={onClose}>Close</Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>


                        </Box>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}

export default ProjectItem