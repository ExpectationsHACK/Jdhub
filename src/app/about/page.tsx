import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = { title: "About — JDHub" };

export default function AboutPage() {
  return (
    <InfoPage eyebrow="About" title="A straight path to your next iPhone.">
      <p>
        JDHub is where people buy, sell, and swap iPhones. Every device is inspected and graded
        the same way before it moves, so offers stay fair on both sides.
      </p>
      <p>
        Sell for a locked cash offer, buy certified pre-owned phones with a 12-month warranty, or
        swap your current phone and pay only the difference.
      </p>
    </InfoPage>
  );
}
