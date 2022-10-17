import { Frame, Box } from "@shopify/polaris";
import { useState } from "react";
import { GridViewShips } from "./components/grid-view-ships";
import { Header, HeaderProps } from "./components/header";
import { ListViewShips } from "./components/list-view-ships";

function App() {
  const [viewType, setViewType] = useState<HeaderProps["appViewType"]>("list");
  return (
    <Frame
      topBar={
        <Header appViewType={viewType} onAppViewTypeChange={setViewType} />
      }
    >
      <Box padding="20">
        {viewType == "gallery" ? <GridViewShips /> : <ListViewShips />}
      </Box>
    </Frame>
  );
}

export default App;

// have a state
/* create a header
    - viewType
    - onViewChange

*/
