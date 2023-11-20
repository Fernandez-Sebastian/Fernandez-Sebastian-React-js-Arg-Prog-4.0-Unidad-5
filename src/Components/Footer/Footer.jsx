import { Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return(
        <VStack bg="#7c7c7c" h="auto" w="100%" color="#F4F4F4" mt="180">
            <Flex bg="#303B52" h="5px" w="100%"></Flex>
            <Flex h="auto" w="100%" direction={{base:"column",sm:"column", md:"row"}} pl={{sm:"5%", md:"0"}} paddingBlock="10px" justifyContent={{sm:"flex-start", md:"space-around"}} alignItems="center">
                <Flex flexDirection="column" width={{base:"90%", sm:"90%", md:"20%"}} mb={{base:"20px", sm:"20px", md:"0px"}} alignItems={{base:"center", sm:"center", md:"flex-start"}}>
                    <Heading as='h4' mb="15px" size='md'>
                        Donde Encontrarnos
                    </Heading>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Twitter</Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Facebook </Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Instagram </Text>
                    <Text fontSize='md' cursor="pointer" _hover={{ color:"#9C64FF" }}>Youtube </Text>
                </Flex>
            </Flex>
            <Divider/>
            <Flex w="100%" alignItems="center" justifyContent="center" pb="10px">
                <Text fontSize='sm'>Copyrigth - All rigths reserved © 2024</Text>
            </Flex>
        </VStack>
    )
}

export { Footer }