import {
    Box,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Avatar,
    Center,
    Button,
  } from '@chakra-ui/react';
  
  
  export default function Calendly() {
    return (
  
  
          <Center py={6}>
                  <Box
                  maxW={'320px'}
                  w={'full'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'lg'}
                  p={6}
                  textAlign={'center'}
                  border='5px' 
                  borderColor='red.200'
                  >
                          <Avatar
                              size={'lg'}
                              src={
                              'https://cdn.discordapp.com/attachments/985521628500877322/1025254585780146197/unknown.png'
                              }
                              mb={4}
                          />
                          <Heading fontSize={'2xl'} fontFamily={'body'}>
                              Calendly
                          </Heading>
                          <Text
                              textAlign={'center'}
                              color={useColorModeValue('gray.700', 'gray.400')}
                              px={3}>
                              Let's e-meet sometime! 
                          </Text>
      
                          <Stack mt={8} direction={'row'} spacing={4}>
                              <Button
                              flex={1}
                              fontSize={'sm'}
                              rounded={'full'}
                              bg={'blue.400'}
                              color={'white'}
                              boxShadow={
                                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                              }
                              _hover={{
                                  bg: 'blue.500',
                              }}
                              _focus={{
                                  bg: 'blue.500',
                              }}>
                              Book Time
                              </Button>
                          </Stack>
                  </Box>
          </Center>
    )
  }
  