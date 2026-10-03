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

const TITLE = "AL Aamir Khan | Bhopal Influencer & Content Creator";
const DESCRIPTION =
  "AL Aamir Khan is a Bhopal-based Instagram influencer & content creator. Automobile, tech, real estate & food reels. Book brand collaborations in MP.";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
        {/* <Achievements /> */}
        <Brands />
        <Reels />
        <YoutubeSection />
        <Media />
        {/* <Awards /> */}
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
