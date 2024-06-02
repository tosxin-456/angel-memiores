import '../../css/animations.css'
import { Box, Flex, Image, Text, HStack } from '@chakra-ui/react'
import React from 'react'
import rose from '../../assets/love images/roseAndWriteUp.svg'
import img1 from '../../assets/love images/image 1.svg'
import love from '../../assets/love images/love.svg'
import flower from '../../assets/love images/flower.svg'
import heart from '../../assets/love images/heart.svg'
import Why from '../../assets/love images/why I Love You.svg'
import Review from '../components/cards'
import Gallery from '../components/gallery'
import Video from '../components/video'
import Flower from '../components/flower'
import Poem from '../components/poem'
import LoveImage from '../components/loveImage'
import KeepScrolling from '../components/keepScrolling'
import LittleMore from '../components/LittleMore'
import WillyouBe from '../components/will yoube'






function StartPage() {
  return (
    <Box>
      <Box
      margin={'auto'}
      mt={'55px'}
      className=' w-[80%] lg:w-[45%] '
      >
        <Image src={img1}
        m={'auto'}
        className='w-[55%] lg:w-[50%]' />
      </Box>
      <Box
      width={'95%'}
      margin={'auto'}
    //   bg={'black'}
      >
       <Image src={love} id='sway'/>
      </Box>
     <Flex>
     <Image src={love} id='sway'/>
     <Image src={love} id='sway'/>
     </Flex>
     <Box>
       <Image 
      width={'300px'}
      src={rose} 
      marginLeft={'auto'}
      id='rose'/>
      </Box>
      <Box>
        <Review/>
        <Flex
        p={'20px'}
        // backgroundColor={'black'}
        justifyContent={'space-between'}
        >
            <HStack>
                <Box
                mt={'30px'}
                >
                   <Image 
                  width={'130px'}  
                  src={Why}/>    
                </Box>
            <Image 
            width={'70px'}
            className='animate-pulse' src={heart}/>    
            </HStack>
        <HStack
        ml={'auto'}
        // m={'50px'}
        >
        <Image    
        zIndex={-1}  
        position={'absolute'} 
        width={'20px'} 
        src={flower} id='sway'
        marginLeft={'70px'}
        /> 
        <Text
        fontFamily='"Satoshi", "sans-serif"'
        fontWeight={'500'}
        className='text-xl text-[#676262] '
        >Swipe Left</Text>
        </HStack>
        </Flex>
      </Box>
       <Gallery/>
       <Video/>
       <Poem/>
       <LoveImage/>
       <KeepScrolling/>
       <KeepScrolling/>
       <KeepScrolling/>
       <LittleMore/>
       <WillyouBe/>
       {/* <Box 
          zIndex={-5}  
          position={'absolute'} 
          width={'100%'}
          top={0} 
          src={flower} 
       className='z-[-1] ' >
       <Flower/>
       </Box> */}
    </Box>
  )
}

export default StartPage
