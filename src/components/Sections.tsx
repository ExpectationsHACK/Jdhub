import Image from "next/image";
import Link from "next/link";
import EstimateCard from "./EstimateCard";
import {
  CallIcon,
  CardIcon,
  LogoMark,
  MailIcon,
  PhoneIcon,
  SwapIcon,
  WhatsAppIcon,
} from "./icons";
import {
  contact,
  grades,
  services,
  stats,
  stock,
  swapSteps,
  whatsappLink,
} from "@/lib/data";

const container = "mx-auto w-full max-w-5xl px-6";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 max-w-xl">
      <p className="mb-4 text-sm font-semibold text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-[32px]">{title}</h2>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/85 backdrop-blur">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <LogoMark className="h-5 w-5 text-accent" />
          JDHub
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#stock" className="hidden text-muted hover:text-ink sm:inline">
            Buy
          </a>
          <a href="#lanes" className="hidden text-muted hover:text-ink sm:inline">
            Sell &amp; swap
          </a>
          <a href="#services" className="hidden text-muted hover:text-ink sm:inline">
            Services
          </a>
          <a
            href="#offer"
            className="rounded-lg bg-ink px-4 py-2 font-semibold text-white transition hover:bg-black"
          >
            Get an offer
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className={`${container} grid gap-12 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24`}>
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-grade" />
          Every device inspected &amp; graded before it moves
        </p>
        <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl">
          Turn your old iPhone <br className="hidden sm:block" />
          into your next one.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
          JDHub is where people buy, sell, and swap iPhones — fair offers, honest grading, and a
          straight path from the phone you have to the phone you want.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#offer"
            className="rounded-lg bg-ink px-5 py-3 font-semibold text-white transition hover:bg-black"
          >
            Get an instant offer
          </a>
          <a
            href="#stock"
            className="rounded-lg border border-line px-5 py-3 font-semibold transition hover:border-ink"
          >
            Browse iPhones
          </a>
        </div>
        <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-bold">{s.value}</dd>
              <dd className="text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <EstimateCard />
    </section>
  );
}

const lanes = [
  {
    title: "Sell",
    Icon: PhoneIcon,
    body: "Tell us the model and condition, get a locked cash offer, ship it free, get paid within two days.",
    cta: "Get your offer",
    href: "#offer",
  },
  {
    title: "Buy",
    Icon: CardIcon,
    body: "Certified pre-owned iPhones, battery-tested and grade-verified, with a 12-month warranty on every unit.",
    cta: "See what's in stock",
    href: "#stock",
  },
  {
    title: "Swap",
    Icon: SwapIcon,
    body: "Trade in your current phone and roll the value straight onto a newer model — pay only the difference.",
    cta: "See how swapping works",
    href: "#swap",
  },
];

