import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { IoMail } from "react-icons/io5";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import React from "react";
import { FaUserAlt } from "react-icons/fa";


type BackdropType = "opaque" | "blur" | "transparent";

export default function Registration() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [backdrop, setBackdrop] = React.useState<BackdropType>("blur");
  const [isVisible, setIsVisible] = React.useState(false);

  const handleOpen = (backdrop: BackdropType) => {
    setBackdrop(backdrop);
    onOpen();
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <Button onPress={() => handleOpen("blur")}>Sign up</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop={backdrop}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Sign up to create account</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <FaUserAlt className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Name"
                  placeholder="Enter your name"
                  variant="bordered"
                  isInvalid={true}
                  errorMessage="Please enter a valid name."
                />
                <Input
                  autoFocus
                  endContent={
                    <IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                  isInvalid={true}
                  errorMessage="Please enter a valid email address."
                />
                <Input
                  label="Password"
                  variant="bordered"
                  placeholder="Enter your password"
                  isInvalid={true}
                  errorMessage="Please enter a valid password."
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <MdVisibility className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <MdVisibilityOff className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
                <Input
                  autoFocus
                  endContent={
                    <IoMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  variant="bordered"
                  isInvalid={true}
                  errorMessage="Please enter a valid phone number."
                />
                <div className="flex py-2 px-1 justify-between">
                  <p>Already have an account? </p>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className="w-full" onPress={onClose}>
                  Sign up
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
