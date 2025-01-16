"use client";

import { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Cookies from "js-cookie";

export const CookieConsent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    if (!consent) {
      onOpen();
    }
  }, [onOpen]);

  const handleConsent = (choice: "accepted" | "rejected"): void => {
    Cookies.set("cookie_consent", choice, { expires: 365 });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} size="md" closeButton={false}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Cookies</ModalHeader>
        <ModalBody>
          <p>
            We use cookies to improve your experience. By using abat plus, you
            agree to our use of cookies.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="success" variant="flat" onPress={() => handleConsent("accepted")}>
            Accept
          </Button>
          <Button color="danger" variant="flat" onPress={() => handleConsent("rejected")}>
            Reject
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
