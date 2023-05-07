import React from 'react';

import {
    Flex,
} from '@chakra-ui/react'

export const navbarHeight = 20;
  
const Navbar : React.FC = () => {    
    return (
        <Flex
            position='absolute'
            top={0}
            left={0}
            right={0}
            zIndex={100}
            height={navbarHeight}
            w='100%'
            gap={8}
            alignItems='center'
            p={4}
        />
    );
};

export default Navbar