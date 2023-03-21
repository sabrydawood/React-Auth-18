import { Link, useRouteError } from "react-router-dom";

import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function NotFound() {
	  const error = useRouteError();
 // console.error(error);

  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page {error.statusText || error.message}
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
<Link to= "/home" >
      <Button as = "p"
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
	</Link>
    </Box>
  );
			}