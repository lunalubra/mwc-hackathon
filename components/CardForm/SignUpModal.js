import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

const SignUpModal = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>¡Todo guay!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>Tu cuenta se ha creado correctamente</ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button
              w="30%"
              size="lg"
              variant="outline"
              borderColor="blackAlpha"
              onClick={onClose}
            >
              Cerrar
            </Button>
            <Button
              as="a"
              w="67%"
              size="lg"
              color="white"
              bgColor="black"
              onClick={onClose}
              href="https://nuwe.io"
              target="_blank"
            >
              Vamos para Nuwe
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUpModal;
