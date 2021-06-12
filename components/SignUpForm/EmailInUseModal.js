import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";

const EmailInUseModal = ({ isOpen, onClose }) => {
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
          <ModalHeader>¡Ups, algo ha ido mal!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            Parece que el correo electrónico introducido ya está en uso. Por
            favor, revísalo y vuelve a intentarlo de nuevo
          </ModalBody>

          <ModalFooter justifyContent="flex-start">
            <Button
              size="lg"
              variant="outline"
              borderColor="blackAlpha"
              onClick={onClose}
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EmailInUseModal;
