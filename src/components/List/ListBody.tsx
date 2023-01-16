import { AddIcon } from "@chakra-ui/icons";
import {
  TabPanel,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tfoot,
  Center,
  ButtonGroup,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { ListState } from "../../MainStore/Store";
import { ListBodyCompo } from "./ListBodyCompo";

interface ListCompoProps {
  Items: string[];
  key: number;
}

export const ListBody = ({ Items, key }: ListCompoProps) => {
  const [itemState, setItemState] = useState(Items);
  const [isAddInventoryName, setAddInventoryName] = useState(false);
  const [isDelInventoryName, setDelInventoryName] = useState(false);
  const [itemName, setItemName] = useState("");
  const [names, setNames] = useRecoilState<string[][]>(ListState);
  return (
    <>
      <TabPanel>
        <TableContainer>
          <Table>
            <Thead>
              <Tr backgroundColor="yellow.100">
                <Th fontSize="xl">品項</Th>
                <Th fontSize="xl">庫存</Th>
                <Th fontSize="xl">剩餘</Th>
              </Tr>
            </Thead>
            <Tbody>
              {itemState.map((item) => {
                return (
                  <>
                    <ListBodyCompo name={item} />
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Center className="py-4">
          <ButtonGroup>
            <Button
              leftIcon={<AddIcon />}
              width="3xl"
              colorScheme="gray"
              onClick={() => {
                setAddInventoryName(true);
              }}
            >
              新增品項
            </Button>
            <Button
              leftIcon={<AddIcon />}
              width="3xl"
              colorScheme="gray"
              onClick={() => {
                setDelInventoryName(true);
              }}
            >
              刪除品項
            </Button>
          </ButtonGroup>
        </Center>
      </TabPanel>
      <Modal isOpen={isAddInventoryName} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新增品項</ModalHeader>
          <ModalBody>
            <FormLabel>
              <Input
                placeholder="品項名稱"
                size="md"
                value={itemName}
                onChange={(e: any) => {
                  setItemName(e.target.value);
                }}
              />
            </FormLabel>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setItemState([...itemState, itemName]);
                setAddInventoryName(false);
                setItemName("");
                // setNames([...names[key], itemName])
              }}
            >
              確定
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setAddInventoryName(false);
              }}
            >
              取消
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isDelInventoryName} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>確定要刪除 {itemState[itemState.length-1]} ?</ModalHeader>
          <ModalCloseButton onClick={() => {setDelInventoryName(false)}} />
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {
              setDelInventoryName(false)
              setItemState([...itemState])
            }}>
              確定
            </Button>
            <Button variant="ghost">取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
