import { AddIcon } from "@chakra-ui/icons";
import {
  TabPanel,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Stack,
  Select,
  FormLabel,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface itemsProps {
  date: string;
  name: string;
  department: string;
  demand: number;
}

export const FromBody = () => {
  const [isOpen, setOpen] = useState(false);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [demand, setDemand] = useState(1);
  const [items, setItems] = useState<itemsProps[]>([]);

  useEffect(() => {
    setDate(date);
  }, [date]);

  return (
    <>
      <TabPanel>
        <div className="pb-4">
          <Button
            size="md"
            leftIcon={<AddIcon />}
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              setOpen(true);
            }}
          >
            新增表單
          </Button>
        </div>
        <Table variant="simple">
          <Thead>
            <Tr backgroundColor="yellow.100">
              <Th fontSize="xl">日期</Th>
              <Th fontSize="xl">需求人</Th>
              <Th fontSize="xl">部門別</Th>
              <Th fontSize="xl">需求量</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item) => {
              return (
                <>
                  <Tr>
                    <Td>{item.date}</Td>
                    <Td>{item.name}</Td>
                    <Td>{item.department}</Td>
                    <Td>{item.demand}</Td>
                  </Tr>
                </>
              );
            })}
          </Tbody>
        </Table>
        <Modal isOpen={isOpen} onClose={() => {}}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>請填寫以下表單</ModalHeader>
            <ModalBody>
              <FormLabel>
                <Stack spacing={4}>
                  <Input
                    placeholder="Select Date"
                    size="md"
                    type="date"
                    value={date}
                    onChange={(e: any) => {
                      setDate(e.target.value);
                    }}
                    isInvalid={!date}
                  />
                  <Input
                    placeholder="需求人"
                    size="md"
                    name="name"
                    value={name}
                    onChange={(e: any) => {
                      setName(e.target.value);
                    }}
                    isInvalid={!name}
                  />
                  <Select
                    placeholder="部門別"
                    value={department}
                    onChange={(e: any) => {
                      setDepartment(e.target.value);
                    }}
                    isInvalid={!department}
                  >
                    <option value="GA">GA</option>
                    <option value="SE">SE</option>
                    <option value="UT">UT</option>
                    <option value="EL">EL</option>
                    <option value="QA">QA</option>
                    <option value="RD">RD</option>
                    <option value="MT">MT</option>
                    <option value="EC">EC</option>
                    <option value="P1">P1</option>
                    <option value="P2">P2</option>
                    <option value="P5">P5</option>
                    <option value="P7">P7</option>
                    <option value="P9">P9</option>
                  </Select>
                  <Input
                    placeholder="需求量"
                    size="md"
                    value={demand}
                    onChange={(e: any) => {
                      setDemand(e.target.value);
                    }}
                    isInvalid={!demand}
                  />
                </Stack>
              </FormLabel>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => {
                  setOpen(false);
                  setItems([
                    ...items,
                    {
                      date: date,
                      name: name,
                      department: department,
                      demand: demand,
                    },
                  ]);
                }}
                disabled={!demand || !name || !date || !department}
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
      </TabPanel>
    </>
  );
};