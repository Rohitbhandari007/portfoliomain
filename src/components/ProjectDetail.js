import { React, useMemo } from 'react'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import ProjectItem from './ProjectItem'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import akai from './img/akai.png'
import django from './img/django.png'


function ProjectDetail({ slides }) {


    return (
        <>
            <Flex flexDir={['column, row']} justifyContent='space-around'>
                <Flex flexDir='column'>
                    <Text>Title</Text>
                    <Carousel infiniteLoop>
                        {slides.map((slide) => {
                            return <Image src={slide.image} height="auto" width="800px" />;
                        })}
                    </Carousel>

                </Flex>
                <Flex>
                    <Text>Languages and frameworks</Text>

                </Flex>
            </Flex>
        </>
    )
}

export default ProjectDetail