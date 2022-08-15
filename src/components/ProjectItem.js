import React from 'react'
import {
    Flex, Text, Box, Image, Badge, Button, useDisclosure, Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from '@chakra-ui/react'
import ProjectDetail from './ProjectDetail'


function ProjectItem({ title, image, details, sitelink, sourcelink }) {

    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Flex mt='2vh' borderRadius="lg" ml={2}>

                <Box maxW='lg' borderWidth='1px' borderRadius='lg' overflow='hidden' >
                    <Text p={4}>{title}</Text>
                    <Image src={image} />

                    <Box p='6'>

                        <Box display='flex' mt='2' alignItems='center'>
                            <a href={sitelink}><Button size='xs' ml="1vh">View Site</Button></a>
                            <Button size='xs' ml="1vh" onClick={onOpen}>Project Details</Button>
                            <Modal onClose={onClose} size='full' isOpen={isOpen}>
                                <ModalOverlay />
                                <ModalContent>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <ProjectDetail title={title} image={image} details={details} sourcelink={sourcelink}></ProjectDetail>
                                    </ModalBody>
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