import React, {useState} from 'react'
import { 
        Text,
        Button,
        ChakraProvider,
        Box 
    } from "@chakra-ui/react";


function ContadorResponsive() {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador+1)
        if (contador > 10 && contador < 30){
            
        }
    }

    function decrementar() {
        setContador(contador-1)
    }

    function resetear() {
        setContador(0)
    }

  return (
    <>
        <ChakraProvider>
            <Box paddingTop="20px"> 
                <Text as='h1' id='contar' textAlign="center" fontFamily="cursive"> Contador: {contador}</Text>
                <Box textAlign="center">
                    <Button 
                    colorScheme='cyan'
                    onClick={decrementar}isDisabled={
                        contador==(-50)?"isDisabled":""
                    }
                    >Decrementar
                    </Button>
                    <Button 
                    colorScheme='red'
                    onClick={resetear}isDisabled={
                        contador==(0)?"isDisabled":""
                    }
                    >Resetear
                    </Button>
                    <Button 
                    colorScheme='whatsapp' 
                    onClick={incrementar} isDisabled={contador==50?"isDisabled":""} margin="5px"
                    >Incrementar
                    </Button>
                </Box>   
            </Box>
        </ChakraProvider>
    </>
  )
}

export  {ContadorResponsive}