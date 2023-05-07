import React from 'react';

import {Button as ChakraButton, ButtonProps} from "@chakra-ui/react";
import {accent, accentHover, background} from "@/data/colors";

type ButtonType = 'primary' | 'outline' | 'ghost';

type ButtonStyles = {
    [key in ButtonType]: ButtonProps
}

const buttonStyles: ButtonStyles = {
    primary: {
        color: background,
        bg: accent,
        _hover: {
            bg: accentHover
        }
    },
    outline: {
        variant: 'outline',
        color: accent,
        borderColor: accent,
        _hover: {
            bg: 'whiteAlpha.50'
        }
    },
    ghost: {
        variant: 'ghost',
        color: accent,
        _hover: {
            bg: 'whiteAlpha.50'
        }
    }
}

interface Props extends ButtonProps {
    buttonType: ButtonType;
}


const Button: React.FC<Props> = ({ buttonType, children, ...rest }) => {

    return (
        <ChakraButton
            {...buttonStyles[buttonType]}
            {...rest}
        >
            {children}
        </ChakraButton>
    );
};

export default Button;
