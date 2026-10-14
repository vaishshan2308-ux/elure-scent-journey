import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SiteFrame } from "@/components/elure/SiteFrame";
import { elure, orderInquiry } from "@/lib/elure";
import productImage from "@/assets/elure-showcase.jpg";
import notesImage from "@/assets/fragrance-notes.jpg";
import sunlitImage from "@/assets/memory-sunlit.jpg";
import letterImage from "@/assets/memory-letter.jpg";
import homeImage from "@/assets/memory-home.jpg";
import embraceImage from "@/assets/memory-embrace.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ELURE by SARKAR — Where Memories Linger" },
      { name: "description", content: "Discover ELURE, a nostalgic fragrance by SARKAR inspired by the memories, emotions, and moments that stay with us." },
      { property: "og:title", content: "ELURE by SARKAR — Where Memories Linger" },
      { property: "og:description", content: "One scent. A thousand memories. Meet ELURE by SARKAR." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "https://elure-scent-journey.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://elure-scent-journey.lovable.app/" }],
  }),
});

const memories = [
  { title: "THE SUNLIT AFTERNOON", text: "Warm light, familiar voices, and nowhere else you needed to be.", more: "The day stretched gently ahead. Someone called you in for tea, the curtains moved in the breeze, and for a little while the world was exactly right.", image: sunlitImage, alt: "Afternoon sunlight across an ivory chair and sheer curtains" },
  { title: "THE OLD LOVE LETTER", text: "Words kept close, feelings never forgotten.", more: "Folded between the pages of a book, a few handwritten lines can hold an entire season: the small things you noticed, and the words you meant to keep.", image: letterImage, alt: "A handwritten letter and pale blue envelope in sunlight" },
  { title: "THE WAY HOME", text: "The comfort of a place that always felt like yours.", more: "A familiar doorway, the sound of keys, the warmth in the room before anyone says a word. Some places seem to know you by heart.", image: homeImage, alt: "A sunlit home entryway with its door open" },
  { title: "THE FAMILIAR EMBRACE", text: "A feeling of home, carried long after the moment ends.", more: "The soft knit you borrowed, the scent that stayed on it, the comfort of being welcomed without needing to explain a thing.", image: embraceImage, alt: "A soft ivory cardigan resting in a sunlit room" },
];

