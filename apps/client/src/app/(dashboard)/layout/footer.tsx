import { Card, Text } from "@radix-ui/themes";

export const Footer = () => {
  const today = new Date();
  return (
    <Card mt="auto">
      <Text>Copyright &copy; {today.getFullYear()}</Text>
    </Card>
  );
};
