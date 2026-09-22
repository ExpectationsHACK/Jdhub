import {
  CallToAction,
  Footer,
  Grading,
  Header,
  Hero,
  HowSwap,
  Lanes,
  Services,
  Stock,
  WhatsAppFab,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Lanes />
        <Grading />
        <Stock />
        <Services />
        <HowSwap />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
