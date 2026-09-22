import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { contact } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy — JDHub" };

export default function PrivacyPage() {
  return (
    <InfoPage eyebrow="Privacy" title="Your data, handled plainly.">
      <p>
        We only collect what we need to value, buy, sell, or repair your device — such as your
        contact details and the device information you give us.
      </p>
      <p>
        Every device we receive is fully wiped before it is resold. We never sell your personal
        information.
      </p>
      <p>Questions? Email {contact.email}.</p>
    </InfoPage>
  );
}
