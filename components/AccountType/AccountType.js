import { Flex, SlideFade, Text } from "@chakra-ui/react";
import React from "react";
import { FiBriefcase, FiUser } from "react-icons/fi";
import { SIGNUP_FORM, useForm } from "../../hooks/formContext";
import TypeCard from "./TypeCard";

const data = [
  {
    icon: FiUser,
    title: "Developers",
    description: "Cuenta personal para entrar en el mundo dev"
  },
  {
    icon: FiBriefcase,
    title: "Business",
    description: "Tienes o perteneces a una compañia"
  }
];

const AccountType = () => {
  const { setFormState } = useForm();

  return (
    <Flex
      as={SlideFade}
      in={true}
      w="100%"
      my={["auto", "auto", "auto", "0"]}
      padding="60px"
      direction={[
        "column-reverse",
        "column-reverse",
        "column-reverse",
        "column"
      ]}
      alignItems={["center", "center", "center", "none"]}
    >
      <Flex
        mt={["20px", "20px", "20px", "none"]}
        alignSelf={["none", "none", "none", "flex-end"]}
      >
        <Text color="gray.400">
          Ya tienes cuenta?{" "}
          <Text as="span" color="brand.100">
            Inicia sesión
          </Text>
        </Text>
      </Flex>
      <Flex
        my={["0", "0", "0", "auto"]}
        direction="column"
        alignItems="flex-start"
      >
        <Text fontSize="3xl" fontWeight="bold">
          ¡Únete a la comunidad!
        </Text>
        <Text color="gray.400" fontSize="lg">
          Para empezar, dinos que cuenta te gustaría abrir.
        </Text>
        {data.map((props) => (
          <TypeCard
            key={props.title}
            {...props}
            onClick={() => setFormState(SIGNUP_FORM)}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default AccountType;
