import {
    Modal as ModalChakra, 
    ModalBody, 
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalCloseButton,
} from "@chakra-ui/react"

type sizeModalType = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'full'
const mapToSizeModal = new Map<sizeModalType, string>([
    ['xsmall', 'xs'],
    ['small', 'sm'],
    ['medium', 'md'],
    ['large', 'lg'],
    ['xlarge', 'xl'],
    ['full', 'full'],
])

type Props = {
    onClose: () => void,
    isOpen: boolean,
    size: sizeModalType,
    title: React.ReactNode,
    children: React.ReactNode
}

export const Modal = ({ onClose,isOpen,size, title, children }: Props) => {
    const sizeModal = mapToSizeModal.get(size) || 'md';
    return (
        <ModalChakra onClose={onClose} size={sizeModal} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader 
                    backgroundColor="copybase.general.purple"
                >{title}</ModalHeader>
                <ModalCloseButton color="copybase.general.white"/>
                <ModalBody backgroundColor="copybase.general.whiteGrayClean">
                    {children}
                </ModalBody>
            </ModalContent>
        </ModalChakra>
    )
}