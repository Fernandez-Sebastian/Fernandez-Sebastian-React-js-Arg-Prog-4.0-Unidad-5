import React from 'react'
import { Box,Text } from "@chakra-ui/react";

function Cuerpo() {
  return (
    <Box paddingTop="100px" textAlign="center">
        <Text as='p' fontFamily="cursive">
            Esta es una pagina que, al aumentar o decrementar el Contador, podes generar un evento.

        </Text>

    </Box>
  )
}

export default Cuerpo