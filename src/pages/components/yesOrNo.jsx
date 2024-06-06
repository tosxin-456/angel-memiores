import React, { useState, useEffect } from 'react';
import { Button, Box, Flex, Text } from '@chakra-ui/react';
import confetti from 'canvas-confetti';

function YesOrNo() {
  const colors = ['#9F7DCC', '#D7619C', '#A83939', '#BF9A9A'];
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '100%' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleYesClick = () => {
    confetti({
      particleCount: 300,
      spread: 150,
      origin: { y: 0.7 },
      colors,
      disableForReducedMotion: true,
    });
  };

  const handleNoHover = () => {
    moveNoButton();
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const moveNoButton = () => {
    const top = Math.floor(Math.random() * 80) + 10 + '%'; // Random position between 10% and 90%
    const left = Math.floor(Math.random() * 80) + 10 + '%'; // Random position between 10% and 90%
    setNoPosition({ top, left });
  };

  useEffect(() => {
    const noButton = document.getElementById('no-button');
    if (noButton) {
      const rect = noButton.getBoundingClientRect();
      const distance = Math.hypot(
        rect.left + rect.width / 2 - mousePosition.x,
        rect.top + rect.height / 2 - mousePosition.y
      );

      if (distance < 50) {
        moveNoButton();
      }
    }
  }, [mousePosition]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Box margin={'auto'} mt={'100px'} mb={'100px'} fontSize={'20px'}>
      <Flex
        margin={'auto'}
        width={'60%'}
        color={'white'}
        justifyContent={'space-between'}
        fontFamily={"'Cedarville Cursive', 'cursive'"}
        position="relative"
      >
        <Button
          bg={'#917BAF'}
          zIndex={1000} // Set a high z-index
          className="p-[15px] w-[40%] rounded-lg"
          onClick={handleYesClick}
        >
          Yes
        </Button>
        <Button
          id="no-button"
          className="p-[15px] w-[40%] rounded-lg"
          bg={'#F18686'}
          zIndex={1000} // Set a high z-index
          style={{
            position: 'absolute',
            top: noPosition.top,
            left: noPosition.left,
            transform: 'translate(-50%, -50%)',
          }}
          onMouseEnter={handleNoHover}
        >
          No
        </Button>
      </Flex>
      <Box marginLeft={'auto'} mt={'100px'} mb={'100px'} width={'50%'} marginRight={'50px'} maxWidth={'20rem'}>
        <Text textAlign={'end'} color={'#F18686'}>
          Just in case you have a special message for me... leave it down there.
        </Text>
      </Box>
      <Box
        width={'90%'}
        maxWidth={'40rem'}
        margin={'auto'}
        zIndex={1000} // Set a high z-index
        position={'relative'} // Ensure the z-index takes effect
      >
        <textarea
          id="multiline-input"
          rows="10"
          className="border-[1px] m-auto p-[7px] rounded-sm outline-none w-[100%] max-w-[40rem]"
          placeholder="Write anything,..."
          style={{
            zIndex: 1000,
            position: 'relative',
            fontFamily: "'Cedarville Cursive', 'cursive'", // Ensuring consistent font family
            fontSize: '20px', // Ensuring the font size is consistent
          }}
        ></textarea>
      </Box>
      <Box
        width={'fit-content'}
        marginLeft={'auto'}
        mt={'30px'}
        position={'relative'} // Ensure the z-index takes effect
        zIndex={1000} // Set a high z-index
      >
        <Button
          className="p-[7px] w-[5rem] rounded-sm mr-[60px]"
          bg={'#F18686'}
          color={'white'}
          style={{ zIndex: 1000, position: 'relative' }} // Ensure the button has the same high z-index
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default YesOrNo;
