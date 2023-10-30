import { Avatar, Card, Flex, IconButton, Text } from "@radix-ui/themes";
import { IconLogout } from "@tabler/icons-react";

import { auth, signOut } from "@kopenkinda/auth";

export const Header = async () => {
  const session = await auth();
  return (
    <Card>
      <Flex align="center">
        <Text weight="medium" size="4">
          smartdesk
        </Text>
        {session && (
          <Flex ml="auto" gap="1" align="center">
            <Avatar
              src={session.user.image ?? ""}
              fallback={<>{session.user.name?.slice(0, 2)}</>}
              size="2"
            />
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <IconButton color="red">
                <IconLogout stroke={1} />
              </IconButton>
            </form>
          </Flex>
        )}
      </Flex>
    </Card>
  );
};