export function Lanes() {
  return (
    <section id="lanes" className="scroll-mt-16 border-t border-line">
      <div className={`${container} py-20`}>
        <SectionHeading
          eyebrow="Three ways in"
          title="Whatever you're doing with your iPhone, there's a lane for it."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lanes.map(({ title, Icon, body, cta, href }) => (
            <div
              key={title}
              className="flex flex-col rounded-2xl border border-line p-7 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Icon className="h-9 w-9 text-accent" />
              <h3 className="mt-8 text-lg font-bold">{title}</h3>
              <p className="mt-2 flex-1 leading-relaxed text-muted">{body}</p>
              <a href={href} className="mt-6 text-sm font-semibold text-accent hover:text-accent-dark">
                {cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Grading() {
  return (
    <section id="grading" className="scroll-mt-16 border-t border-line">
      <div className={`${container} py-20`}>
        <SectionHeading
          eyebrow="Grading, made plain"
          title="Every device is graded the same way, so offers stay fair."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {grades.map((g) => (
            <div key={g.letter} className="rounded-2xl border border-line p-6">
              <span
                className={`flex h-9 w-9 items-center justify-center rounded-md border font-mono text-sm ${
                  g.letter === "A" ? "border-grade text-grade" : "border-line text-muted"
                }`}
              >
                {g.letter}
              </span>
              <h3 className="mt-5 font-bold">{g.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{g.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Stock() {
  return (
    <section id="stock" className="scroll-mt-16 border-t border-line">
      <div className={`${container} py-20`}>
        <SectionHeading eyebrow="In stock now" title="Certified pre-owned, ready to ship." />
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
          {stock.map((item) => (
            <a
              key={item.model}
              href={whatsappLink(
                `Hi JDHub, is the ${item.model} ${item.storage} (${item.color}, ${item.grade}) at $${item.price} still available?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-line p-3 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
                <Image
                  src={item.photo.src}
                  alt={`${item.model} in ${item.color}`}
                  title={`Photo: ${item.photo.author}, ${item.photo.license}`}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 20vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-sm font-bold sm:text-base">{item.model}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase leading-snug text-muted">
                {item.storage} · {item.color}
              </p>
              <div className="mt-auto flex items-center justify-between pt-3">
                <span className="text-lg font-bold">${item.price}</span>
                <span className="font-mono text-xs text-grade">{item.grade}</span>
              </div>
            </a>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">
          Photos via Wikimedia Commons —{" "}
          <Link href="/credits" className="underline underline-offset-2 hover:text-ink">
            see credits
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 border-t border-line">
      <div className={`${container} py-20`}>
        <SectionHeading eyebrow="Services" title="Beyond buying and selling." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border border-line p-6">
              <h3 className="font-bold">{s.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.description}</p>
              <p className="mt-4 text-lg font-bold text-accent">${s.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowSwap() {
  return (
    <section id="swap" className="scroll-mt-16 border-t border-line">
      <div className={`${container} py-20`}>
        <SectionHeading
          eyebrow="How swapping works"
          title="From your current phone to your next one, in three steps."
        />
        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {swapSteps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="pt-0.5 font-mono text-sm text-muted">{i + 1}</span>
              <div>
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className={`${container} pb-20`}>
      <div className="rounded-3xl bg-ink px-8 py-14 text-white sm:px-12">
        <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight">
          Not sure what your iPhone is worth?
        </h2>
        <p className="mt-3 text-cream/80">
          Get a locked cash offer in under a minute — no obligation to sell.
        </p>
        <a
          href="#offer"
          className="mt-8 inline-block rounded-lg bg-accent px-5 py-3 font-semibold text-white transition hover:bg-accent-dark"
        >
          Check my offer
        </a>
      </div>
    </section>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-wider text-white">{children}</h3>;
}

export function Footer() {
  const linkClass = "text-neutral-400 transition hover:text-white";
  return (
    <footer className="mt-auto bg-[#141414] text-sm">
      <div className={`${container} py-14`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <FooterHeading>JDHub</FooterHeading>
            <p className="leading-relaxed text-neutral-400">
              Buy, sell, and swap iPhones — graded fairly, shipped fast, backed by a 12-month
              warranty.
            </p>
          </div>
          <div>
            <FooterHeading>Marketplace</FooterHeading>
            <ul className="space-y-3">
              <li><a href="#offer" className={linkClass}>Sell your iPhone</a></li>
              <li><a href="#stock" className={linkClass}>Buy pre-owned</a></li>
              <li><a href="#swap" className={linkClass}>Swap up</a></li>
            </ul>
          </div>
          <div>
            <FooterHeading>Support</FooterHeading>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${contact.email}`} className={`${linkClass} inline-flex items-center gap-2 break-all`}>
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneTel}`} className={`${linkClass} inline-flex items-center gap-2`}>
                  <CallIcon className="h-4 w-4" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-3">
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/warranty" className={linkClass}>Warranty terms</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy</Link></li>
              <li><Link href="/credits" className={linkClass}>Photo credits</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-neutral-500">
          <p>© {new Date().getFullYear()} JDHub. All rights reserved.</p>
          <Link href="/admin" className="underline underline-offset-4 hover:text-white">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Hi JDHub, I have a question about an iPhone.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with JDHub on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#25D366] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.3)] transition hover:scale-105"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
