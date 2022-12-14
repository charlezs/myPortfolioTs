import { Heading, Text, Link, Button, Box, Stack, useDisclosure, Avatar, useColorModeValue} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function AgCard() {
    const { getDisclosureProps, getButtonProps } = useDisclosure()
    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
  
    return (
        <Box
        as="article"
        w="100%"
        p={4}
        mb={12}
        borderColor={"black"}
        borderRadius={5}
        borderWidth="1px"
        transition=".5s"
        cursor="pointer"
        display="flex"
        role="group"
        _hover={{
            borderColor: "purple.200",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Avatar
            src={'https://pbs.twimg.com/profile_images/1546662871160979458/DIZpFR5S_400x400.jpg'}
            size='2xl'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://www.agoralabs.xyz/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            
            bgGradient='linear(to-l, #FBF2FF, #DC86FA)'
            bgClip='text'
            >
              Agora Labs
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Founder / CMO
            </Text>
            <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={200}
            fontSize={'xs'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={1}
            alignSelf={'flex-start'}
            rounded={'md'}>
              2021 - 2022
            </Text>

            <Text color={'gray.500'} pt={3} fontSize={20}>
             A platform where creators can unlock their potential of their fanbase with content gating tools built for web3. Powered by social tokens and NFTs.
            </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  width='100%'
                  h={10}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-l, #C030ED, #DC86FA)'
                  _hover={{
                    bgGradient:'linear(to-r, #FBF2FF, #DC86FA)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FBF2FF, #DC86FA)',
                  }}
              >
                <Text color='black'>
                More About It<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
                At AgoraLabs I took the CMO position but as a founder I had many roles. These roles all included activities such as: writing, digital marketing, user acquisition, talking to communities, networking with influencers, making growth strategies, design, and leading teams.
              </Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      );
}