import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Input,
  ChakraProvider,
  ButtonGroup,
  Stack,
  Image,
  Divider,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { NavBar } from "../components/NavBar";
import { userState } from "../MainStore/Store";

export const LoginPage = () => {
  const nevigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <>
      <ChakraProvider>
        <NavBar />
        <Center>
          <Card maxW="2xl" align="center">
            <CardBody>
              <Heading className="text-center" size="xl">
                CCP APP
              </Heading>
              <Divider />
              <Stack mt="6" spacing="3">
                <Text className="text-center">請輸入您的ERP帳號</Text>
                <Input
                  placeholder={t('USER ID').toString()}
                  value={value}
                  onChange={(e: any) => {
                    setValue(e.target.value);
                  }}
                />
                <Input placeholder={t('Password').toString()} />
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                colorScheme="blue"
                onClick={() => {
                  if (value === "") {
                    setAlert(true);
                  } else {
                    setUser(value);
                    nevigate("/home");
                  }
                }}
              >
                {t('Login')}
              </Button>
            </CardFooter>
          </Card>
        </Center>
        <Modal isOpen={alert} onClose={() => {}}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>錯誤 !</ModalHeader>
            <ModalBody>員工編號不可為空。</ModalBody>
            <ModalFooter>
              <Button
                colorScheme='gray'
                onClick={() => {
                  setAlert(false);
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraProvider>
    </>
  );
};
