import React from 'react'
import { Box,Text } from "@chakra-ui/react";

function Cuerpo() {
  return (
    <Box paddingTop="100px" textAlign="center">
        <Text as='p' fontFamily="cursive">
          Juego facil de jugar donde podes incrementar o decrementar un contador.
        </Text>
        <Text as='p' fontFamily="cursive">
          Cuidado!, solo podras aumentar hasta 15 y decrementar hasta -15.
        </Text>
    </Box>
  )
}

export default Cuerpo