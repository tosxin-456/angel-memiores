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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab maiores quasi voluptatibus fuga, optio aut, molestiae quam cumque omnis quae numquam esse quisquam possimus. Esse quas aut consectetur numquam tempora mollitia iusto, sed expedita temporibus laboriosam adipisci possimus assumenda, optio et veritatis aspernatur? Eos totam aliquam natus dolorum quisquam nesciunt maiores architecto officia assumenda odio, veritatis sequi illo repellendus, vitae explicabo error corporis provident sint, rem nulla voluptatum tempore neque dolor minima? Deserunt id, delectus sit ducimus excepturi quis voluptatibus temporibus sapiente quae rerum pariatur asperiores officia minima exercitationem enim qui expedita vel repellendus alias accusantium fuga! Commodi, distinctio temporibus.
          ` 
          
          ],
          typeSpeed: 200,
          backSpeed: 200,
          backDelay: 300,
          loop: false,
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
       <Image width={'30%'} maxW={'230px'} src={header} 
       marginLeft={'auto'}/>
        </Box>
      <Box
      backgroundColor={'rgba(154, 81, 248, 0.29)'}
      width={'100%'}
      m={'auto'}
      p={'50px'}
      textAlign={'center'}
      >
        <Text
        as="div" display="inline-block"
        width={'80%'}
        margin={'auto'}
        fontSize={'20px'}
        color={'#F18686'}
        >
        <span ref={el}></span>
        </Text>
      </Box>
    </Box>
  )
}

export default Poem
