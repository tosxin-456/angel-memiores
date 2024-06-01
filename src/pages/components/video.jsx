import React, { useState } from 'react';
import { Box, Button, Image } from "@chakra-ui/react";
import  Play  from "../../assets/love images/play.svg";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Box
    className='m-[50px]'
    >
    <Box 
      className="relative overflow-hidden w-[95%] h-[400px] bg-cover bg-center bg-no-repeat  m-auto " 
      style={{ backgroundColor: '#D5D5D5' }}
    >
      {!isPlaying && (
        <Button
          className="absolute inset-0 flex items-center justify-center w-full mt-[150px] bg-opacity-50"
          onClick={handlePlay}
        >
          <Image src={Play} className='m-auto  ' />
        </Button>
      )}
      {isPlaying && (
        <iframe
          className="absolute inset-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/CAQd3ujMJ20?autoplay=1&si=w-2LhmyZR-57ocQ_"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
    </Box>
    </Box>
  );
};

export default Video;
