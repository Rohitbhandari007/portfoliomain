import { React } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import ProjectItem from './ProjectItem'
import projectimg from './img/proj2.png'
import tw from './img/tw.jpg'
import trip from './img/trip.png'

import tripturbo from './img/trp.png'
//dsadasd


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
                    
                <ProjectItem
                        title={'Trip Turbo'}
                        image={trip}
                        details={'Its an ongoing project based on travel and tourism in Nepal.'}
                        sourcelink={'https://www.tripturbo.com/'}

                    ></ProjectItem>
                    <ProjectItem
                        title={'Twitter Clone'}
                        image={tw}
                        details={'Just a replica of twitter using react and django with real time notification and chat system purely on django channels'}
                        sitelink={'https://github.com/Rohitbhandari007/twitter-clone-api'}

                    ></ProjectItem>
                       {/* <ProjectItem
                        title={'College App'}
                        image={projectimg}
                        details={'Not live yet'}
                        sourcelink={'https://github.com/Rohitbhandari007/academia-app'}

                    ></ProjectItem> */}

                    <ProjectItem
                        title={'Social Media'}
                        image={projectimg}
                        details={'Simple social media website. Made it for fun'}
                        sourcelink={'https://github.com/Rohitbhandari007/socialmedia-react'}

                    ></ProjectItem>


                </Flex>



            </Flex>
        </>
    )
}

export default Projects