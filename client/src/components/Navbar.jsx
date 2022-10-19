// import { React, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';


  const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const [user , setUser] = useState({})
  const userId = JSON.parse(localStorage.getItem('userId'));
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/auth/:${userId}/getuser/detail`)
    .then((data) => {
        console.log("user", data.data)
        setUser(data.data)
    })
    .catch((err) => {
        console.log(err);
    })
  },[])

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
              <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-man-512.png'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Name : {user.name}</MenuItem>
                <MenuItem>Email: {user.email}</MenuItem>
              </MenuList>
            </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;