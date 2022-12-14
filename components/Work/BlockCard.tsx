import { Heading, Text, Link, Button, Box, Stack, useDisclosure, Avatar, useColorModeValue} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


export default function BpCard() {
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
            borderColor: "blue",
        }}
    >        
        <Stack direction={'row'} align={'center'}>
          <Avatar
            src={'https://media-exp1.licdn.com/dms/image/C4D0BAQFUStX3pSR7-Q/company-logo_100_100/0/1630506759883?e=1672876800&v=beta&t=5dYhZOuiEW3p1THlhJvujZY0Ul5e4iKgtsDHO5Xesf8'}
            size='2xl'
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'} pl={3}>
          <Link href='https://www.blockperks.app/' isExternal style={{ textDecoration: 'none' }}>
            <Heading 
            fontWeight={600} 
            
            bgGradient='linear(to-l, #FBF2FF, #0031FF)'
            bgClip='text'
            >
              Blockperks
              </Heading>
            </Link>
            <Text
              as='em'               
              fontSize='lg'>
              Community Lead
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
            Web3 social trading app for NFT’s on Polygon, Near and Ethereum. </Text>
              <Box pt={3}>
              <Button {...buttonProps}
                  minW='100%'
                  h={10}
                  transition='all 0.2s'
                  borderRadius='md'
                  borderWidth='1px'
                  bgGradient='linear(to-r, #88D1F1, #0031FF)'
                  _hover={{
                    bgGradient:'linear(to-r, #FBF2FF, #0031FF)',
                  }}
                  _expanded={{
                    bgGradient:'linear(to-r, #FBF2FF, #0031FF)',
                  }}
              >
                <Text color='black'>
                More About It<ChevronDownIcon />
                </Text>
              </Button>
              <Text {...disclosureProps} mt={4}>
                At Block Perks I had the Community Management Role. Here I helped engage and interact with the community through talking, brainstorming, interviews and other methods. I also helped design mockups and posts.
              </Text>
              </Box>

          </Stack>
        </Stack>                  
      </Box>      );
}