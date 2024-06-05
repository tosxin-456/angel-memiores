import React from 'react';
import confetti from 'canvas-confetti';
import { Button, Box, Grid, Text, Textarea } from '@chakra-ui/react';

function Yes() {
  const colors = ['#FF0000', '#00FF00'];

  const handleYesClick = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      disableForReducedMotion: true
    });
  };

  return (
    <Box
      margin="auto"
      mt="100px"
      mb="100px"
      fontSize="20px"
    >
      <Grid
        margin="auto"
        width="60%"
        color="white"
        templateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        gap={4}
        fontFamily="'Cedarville Cursive', 'cursive'"
      >
        <Button
          bg="#917BAF"
          zIndex={1000}
          padding="15px"
          borderRadius="lg"
          onClick={handleYesClick}
        >
          Yes
        </Button>
        <Button
          bg="#F18686"
          zIndex={1000}
          padding="15px"
          borderRadius="lg"
        >
          No
        </Button>
      </Grid>
      <Box
        marginLeft="auto"
        mt="100px"
        mb="100px"
        width="50%"
        marginRight="50px"
        maxWidth="20rem"
      >
        <Text
          textAlign="end"
          color="#F18686"
        >
          Just in case you have a special message for me... leave it down there.
        </Text>
      </Box>
      <Box
        width="fit-content"
        margin="auto"
        zIndex={1000}
        position="relative"
      >
        <Textarea
          id="multiline-input"
          rows="10"
          placeholder="Write something sweet..."
          border="1px"
          padding="7px"
          borderRadius="sm"
          outline="none"
          fontFamily="'Cedarville Cursive', 'cursive'"
          fontSize="20px"
          style={{ 
            zIndex: 1000, 
            position: 'relative' 
          }}
        />
      </Box>
      <Box
        width="fit-content"
        marginLeft="auto"
        mt="30px"
        position="relative"
        zIndex={1000}
      >
        <Button
          padding="7px"
          width="5rem"
          borderRadius="sm"
          marginRight="60px"
          bg="#F18686"
          color="white"
          style={{ zIndex: 1000, position: 'relative' }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}

export default Yes;
