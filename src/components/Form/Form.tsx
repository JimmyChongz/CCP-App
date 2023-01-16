import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { InventoryClassificationState, ListState } from "../../MainStore/Store";
import { FromBody } from "./FormBody";

export const From = () => {
  const [names, setNames] = useRecoilState<string[][]>(ListState);
  const [InventoryName, setInventoryName] = useRecoilState<string[]>(
    InventoryClassificationState
  );
  return (
    <>
      <Tabs variant="unstyled">
        <TabList className="gap-2">
          {InventoryName.map((name) => {
            return (
              <>
                <Tab
                  _selected={{ color: "white", bg: "blue.500" }}
                  rounded={10}
                >
                  {name}
                </Tab>
              </>
            );
          })}
        </TabList>
        <TabPanels>
          {names.map((names) => {
            return (
              <>
                <TabPanel>
                  <Tabs variant="soft-rounded" colorScheme="green">
                    <TabList>
                      {names.map((name) => {
                        return (
                          <>
                            <Tab>{name}</Tab>
                          </>
                        );
                      })}
                    </TabList>
                    <TabPanels>
                      {names.map(() => {
                        return (
                          <>
                            <FromBody />
                          </>
                        );
                      })}
                    </TabPanels>
                  </Tabs>
                </TabPanel>
              </>
            );
          })}
        </TabPanels>
      </Tabs>
    </>
  );
};
