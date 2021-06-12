import React, { useState } from "react";
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
  InputLeftAddon,
  Select,
  useToast,
  SlideFade
} from "@chakra-ui/react";
import { CARD_FORM, SIGNUP_FORM, useForm } from "../../hooks/formContext";
import { LockIcon } from "@chakra-ui/icons";

const LocationForm = () => {
  const { setFormState } = useForm();
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (number === "") {
      return toast({
        title: "Number is required",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    } else if (address === "") {
      return toast({
        title: "Address is required",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    }
    setFormState(CARD_FORM);
  };

  return (
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
          onClick={() => setFormState(SIGNUP_FORM)}
        >
          Volver
        </Button>
        <Flex textAlign="end" direction="column">
          <Text opacity="0.4" fontSize="sm">
            PASO 02/03
          </Text>
          <Text color="gray.400" fontWeight="semibold">
            Localización
          </Text>
        </Flex>
      </Flex>
      <Flex mx={["10px", "30px", "60px"]} my="auto" direction="column">
        <Text fontSize="3xl" fontWeight="bold">
          Complete Your Profile!
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
          <InputGroup>
            <InputLeftAddon children="+234" />
            <Input
              type="tel"
              placeholder="phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </InputGroup>
        </FormControl>
        <FormControl mb="20px" id="email">
          <FormLabel color="gray.600" fontWeight="semibold">
            Dirección
          </FormLabel>
          <Input
            focusBorderColor="brand.100"
            type="text"
            size="lg"
            placeholder="Introduce la dirección completa"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>
        <FormControl mb="20px" id="password">
          <FormLabel color="gray.600" fontWeight="semibold">
            País de residencia
          </FormLabel>
          <Select placeholder="Selecciona uno">
            <option value="option1">España</option>
            <option value="option2">Korea</option>
            <option value="option3">Rusia</option>
          </Select>
        </FormControl>
        <Button
          w="100%"
          my="10px"
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
          Guardar y continuar
        </Button>
        <Flex mx="auto" mt="10px" alignItems="center">
          <LockIcon mr="10px" color="gray.400" />
          <Text color="gray.400">Tu información es segura</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LocationForm;
