"use client";

import React, { useState } from 'react';
import { Box, Flex, Link, IconButton, Stack } from '@chakra-ui/react';
import { FiMenu, FiX } from 'react-icons/fi';
import deliImage from '../images/deli_1_-removebg-preview.png';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="#FF7622"  boxShadow="md" px={8} /* Adicionando mais padding lateral */>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link href="/" ml="50px" >
          <img src={deliImage} alt="Logo" style={{ width: '60px', height: '60px' }} />
        </Link>
        <IconButton
          size="md"
          bg={"#FF7622"}
          _hover={{ color: 'blue.500' }}
          icon={isOpen ? <FiX /> : <FiMenu />}
          aria-label="Toggle menu"
          display={{ md: 'none' }}
          onClick={toggleMenu}
        />
        <Flex display={{ base: 'none', md: 'flex' }}  ml={10} mr={"190px"} /* Ajustando os links mais para dentro */>
          <Stack direction="row"  spacing={6} /* Ajustando o espaçamento entre os links */>
            <Link href="/" color="white" _hover={{ color: 'blue.500' }}>
              Home
            </Link>
            <Link href="/" color="white" _hover={{ color: 'blue.500' }}>
              About
            </Link>

            <Link href="/" color="white" _hover={{ color: 'blue.500' }}>
              Contact
            </Link>
            
          </Stack>
        </Flex>
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <Link href="/" color="white" _hover={{ color: 'blue.500' }}>
              Home
            </Link>
            <Link href="/" color="white" _hover={{ color: 'blue.500' }}>
              About
            </Link>

            <Link href="/" color="white" _hover={{ color: 'blue.500' }}>
              Contact
            </Link>


          </Stack>

          
        </Box>
      )}
    </Box>
  );
}

