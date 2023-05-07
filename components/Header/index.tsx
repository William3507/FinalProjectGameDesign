import React from 'react'

import { Heading, VStack, Text } from '@chakra-ui/react'
import {accent} from "@/data/colors";

interface Props {
    headerText: string,
    subHeaderText: string,
}

const Header: React.FC<Props> = ({ headerText, subHeaderText }) => {
  return (
    <VStack
      spacing={4}
    >
        <Heading
            fontSize="4xl"
            fontWeight="bold"
            color={accent}
        >
            {headerText}
        </Heading>
        <Text
          color='white'
          textAlign='center'
        >
            {subHeaderText}
        </Text>
    </VStack>
  )
}

export default Header