function Index() {
  const [activeMemory, setActiveMemory] = useState<(typeof memories)[number] | null>(null);
  return <SiteFrame>
    <main>
      <section className="editorial-hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="kicker"><span className="kicker-rule" /> A NEW FRAGRANCE BY SARKAR</p>
          <h1 id="home-title">Where memories<br /><em>linger.</em></h1>
          <p className="hero-description">A timeless fragrance inspired by the memories, emotions, and moments that stay with us long after they’ve passed.</p>
          <div className="hero-actions"><Button asChild className="button-ink"><Link to="/shop">DISCOVER ELURE <ArrowUpRight /></Link></Button><a className="text-link" href="#scent">EXPLORE THE SCENT <ArrowDown /></a></div>
          <p className="hero-caption">ONE SCENT. A THOUSAND MEMORIES.</p>
        </div>
        <div className="hero-art"><img src={productImage} alt="Sarkar's original chess-inspired fragrance bottle with ELURE named alongside" width={1024} height={1024} fetchPriority="high" /><span className="hero-product-note">ELURE<br /><small>BY SARKAR</small></span><span className="image-index">01 / A MEMORY TO KEEP</span></div>
        <span className="hero-side-note">A FEELING, HELD CLOSE</span>
      </section>

      <section className="memory-intro editorial-band" aria-labelledby="memory-intro-title">
        <div className="intro-heading"><p className="kicker">A FRAGRANCE FOR WHAT STAYS</p><span className="section-number">01 — 05</span></div>
        <div className="intro-body"><h2 id="memory-intro-title">Some memories<br />have a <em>scent.</em></h2><div className="intro-copy"><p>From cherished moments to feelings we can never quite put into words, ELURE is created for those who find beauty in memories and carry a piece of their past wherever life takes them.</p><p className="soft-italic">Because sometimes, one familiar scent is all it takes to feel it all again.</p><Link className="text-link" to="/our-story">THE FEELING BEHIND ELURE <ArrowUpRight /></Link></div></div>
        <div className="intro-images"><img className="intro-large" src={sunlitImage} alt="Sunlit curtains and a quiet, familiar room" width={1024} height={1024} loading="lazy" /><img className="intro-small" src={letterImage} alt="A handwritten note kept for a long time" width={1024} height={1024} loading="lazy" /><span className="image-caption">THE LITTLE THINGS THAT STAY WITH US</span></div>
      </section>

      <section className="product-feature" aria-labelledby="product-title">
        <div className="product-feature-image"><img src={productImage} alt="ELURE campaign presentation using Sarkar's original chess-inspired bottle and box" width={1024} height={1024} loading="lazy" /><span className="image-caption">ELURE / A NEW CHAPTER BY SARKAR</span></div>
        <div className="product-feature-copy"><p className="kicker">A MEMORY, MADE PRESENT</p><h2 id="product-title">Meet <em>ELURE.</em></h2><p className="product-tagline">WHERE MEMORIES LINGER.</p><p className="body-copy">A timeless, nostalgic fragrance with a fresh opening, a delicate floral heart, and a warm, comforting finish. Created to evoke the moments, people, and places that stay with you.</p><div className="price-line"><span>ELURE BY SARKAR</span><strong>₹{elure.price.toLocaleString("en-IN")}</strong></div><p className="shipping-note">Complimentary shipping on your first order.</p><Button asChild className="button-ink full-cta"><Link to="/product/elure">EXPLORE THE FRAGRANCE <ArrowRight /></Link></Button><a className="text-link" href={orderInquiry(1)}>ASK ABOUT AVAILABILITY <ArrowUpRight /></a><p className="product-caveat">Bottle imagery preserves Sarkar's existing design; ELURE is identified alongside it.</p></div>
      </section>

      <section className="notes-section editorial-band" id="scent" aria-labelledby="notes-title">
        <div className="section-title-row"><div><p className="kicker">THE OLFACTIVE JOURNEY</p><h2 id="notes-title">A memory, in<br /><em>every note.</em></h2></div><p className="section-summary">Fresh at first, floral at heart, and warm as a memory that never leaves.</p></div>
        <img className="notes-still-life" src={notesImage} alt="Pear, rose, jasmine, iris, vanilla, and sandalwood arranged as fragrance note imagery" width={1536} height={640} loading="lazy" />
        <div className="notes-columns"><article><span>01 / OPENING</span><h3>Top notes</h3><p>Bergamot <i>·</i> Pear <i>·</i> Pink Pepper</p></article><article><span>02 / HEART</span><h3>Heart notes</h3><p>Rose <i>·</i> Jasmine <i>·</i> Iris</p></article><article><span>03 / THE LASTING IMPRESSION</span><h3>Base notes</h3><p>Vanilla <i>·</i> White Musk <i>·</i> Sandalwood</p></article></div>
      </section>

      <section className="memory-cards-section" aria-labelledby="memory-cards-title">
        <div className="section-title-row"><div><p className="kicker">A COLLECTION OF LITTLE FEELINGS</p><h2 id="memory-cards-title">If this scent were<br /><em>a memory...</em></h2></div><p className="section-summary">Some moments are never really over. Choose one to revisit.</p></div>
        <div className="memory-card-grid">{memories.map((memory, index) => <button type="button" className="memory-card" key={memory.title} onClick={() => setActiveMemory(memory)} aria-label={`Read ${memory.title}`}><span className="memory-card-image"><img src={memory.image} alt={memory.alt} width={1024} height={1024} loading="lazy" /><span className="memory-card-index">0{index + 1}</span><span className="memory-card-open"><Plus /></span></span><span className="memory-card-title">{memory.title}</span><span className="memory-card-copy">{memory.text}</span></button>)}</div>
      </section>

      <section className="experience-section"><div className="experience-image"><img src={embraceImage} alt="Soft afternoon light across a familiar room" width={1024} height={1024} loading="lazy" /></div><div className="experience-copy"><p className="kicker">A MOMENT TO RETURN TO</p><h2>One scent.<br />A thousand<br /><em>memories.</em></h2><p>Some moments become memories. Some memories become part of us. ELURE brings them a little closer, one breath at a time.</p><Button asChild className="button-ink"><Link to="/memory-edit">ENTER THE MEMORY EDIT <ArrowUpRight /></Link></Button></div></section>

      <section className="story-preview editorial-band"><p className="kicker">THE WORLD OF SARKAR</p><div><h2>For the feeling<br />that stays <em>with you.</em></h2><p>SARKAR is a premium fragrance house envisioned by Bhuvan Bam, creating parfums for everyday authority and those who set their own standards. ELURE brings that world a softer, nostalgic note.</p><Link className="text-link" to="/our-story">READ OUR STORY <ArrowUpRight /></Link></div><a className="story-source" href="https://www.sarkar.store/pages/know-sarkar" target="_blank" rel="noreferrer">THE SARKAR STORY <ArrowUpRight /></a></section>

      <section className="final-callout"><p className="kicker">ELURE BY SARKAR</p><h2>Let memories<br /><em>linger.</em></h2><p>Discover the fragrance that brings you a little closer to the moments you love.</p><Button asChild className="button-paper"><Link to="/product/elure">DISCOVER ELURE <ArrowRight /></Link></Button></section>
    </main>
    <Dialog open={!!activeMemory} onOpenChange={(open) => { if (!open) setActiveMemory(null); }}><DialogContent className="memory-dialog"><DialogTitle>{activeMemory?.title}</DialogTitle><DialogDescription>{activeMemory?.more}</DialogDescription><p className="memory-dialog-signoff">A small feeling from the world of ELURE.</p></DialogContent></Dialog>
  </SiteFrame>;
}