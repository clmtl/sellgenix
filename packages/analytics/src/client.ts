import { env } from "@sellgenix/env";
import { PostHog } from "posthog-node";

import type { Events } from "./events";

export const analytics = {
  track<T extends keyof Events>(
    key: T,
    payload: {
      distinctId: string;
      properties: Events[T];
    },
  ) {
    const client = new PostHog(env.POSTHOG_API_KEY, {
      flushAt: 1,
      flushInterval: 0,
    });
    client.debug(true);
    client.capture({
      distinctId: payload.distinctId,
      event: key,
      properties: payload.properties,
    });
    client.shutdown();
  },
};
