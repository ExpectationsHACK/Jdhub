import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { contact } from "@/lib/data";

export const metadata: Metadata = { title: "Warranty terms — JDHub" };

export default function WarrantyPage() {
  return (
    <InfoPage eyebrow="Warranty terms" title="12 months of cover on every unit.">
      <p>
        Every certified pre-owned iPhone sold by JDHub comes with a 12-month warranty from the date
        of purchase, covering hardware faults that occur under normal use.
      </p>
      <h2>What&apos;s not covered</h2>
      <p>Accidental damage, liquid damage, and repairs carried out by third parties.</p>
      <h2>Making a claim</h2>
      <p>
        Contact us at {contact.email} or {contact.phoneDisplay} with your order details and a
        description of the fault.
      </p>
    </InfoPage>
  );
}
