import { Box, Flex } from "@radix-ui/themes";

import { auth } from "@sellgenix/auth";

import { Footer } from "./layout/footer";
import { Header } from "./layout/header";
import { LoginLayout } from "./layout/login-layout";

export default async function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <Flex
      p="2"
      gap="4"
      width="100%"
      direction="column"
      className="min-h-screen"
    >
      <Header />
      <Box asChild width="100%" height="100%">
        <main>{session === null ? <LoginLayout /> : props.children}</main>
      </Box>
      <Footer />
    </Flex>
  );
}
