import React, {useState} from 'react'
import { 
        Text,
        Button,
        ChakraProvider,
        Box, 
        Flex
    } from "@chakra-ui/react";
import { motion } from "framer-motion";


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
            <Box pt="30px"> 
                <Text as='h1' id='contar' textAlign="center" fontFamily="cursive"> Contador: {contador}</Text>
                <Flex w="100%" justifyContent="center" >
                    <Flex w={{base:"90%", sm:"50%", md:"25%" }} mt="50px" justifyContent="space-between">
                        <motion.div whileHover={contador==-15 || contador==15  ? { scale: 1 } : { scale: 1.2 }} whileTap={contador==-15 || contador==15  ? { scale: 1 } : { scale: 0.8 }} w="fit-content" h="fit-content">
                            <Button 
                            bg='#438e96' color="white"_hover={{bg:"#356169"}}
                            onClick={decrementar}isDisabled={
                                contador==(-15)?"isDisabled":""
                            }
                            >Decrementar
                            </Button>
                        </motion.div>
                        <motion.div whileHover={contador==0 ? { scale: 1 } : { scale: 1.2 }} whileTap={contador==0 ? { scale: 1 } : { scale: 0.8 }} w="fit-content" h="fit-content">
                            <Button 
                            bg='#438e96'color="white" _hover={{bg:"#356169"}}
                            onClick={resetear}isDisabled={
                                contador==(0)?"isDisabled":""
                            }
                            >Resetear
                            </Button>
                        </motion.div>
                        <motion.div whileHover={contador==-15 || contador==15  ? { scale: 1 } : { scale: 1.2 }} whileTap={contador==-15 || contador==15  ? { scale: 1 } : { scale: 0.8 }} w="fit-content" h="fit-content">
                            <Button 
                            bg='#438e96' color="white" _hover={{bg:"#356169"}}
                            onClick={incrementar} isDisabled={contador==15?"isDisabled":""} 
                            >Incrementar
                            </Button>
                        </motion.div>
                    </Flex>  
                </Flex> 
            </Box>
        </ChakraProvider>
    </>
  )
}

export  {ContadorResponsive}