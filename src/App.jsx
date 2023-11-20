import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { ContadorResponsive } from './Components/ContadorResponsive/ContadorResponsive';
import {Header} from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import Cuerpo from './Components/Cuerpo/Cuerpo';


function App() {

  return (
    <>
     <ChakraProvider>
        <Box > 
          <Header/> 
          <Cuerpo/>        
          <ContadorResponsive/>
          <Footer/>
        </Box>
      </ChakraProvider>
    </> 
  )
}

export default App
