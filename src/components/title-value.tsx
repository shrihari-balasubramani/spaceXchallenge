import { Text, TextStyle } from "@shopify/polaris";
export type TitleValueProps = {
  title: string;
  value: string;
};

export const TitleValue = ({ title, value }: TitleValueProps) => {
  return (
    <Text as="p" variant="headingSm">
      {title}:&nbsp;
      <TextStyle variation="subdued">{value}</TextStyle>
    </Text>
  );
};
