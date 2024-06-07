import React from 'react'
import fall from '../../assets/love images/Fall in Love.svg'
import { Image, Box } from '@chakra-ui/react'




function LoveImage() {
  return (
    <Box
    marginTop={'70px'}
    // className='bg-black'
    >
      <Image
      width={'100%'}
      src={fall} />
    </Box>
  )
}

export default LoveImage
