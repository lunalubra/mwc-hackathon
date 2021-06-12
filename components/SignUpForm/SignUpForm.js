import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Button,
  Divider,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Checkbox,
  useToast,
  useDisclosure,
  SlideFade
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  ACCOUNT_TYPE_FORM,
  LOCATION_FORM,
  useForm
} from "../../hooks/formContext";
import { GoogleIcon } from "../../styles/theme";
import EmailInUseModal from "./EmailInUseModal";

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useToast();
  const { setFormState } = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      return toast({
        title: "Name is required.",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    } else if (email === "") {
      return toast({
        title: "Email is required.",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    } else if (
      !email.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
      )
    ) {
      return toast({
        title: "Wrong email.",
        description:
          "The email you entered is not well written, please try again",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    } else if (password === "") {
      return toast({
        title: "Password is required",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    } else if (window.localStorage.getItem("email") === email) {
      return onOpen(true);
    }
    window.localStorage.removeItem("email");
    window.localStorage.setItem("email", email);
    setFormState(LOCATION_FORM);
  };

  return (
    <>
      <EmailInUseModal isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Flex
        as={SlideFade}
        in={true}
        w="100%"
        padding={["10px", "30px", "60px"]}
        direction="column"
      >
        <Flex justifyContent="space-between">
          <Button
            leftIcon={<ChevronLeftIcon color="gray.400" boxSize={8} />}
            colorScheme="whiteAlpha"
            color="gray.400"
            onClick={() => setFormState(ACCOUNT_TYPE_FORM)}
          >
            Volver
          </Button>
          <Flex textAlign="end" direction="column">
            <Text opacity="0.4" fontSize="sm">
              PASO 01/03
            </Text>
            <Text color="gray.400" fontWeight="semibold">
              Personal Info.
            </Text>
          </Flex>
        </Flex>
        <Flex mx={["10px", "30px", "60px"]} my="auto" direction="column">
          <Text fontSize="3xl" fontWeight="bold">
            Registra tu cuenta individual
          </Text>
          <Text color="gray.400" fontSize="lg">
            Parar poder revisar que se trata de una cuenta real, necesitamos la
            siguiente información
          </Text>
          <Divider mt="10px" mb="20px" />
          <FormControl mb="20px" id="name">
            <FormLabel color="gray.600" fontWeight="semibold">
              Nombre completo*
            </FormLabel>
            <Input
              focusBorderColor="brand.100"
              type="text"
              size="lg"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl mb="20px" id="email">
            <FormLabel color="gray.600" fontWeight="semibold">
              Correo electrónico*
            </FormLabel>
            <Input
              focusBorderColor="brand.100"
              type="email"
              size="lg"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb="20px" id="password">
            <FormLabel color="gray.600" fontWeight="semibold">
              Contraseña*
            </FormLabel>
            <InputGroup size="lg">
              <Input
                focusBorderColor="brand.100"
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                size="lg"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="whiteAlpha"
                  color="gray.400"
                  onClick={() => setShow(!show)}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Checkbox defaultIsChecked colorScheme="green">
            Acepto los términos y condiciones
          </Checkbox>
          <Flex w="100%" mt="20px" wrap="wrap" justifyContent="space-between">
            <Button
              w="100%"
              mb="10px"
              bgColor="brand.100"
              color="white"
              fontWeight="md"
              _hover={{ opacity: "0.75" }}
              _active={{
                opacity: "0.75",
                transform: "scale(0.95)"
              }}
              onClick={handleSubmit}
            >
              Registrar cuenta
            </Button>
            <Button
              w="100%"
              aria-label="Continue whit google to register"
              backgroundColor="white"
              color="gray.900"
              variant="outline"
              fontWeight="medium"
              leftIcon={<GoogleIcon />}
              _hover={{ bg: "gray.100" }}
              _active={{
                bg: "gray.100",
                transform: "scale(0.95)"
              }}
              onClick={handleSubmit}
            >
              Continue with Google
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUpForm;
