import React, { useState } from 'react';
import { Box, Button, Image } from "@chakra-ui/react";
import  Play  from "../../assets/love images/play.svg";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <Box className=" border-[1px] p-[10px] pt-[25px] pb-[25px] w-[100%] ">
      <Box
        zIndex={10}
        className="relative overflow-hidden w-[92%] lg:w-[70%] h-[250px] lg:h-[400px] bg-cover bg-center bg-no-repeat rounded-lg  m-auto "
        style={{ backgroundColor: "#D5D5D5" }}
      >
        {!isPlaying && (
          <Button
            className="absolute inset-0 flex items-center justify-center w-full mt-[100px] lg:mt-[150px] bg-opacity-50"
            onClick={handlePlay}
          >
            <Image src={Play} className="m-auto  " />
          </Button>
        )}
        {isPlaying && (
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/020g-0hhCAU?si=7RzWxLwfljKl8Rf9"
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
