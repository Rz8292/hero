import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minh={"40"} p="16" color={'white'}>

            <Stack direction={['column', 'row']}>

                <VStack
                    alignItems={'stretch'}
                    w={'full'}
                    px={'4'}
                >
                    <Heading size='md' textTransform={'uppercase'} textAlign={'center'}>
                        Contact Grappl
                    </Heading>

                    <HStack
                        borderBottom={'2px solid white'}
                        py={'2'}

                    >

                        <Input placeholder='enter Email Here' border={'none'} borderRadius={'none'} outline={'none'} />
                        <Button
                            p={'0'}
                            colorScheme={'purple'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}

                        >

                            <AiOutlineSend size={'20'} />
                        </Button>

                    </HStack>
                </VStack>

                <VStack 
                w={'full'}
                borderLeft={['none','1px solid white']}
                borderRight={['none','1px solid white']}
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'}> 
                        Grappl Tech
                    </Heading>
                    <Text>
                    All Right Reserved
                    </Text>

                </VStack>

                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                 
                    <Button variant={'link'} colorScheme={'purple'}>
                        <a target={"_blank"} href='https://github.com/GrapplTech/'>Github</a>
                    </Button>
                    <Button variant={'link'} colorScheme={'purple'}>
                        <a target={"_blank"} href='https://www.linkedin.com/company/grappltech/'>LinkedIn</a>
                    </Button>
                </VStack>

            </Stack>

        </Box>
    );
}

export default Footer;
