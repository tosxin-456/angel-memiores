import React from 'react'
import { Button, Box, Flex, Text } from '@chakra-ui/react'

function YesOrNo() {
  return (
    <Box
      margin={'auto'}
      mt={'100px'}
      mb={'100px'}
      fontSize={'20px'}
    >
      <Flex
        margin={'auto'}
        width={'60%'}
        color={'white'}
        justifyContent={'space-between'}
        fontFamily={"'Cedarville Cursive', 'cursive'"}
      >
        <Button
          bg={'#917BAF'}
          zIndex={1000}  // Set a high z-index
          className='p-[15px] w-[40%] rounded-lg '
        >
          Yes
        </Button>
        <Button
          className='p-[15px] w-[40%] rounded-lg '
          bg={'#F18686'}
          zIndex={1000}  // Set a high z-index
        >
          No
        </Button>
      </Flex>
      <Box
        marginLeft={'auto'}
        mt={'100px'}
        mb={'100px'}
        width={'50%'}
        marginRight={'50px'}
        maxWidth={'20rem'}
      >
        <Text
          textAlign={'end'}
          color={'#F18686'}
        >
          Just in case you have a special message for me... leave it down there.
        </Text>
      </Box>
      <Box
        width={'90%'}
        maxWidth={'40rem'}
        // background={'black'}
        margin={'auto'}
        zIndex={1000}  // Set a high z-index
        position={'relative'}  // Ensure the z-index takes effect
      >
        <textarea
          id="multiline-input"
          rows="10"
          
        //   cols="100"
          
          className='border-[1px] m-auto p-[7px] rounded-sm outline-none w-[100%] max-w-[40rem]  '
          placeholder='Write something sweet...'
          style={{ 
            zIndex: 1000, 
            position: 'relative',
            fontFamily: "'Cedarville Cursive', 'cursive'",  // Ensuring consistent font family
            fontSize: '20px'  // Ensuring the font size is consistent
          }}
        ></textarea>
      </Box>
      <Box
        width={'fit-content'}
        marginLeft={'auto'}
        mt={'30px'}
        position={'relative'}  // Ensure the z-index takes effect
        zIndex={1000}  // Set a high z-index
      >
        <Button
          className='p-[7px] w-[5rem] rounded-sm mr-[60px]'
          bg={'#F18686'}
          color={'white'}
          style={{ zIndex: 1000, position: 'relative' }} // Ensure the button has the same high z-index
        >
          Send
        </Button>
      </Box>
    </Box>
  )
}

export default YesOrNo
