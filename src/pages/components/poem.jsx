import { Box, Image, Text } from '@chakra-ui/react'
import React , {useRef, useEffect} from 'react'
import header from '../../assets/love images/Hoping this poem speaks the exact words of my heart.svg'
import Typed from 'typed.js';


function Poem() {
    const el = useRef(null);

    useEffect(() => {
      if (el.current) {
        const typed = new Typed(el.current, {
          strings: [
            `
        How do I love thee? Let me count the ways. I love thee to the depth and breadth and height My soul can reach, when feeling out of sight For the ends of being and ideal grace. I love thee to the level of every day's Most quiet need, by sun and candlelight. I love thee freely, as men strive for right; I love thee purely, as they turn from praise. I love thee with the passion put to use In my old griefs, and with my childhood's faith. I love thee with a love I seemed to lose With my lost saints, I love thee with the breath, Smiles, tears, of all my life; and, if God choose, I shall but love thee better after death.
        #copied
          `
          ],
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 1000,
          loop: true
        });
  
        return () => {
          typed.destroy();
        };
      }
    }, []);
  return (
    <Box
    width={'100%'}
    marginTop={'50px'}
    >
        <Box
        width={'90%'}
        >
       <Image width={'35%'} maxW={'230px'} src={header} 
       marginLeft={'auto'}/>
        </Box>
      <Box
      backgroundColor={'rgba(0, 0, 0, 0.84)'}
      width={'100%'}
      m={'auto'}
      marginTop={'50px'}
      p={'50px'}
      textAlign={'center'}
      >
        <Text
          fontFamily="'Cedarville Cursive', 'cursive'"

        as="div" display="inline-block"
        width={'80%'}
        margin={'auto'}
        fontSize={'25px'}
        color={'#F18686'}
        >
        <span ref={el}></span>
        </Text>
      </Box>
    </Box>
  )
}

export default Poem
