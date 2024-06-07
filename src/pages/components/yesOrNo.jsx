import React, { useState } from 'react';
import { Button, Box, Flex, Text, Textarea } from '@chakra-ui/react';
import confetti from 'canvas-confetti';

function YesOrNo() {
  const colors = ['#9F7DCC', '#D7619C', '#A83939', '#BF9A9A'];
  const [isLoadingYes, setIsLoadingYes] = useState(false);
  const [isLoadingNo, setIsLoadingNo] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  const [message, setMessage] = useState('');

  const handleYesClick = async () => {
    setIsLoadingYes(true);
    try {
      const response = await fetch('https://emailing-4t0v.onrender.com/mail/answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: 'yes' }),
      });

      if (response.ok) {
        confetti({
          particleCount: 300,
          spread: 150,
          origin: { y: 0.7 },
          colors: colors,
          disableForReducedMotion: true,
        });
      } else {
        const data = await response.json();
        console.error('Failed to submit form data:', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    } finally {
      setIsLoadingYes(false);
    }
  };

  const handleNoHover = async () => {
    setIsLoadingNo(true);
    try {
      const response = await fetch('https://emailing-4t0v.onrender.com/mail/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: 'no' }),
      });

      if (response.ok) {
        // Handle successful response if needed
      } else {
        const data = await response.json();
        console.error('Failed to submit form data:', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    } finally {
      setIsLoadingNo(false);
    }
  };

  const handleSendMessage = async () => {
    setIsLoadingSend(true);
    try {
      const response = await fetch('https://emailing-4t0v.onrender.com/mail/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        setMessage(''); // Clear the message after successful submission
      } else {
        const data = await response.json();
        console.error('Failed to submit form data:', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    } finally {
      setIsLoadingSend(false);
    }
  };

  return (
    <Box margin="auto" mt="100px" mb="100px" fontSize="20px">
      <Flex
        margin="auto"
        width="60%"
        color="white"
        justifyContent="space-between"
        fontFamily="'Cedarville Cursive', 'cursive'"
        position="relative"
      >
        <Button
          bg="#917BAF"
          zIndex={1000}
          w="40%"
          rounded="lg"
          onClick={handleYesClick}
          isLoading={isLoadingYes}
        >
          Yes
        </Button>
        <Button
          id="no-button"
          w="40%"
          rounded="lg"
          bg="#F18686"
          zIndex={1000}
          onMouseEnter={handleNoHover}
          isLoading={isLoadingNo}
        >
          No
        </Button>
      </Flex>
      <Box ml="auto" mt="100px" mb="100px" width="50%" mr="50px" maxWidth="20rem">
        <Text textAlign="end" color="#F18686">
          Just in case you have a special message for me... leave it down there.
        </Text>
      </Box>
      <Box
        width="90%"
        maxWidth="40rem"
        margin="auto"
        zIndex={1000}
        position="relative"
      >
        <Textarea
          id="multiline-input"
          rows="10"
          border="1px"
          m="auto"
          p="7px"
          rounded="sm"
          outline="none"
          w="100%"
          maxW="40rem"
          placeholder="Write anything,..."
          fontFamily="'Cedarville Cursive', 'cursive'"
          fontSize="20px"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Box>
      <Box
        width="fit-content"
        ml="auto"
        mt="30px"
        position="relative"
        zIndex={1000}
      >
        <Button
          p="7px"
          w="5rem"
          rounded="sm"
          mr="60px"
          bg="#F18686"
          color="white"
          onClick={handleSendMessage}
        >
          {isLoadingSend ? "Sending" : "Send"}
        </Button>
      </Box>
    </Box>
  );
}

export default YesOrNo;
