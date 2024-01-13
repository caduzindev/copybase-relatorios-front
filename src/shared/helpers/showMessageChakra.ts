import { ToastId, UseToastOptions } from "@chakra-ui/react";

export const showMessageChrakra = (
    toast: (options?: UseToastOptions | undefined) => ToastId, 
    component: React.ReactNode
) => {    
    toast({
        duration: 4000,
        isClosable: true,
        render: () => component
    });
}
