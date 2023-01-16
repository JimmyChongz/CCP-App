import "./App.css";
import "./index.css";
import {
  ChakraProvider,
  List,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { Lists } from "./components/List/ListHead";
import { From } from "./components/Form/Form";

export const App = () => {
  return (
    <ChakraProvider>
      <NavBar />
      <Tabs variant="enclosed">
        <TabList>
          <Tab>庫存總覽</Tab>
          <Tab>需求明細表</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Lists />
          </TabPanel>
          <TabPanel>
            <From />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
}
