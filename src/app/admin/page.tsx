import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = { title: "Admin — JDHub", robots: { index: false } };

export default function AdminPage() {
  return (
    <InfoPage eyebrow="Admin" title="Admin dashboard">
      <p>
        The admin area isn&apos;t set up yet. Stock, prices, and services are currently managed in{" "}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-sm text-ink">
          src/lib/data.ts
        </code>
        .
      </p>
    </InfoPage>
  );
}
