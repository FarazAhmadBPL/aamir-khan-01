import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { SocialProof } from "@/components/site/SocialProof";
import { Achievements } from "@/components/site/Achievements";
import { Brands } from "@/components/site/Brands";
import { Reels } from "@/components/site/Reels";
import { Media } from "@/components/site/Media";
import { Awards } from "@/components/site/Awards";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { YoutubeSection } from "@/components/site/Youtube";

const TITLE = "AL Aamir Khan — Digital Creator & Influencer";
const DESCRIPTION =
  "Official website of AL Aamir Khan, Indian digital creator, storyteller and influencer helping brands connect with millions through authentic storytelling.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "AL Aamir Khan",
          jobTitle: "Digital Creator and Influencer",
          nationality: "Indian",
          description: DESCRIPTION,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Achievements />
        <Brands />
        <Reels />
        <YoutubeSection />
        <Media />
        <Awards />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
