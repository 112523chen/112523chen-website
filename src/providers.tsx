"use client";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

// Get the PostHog key from the environment

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

if (!key) {
  throw new Error("PostHog key is not set");
}

if (!host) {
  throw new Error("PostHog host is not set");
}

if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
  posthog.init(key, {
    api_host: host,
    capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  });
}

export function PHProvider({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
