import { AddIcon } from "@chakra-ui/icons";
import {
  Tab,
  TabList,
  TabPanels,
  Tabs,
  Button,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { InventoryClassificationState, ListState } from "../../MainStore/Store";
import { ListBody } from "./ListBody";

export const Lists = () => {
  const [names, setNames] = useRecoilState<string[][]>(ListState);
  const [InventoryName, setInventoryName] = useRecoilState<string[]>(
    InventoryClassificationState
  );
  const [isOpen, setOpen] = useState(false);
  const [className, setClassName] = useState("");
  const [itemName, setItemName] = useState("");

  return (
    <>
      <Tabs variant="unstyled">
        <TabList className="gap-2">
          {InventoryName.map((name) => {
            return (
              <Tab _selected={{ color: "white", bg: "blue.500" }} rounded={10}>
                {name}
              </Tab>
            );
          })}
          <Button
            size="md"
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              setOpen(true);
            }}
          >
            新增
          </Button>
        </TabList>
        <TabPanels>
          {names.map((item, index) => {
            return (
              <>
                <ListBody Items={item} key={index} />
              </>
            );
          })}
        </TabPanels>
      </Tabs>
      <Modal isOpen={isOpen} onClose={() => {}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>新增庫存類別</ModalHeader>
          <ModalBody>
            <FormLabel>
              <Stack spacing='4'>
                <Input
                  placeholder="分類名稱"
                  size="md"
                  value={className}
                  isInvalid={!className}
                  onChange={(e: any) => {
                    setClassName(e.target.value);
                  }}
                />
                <Input
                  placeholder="至少新增一個品項"
                  size="md"
                  value={itemName}
                  isInvalid={!itemName}
                  onChange={(e: any) => {
                    setItemName(e.target.value);
                  }}
                />
              </Stack>
            </FormLabel>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                setInventoryName([...InventoryName, className]);
                setNames([...names, [itemName]]);
                setOpen(false);
                setClassName("");
                setItemName("");
              }}
              disabled={!className || !itemName }
            >
              確定
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                setOpen(false);
              }}
            >
              取消
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
