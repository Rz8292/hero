import React from 'react';
import {Drawer, 
    DrawerBody,
     DrawerHeader,
      DrawerOverlay,
       DrawerContent,
        DrawerCloseButton,
        Button,
        useDisclosure,
        VStack,
        HStack
    } from '@chakra-ui/react'
    import { Link } from 'react-router-dom';
    import {BiMenuAltLeft} from 'react-icons/bi'


const Header = () => {

const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <>
    <Button
    zIndex={'overlay'}
    position={'fixed'}
    top={'4'}
    left={'4'}
    colorScheme='purple'
    p={'0'}
    w={'0'}
    h={'10'}
    borderRadius={'full'}
    onClick = {onOpen}
    >
        <BiMenuAltLeft  />
    </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />

        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                Grappl Tech
            </DrawerHeader>

            <DrawerBody>
                <VStack alignItems={'flex-start'}>
                    <Button  onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Home</Link>
                    </Button  >
                    <Button  onClick={onClose} variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Browse All BootCamps</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
                        <Link to={'/?category=free'}>Apply for a Bootcamp</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>GT Community Components</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Workshop and Hackathons</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Grappl Tech Resume Maker</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Career</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>Contact Us</Link>
                    </Button>
                    <Button onClick={onClose}  variant={'ghost'} colorScheme='purple'>
                        <Link to={'/'}>About Us</Link>
                    </Button>
                 
                </VStack>

                <HStack pos={'absolute'} bottom={'10'} left={'0'}  w={'full '} 
                justifyContent={'space-evenly'}>
                    <Button  onClick={onClose} colorScheme={'purple'}>
                        <Link to={'login'}>Log In</Link>
                    </Button>
                    <Button  onClick={onClose} colorScheme={'purple'} variant={'Outline'}>
                        <Link to={'signup'}>Sign Up</Link>
                    </Button>
                </HStack>
            </DrawerBody>
        </DrawerContent>

    </Drawer>


    
    </>
  );
}

export default Header;
