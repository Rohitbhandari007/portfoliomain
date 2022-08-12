import React from 'react';
import {
  ChakraProvider,
  Flex
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Nav from './components/Nav';
import theme from './theme';
import Mainpage from './components/Mainpage';
import About from './components/About';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Footer from './components/Footer';

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Flex overflowX='hidden' flexDir='column'>
        <Nav></Nav>
        <Mainpage></Mainpage>
        <About></About>
        <Projects></Projects>
        <Tools></Tools>
        <Footer></Footer>
      </Flex >

    </ChakraProvider>
  );
}

export default App;
