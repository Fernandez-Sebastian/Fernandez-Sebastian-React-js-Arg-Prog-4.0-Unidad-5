import React, {useState} from 'react'
import { 
        Text,
        Button,
        Slider,
        SliderTrack,
        SliderFilledTrack,
        SliderThumb,
        SliderMark,
        ChakraProvider,
        Box 
    } from "@chakra-ui/react";


function ContadorResponsive() {
    const [contador, setContador] = useState(0)
    const [sorpresa, setSorpresa] = useState(false)
    /* const [sliderValue, setSliderValue] = useState(50)
  
    const labelStyles = {
      mt: '2',
      ml: '-2.5',
      fontSize: 'sm',
    } */

    function incrementar() {
        setContador(contador+1)
    }

    function decrementar() {
        setContador(contador-1)
    }


  return (
    <>
        <ChakraProvider>
            {/* <Box pt={6} pb={2}>
                <Slider aria-label='slider-ex-6' onChange={(val) => setSliderValue(val)}>
                <SliderMark value={25} {...labelStyles}>
                    25%
                </SliderMark>
                <SliderMark value={50} {...labelStyles}>
                    50%
                </SliderMark>
                <SliderMark value={75} {...labelStyles}>
                    75%
                </SliderMark>
                <SliderMark
                    value={sliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                >
                    {sliderValue}%
                </SliderMark>
                <SliderTrack>
                    <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
                </Slider>
            </Box> */}
            <Box paddingTop="20px"> 
                <Text as='h1' textAlign="center" fontFamily="cursive"> Contador: {contador}</Text>
                <Box textAlign="center">
                    <Button 
                    colorScheme='red'
                    onClick={decrementar}isDisabled={
                        contador==(-200)?"isDisabled":""
                    }
                    >Decrementar
                    </Button>
                    <Button 
                    colorScheme='whatsapp' 
                    onClick={incrementar} isDisabled={contador==200?"isDisabled":""} margin="5px"
                    >Incrementar
                    </Button>
                </Box>   
                </Box>
        </ChakraProvider>
    </>
  )
}

export  {ContadorResponsive}