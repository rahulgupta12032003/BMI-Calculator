// import { React, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';


  const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} ml="10">
          <Box>
            <Avatar src="https://tericsoft.com/wp-content/uploads/2021/08/Web-Logo-371x90px-200x49.png" alt="Tericsoft" h="49px" width="200px" onClick={() => navigate("/")}/>
            <Button   
               onClick={() => navigate("/history")} 
               ml="10"
               mt="1.5"
               colorScheme='orange'
               >HISTORY
            </Button>
          </Box>

          <Flex alignItems={'center'} mr="10">
            <Stack direction={'row'} spacing={7}>
              <Button bg='blue.200' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button bg='teal' colorScheme="white" onClick={() => navigate("/login")} >LOGIN</Button>
              <Button bg="teal" colorScheme="white" onClick={() => navigate("/register")} >REGISTER</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;