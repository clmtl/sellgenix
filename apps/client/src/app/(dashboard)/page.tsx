"use client";

import { Button } from "@radix-ui/themes";
import { IconLoadBalancer, IconLoader } from "@tabler/icons-react";

import { api } from "~/utils/api/react";

const AnalyticsTest = () => {
  const { mutate, isPending } = api.post.testAnalytics.useMutation();
  return (
    <Button onClick={() => mutate()} disabled={isPending}>
      {isPending && <IconLoader stroke={1.5} className="animate-spin" />}
      Send analytics event
    </Button>
  );
};

export default function HomePage() {
  return (
    <>
      <AnalyticsTest />
    </>
  );
}
