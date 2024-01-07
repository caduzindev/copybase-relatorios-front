import { Button as ButtonChakra } from '@chakra-ui/react';

type Props = {
    color: string,
    size: 'xbig' | 'medium' | 'big' | 'small',
    callback: () => void,
    children: React.ReactNode,
    width?: string,
    height?: string,
    padding?: string
}

const mapToSizeButton = {
    'xbig': 'lg',
    'big': 'md',
    'medium': 'sm',
    'small': 'xs',
}

export const Button = ({ 
    color,
    size,
    callback,
    children,
    width,
    height, 
    padding 
}: Props) => {
    const sizeButton = mapToSizeButton[size] || 'sm'
    return <ButtonChakra 
        colorScheme={color}
        width={width}
        height={height}
        size={sizeButton}
        onClick={callback}
        padding={padding}
    >{children}</ButtonChakra>
}