"use client";

import { useState } from "react";
import { estimateOffer, formatNaira, grades, models, whatsappLink, type Grade } from "@/lib/data";

const fieldClass =
  "w-full rounded-lg border border-line bg-white px-3 py-2.5 pr-9 text-[15px] text-ink outline-none transition focus:border-ink";
const labelClass = "mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted";

export default function EstimateCard() {
  const [model, setModel] = useState("iPhone 15 Pro");
  const [storage, setStorage] = useState("128GB");
  const [grade, setGrade] = useState<Grade>("A");

  const current = models.find((m) => m.name === model)!;
  const offer = estimateOffer(model, storage, grade);
  const gradeName = grades.find((g) => g.letter === grade)!.name;

  function changeModel(name: string) {
    setModel(name);
    const next = models.find((m) => m.name === name)!;
    if (!next.storage.includes(storage)) setStorage(next.storage[0]);
  }

  const lockMessage = `Hi JDHub, I'd like to lock my offer: ${model} ${storage}, ${gradeName} condition — ${formatNaira(offer)} cash offer.`;

  return (
    <div
      id="offer"
      className="scroll-mt-24 rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]"
    >
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[15px] font-bold">Instant sell estimate</h2>
        <span className="flex items-center gap-1.5 font-mono text-xs font-bold tracking-wide text-grade">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-grade" />
          LIVE PRICING
        </span>
      </div>

      <div className="space-y-4">
        <label className="block">
          <span className={labelClass}>Model</span>
          <select className={fieldClass} value={model} onChange={(e) => changeModel(e.target.value)}>
            {models.map((m) => (
              <option key={m.name}>{m.name}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Storage</span>
          <select className={fieldClass} value={storage} onChange={(e) => setStorage(e.target.value)}>
            {current.storage.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClass}>Condition</span>
          <select
            className={fieldClass}
            value={grade}
            onChange={(e) => setGrade(e.target.value as Grade)}
          >
            {grades.map((g) => (
              <option key={g.letter} value={g.letter}>
                {g.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 flex items-end justify-between border-t border-dashed border-line pt-5">
        <div>
          <p className="text-3xl font-bold tracking-tight text-accent tabular-nums sm:text-4xl">{formatNaira(offer)}</p>
          <p className="mt-1 font-mono text-xs uppercase text-muted">
            {model} · Cash offer
          </p>
        </div>
        <a
          href={whatsappLink(lockMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
        >
          Lock offer
        </a>
      </div>
    </div>
  );
}
