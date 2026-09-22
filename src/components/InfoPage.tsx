import Link from "next/link";
import { Footer, Header, WhatsAppFab } from "./Sections";

export default function InfoPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-3xl px-6 py-20">
        <Link href="/" className="text-sm text-muted hover:text-ink">
          ← Back to home
        </Link>
        <p className="mt-10 mb-4 text-sm font-semibold text-accent">{eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <div className="mt-8 space-y-5 leading-relaxed text-muted [&_h2]:mt-10 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-ink">
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
