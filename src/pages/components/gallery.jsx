import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import GalleryHeader from '../../assets/love images/I made a gallery from our best memories.svg'




function Gallery() {
    return (
     <Box
     margin={'70px'}
     >
      <Heading
      width={'80%'}
      margin={'auto'}
      >
        <Image width={'100%'} src={GalleryHeader}   />
      </Heading>
     </Box>
  )
}

export default Gallery
