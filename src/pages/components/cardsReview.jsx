import { Avatar } from "@chakra-ui/avatar";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { StarIcon } from "@chakra-ui/icons";





const Reviews = ({ data }) => {
  return (
    <Card 
    backgroundColor={'rgba(228, 157, 157, 0.37)'}
    textAlign="start" maxW="lg" p="1.5em" minW="24em" className=" rounded-sm" >
          <CardHeader 
          width={'100%'}
          >
           <Text  className="text-center text-[23px]
           " >
            {data.title}
            </Text>
        </CardHeader>
        <CardBody
        className="m-[10px]"
        >
         <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      className=" w-fit h-[190px]"
    >
      <Text 
        fontFamily='"Satoshi", "sans-serif"'
        className="text-center text-[21px]  w-[95%] m-auto"
      >
        {data.msg}
      </Text>
       </Box>
      </CardBody>
      <CardFooter>
        <Box width={'10'}  gap={1}
        //   mt={'auto'}
        borderRadius={"50%"}
        justifyContent={'center'}
        className="bg-[#7B7B7B] w-[35px] p-[4px] h-[35px] ml-auto "
        >
          <Text
          color={'rgba(228, 157, 157, 1)'}
          bottom={0}
          position={'relative'}
          className="font-semibold text-[18px] text-center m-auto ">{data.id}</Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default Reviews;
