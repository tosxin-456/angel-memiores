import React, { useState } from 'react';
import fall from '../../assets/love images/Will you be.svg';
import { Image, Box, Grid } from '@chakra-ui/react';
import '../../css/heart.css'

function WillyouBe() {
  const [circles, setCircles] = useState(Array(100).fill(true));

  const handleCircleEvent = (index) => {
    setCircles(circles.map((circle, i) => (i === index ? false : circle)));
  };

  return (
    <Box position="relative" marginTop="70px" width="100%" height="100vh" id="container">
      <Image width="100%" height="auto" src={fall} />
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(5, 1fr)"
        position="absolute"
        top="0"
        left="0"
        width="50%"
        height="100%"
        gap="0"
        zIndex="2"
      >
        {circles.map((visible, index) =>
          visible ? (
            <Box
              id="heart"
              key={index}
              onClick={() => handleCircleEvent(index)}
              onMouseEnter={() => handleCircleEvent(index)}
            />
          ) : (
            <Box key={index} />
          )
        )}
      </Grid>

    </Box>
  );
}

export default WillyouBe;
