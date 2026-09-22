import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { stock } from "@/lib/data";

export const metadata: Metadata = { title: "Photo credits — JDHub" };

export default function CreditsPage() {
  return (
    <InfoPage eyebrow="Photo credits" title="Product photos">
      <p>
        Product photos are sourced from Wikimedia Commons and used under Creative Commons
        licenses.
      </p>
      <ul className="divide-y divide-line border-y border-line">
        {stock.map(({ model, photo }) => (
          <li key={model} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3 text-sm">
            <span className="font-semibold text-ink">{model}</span>
            <span>
              <a href={photo.source} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">
                Photo
              </a>{" "}
              by {photo.author},{" "}
              <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ink">
                {photo.license}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </InfoPage>
  );
}
