import { TopBar, ButtonGroup, Button, Box } from "@shopify/polaris";
import { useCallback } from "react";

type AppViewType = "gallery" | "list";
export type HeaderProps = {
  appViewType: AppViewType;
  onAppViewTypeChange: (appViewType: AppViewType) => void;
};

export const Header = ({ appViewType, onAppViewTypeChange }: HeaderProps) => {
  // have a button group and use the props to disable it.

  const clickHandler = useCallback(
    (viewSelectionType: AppViewType) => {
      if (viewSelectionType !== appViewType) {
        onAppViewTypeChange(viewSelectionType);
      }
    },
    [appViewType]
  );

  return (
    <TopBar
      showNavigationToggle={false}
      userMenu={
        <Box paddingRight="5">
          <ButtonGroup segmented>
            <Button
              disabled={appViewType == "gallery"}
              onClick={() => clickHandler("gallery")}
            >
              Gallery View
            </Button>
            <Button
              disabled={appViewType == "list"}
              onClick={() => clickHandler("list")}
            >
              List View
            </Button>
          </ButtonGroup>
        </Box>
      }
    />
  );
};
