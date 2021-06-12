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
  useToast,
  useDisclosure,
  SlideFade
} from "@chakra-ui/react";
import { LOCATION_FORM, useForm } from "../../hooks/formContext";
import { LockIcon } from "@chakra-ui/icons";
import SignUpModal from "./SignUpModal";

const CardForm = () => {
  const [card, setCard] = useState("");
  const [secretCode, setSecretCode] = useState("");
  const { setFormState } = useForm();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (card === "") {
      return toast({
        title: "Card number is required.",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    } else if (secretCode === "") {
      return toast({
        title: "Secret code number is required.",
        status: "error",
        duration: 4000,
        isClosable: true
      });
    }
    return onOpen(true);
  };

  return (
    <>
      <SignUpModal isOpen={isOpen} onClose={onClose} />
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
            onClick={() => setFormState(LOCATION_FORM)}
          >
            Volver
          </Button>
          <Flex textAlign="end" direction="column">
            <Text opacity="0.4" fontSize="sm">
              PASO 03/03
            </Text>
            <Text color="gray.400" fontWeight="semibold">
              Localización
            </Text>
          </Flex>
        </Flex>
        <Flex mx={["10px", "30px", "60px"]} my="auto" direction="column">
          <Text fontSize="3xl" fontWeight="bold">
            Verifica tu perfil
          </Text>
          <Text color="gray.400" fontSize="lg">
            Parar poder revisar que se trata de una cuenta real, necesitamos la
            siguiente información
          </Text>
          <Divider mt="10px" mb="20px" />
          <FormControl mb="20px" id="name">
            <FormLabel color="gray.600" fontWeight="semibold">
              Número de tarjeta
            </FormLabel>
            <InputGroup>
              <Input
                type="tel"
                placeholder="card number"
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
            </InputGroup>
          </FormControl>
          <FormControl mb="20px" id="email">
            <FormLabel color="gray.600" fontWeight="semibold">
              Código secreto
            </FormLabel>
            <Input
              focusBorderColor="brand.100"
              type="text"
              size="lg"
              placeholder="secret code"
              value={secretCode}
              onChange={(e) => setSecretCode(e.target.value)}
            />
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
            Crear cuenta
          </Button>
          <Flex mx="auto" mt="10px" alignItems="center">
            <LockIcon mr="10px" color="gray.400" />
            <Text color="gray.400">Tu información es segura</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default CardForm;
