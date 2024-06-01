// import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { reasons } from '../../utils/cards'
import Reviews from './cardsReview'



function Review() {
  return (
    <Box
    backgroundColor={'white'}
    >     
    <Box
    display="flex"
    mt={{ base: "15", md: "5" }}
    gap="5"
    className=' text-[#9A9696] scroll overflow-x-auto  mt-[15px] p-[10px] rounded-lg'
    >
       {reasons.map((details) => (
                <Reviews key={details.index} data={details}/>
              ))}
    </Box>
    </Box>
  )
}

export default Review
