import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Axios from 'axios';
import { Form, Formik } from 'formik';
import { API} from "@/Config";
import { useNavigate } from "react-router-dom"
export default function Rigster() {
  const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate()
const [name, setName] = useState('');
  const [password, setPassword] = useState('');
	 const [age, setAge] = useState('');
	 const [gender, setGender] = useState('');
	
console.log(name, age, gender, password)
const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post(API+'/updateOrCreate', {
        name,
        password,
				gender,
				age
      });
console.log(data)

      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/home');
    } catch (err) {
			console.log(err)
     // toast.error(getError(err));
    }
  };
	
  return (
		<Formik>
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
			<Form onSubmit={submitHandler}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
								
                <FormControl id="firstName" isRequired>
                  <FormLabel>
									 Name
									</FormLabel>
    <Input type="text" onChange={(e) => setName(e.target.value)}/>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel> Age </FormLabel>
                  <Input type="text" onChange={(e) => setAge(e.target.value)}/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Gender</FormLabel>
              <Input type="text" onChange={(e) => setGender(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                type= "submit" loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
						
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
		</Form>
    </Flex>
		</Formik>
  );
						}