import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, ArrowDown, ArrowRight, Menu, Minus, Plus, Instagram, ShoppingBag, Truck, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import logo from "@/assets/sarkar-logo.png.asset.json";
import campaign from "@/assets/elure-campaign.jpg";
import showcase from "@/assets/elure-showcase.jpg";
import notesImage from "@/assets/fragrance-notes.jpg";
import { elure, orderInquiry } from "@/lib/elure";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ELURE — A scent that brings you back. | Sarkar" },
      { name: "description", content: "Discover ELURE by Sarkar. A timeless fragrance of bergamot, florals, vanilla and sandalwood. ₹1,700 with complimentary shipping on your first order." },
      { property: "og:title", content: "ELURE by Sarkar — A scent that brings you back." },
      { property: "og:description", content: "One scent. A thousand memories. Discover Sarkar’s new fragrance, ELURE." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const notes = [
  { number: "01", title: "TOP NOTES", mood: "The first spark.", ingredients: "Bergamot · Pear · Pink Pepper", copy: "Bright citrus. A touch of sweetness. An unexpected spark." },
  { number: "02", title: "HEART NOTES", mood: "A familiar feeling.", ingredients: "Rose · Jasmine · Iris", copy: "Soft florals unfold, like a memory coming into focus." },
  { number: "03", title: "BASE NOTES", mood: "What stays with you.", ingredients: "Vanilla · White Musk · Sandalwood", copy: "A warm, quiet embrace that lingers long after." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="campaign-page">
      <div className="announcement">A NEW SCENT. A NEW CHAPTER. <span>COMPLIMENTARY SHIPPING ON YOUR FIRST ORDER</span><ArrowUpRight size={12} /></div>
      <header className="site-header">
        <nav className="desktop-nav" aria-label="Main navigation"><a href="https://www.sarkar.store/collections/shop-all">FRAGRANCES</a><a href="https://www.sarkar.store/pages/know-sarkar">OUR STORY</a></nav>
        <Button variant="ghost" size="icon" className="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        <a className="brand-logo" href="https://www.sarkar.store/" aria-label="Sarkar home"><img src={logo.url} width={190} height={30} alt="SARKAR" /></a>
        <div className="header-right"><a className="collection-link" href="#journey">DISCOVER ELURE</a><Button variant="ghost" size="icon" aria-label="Shop ELURE" onClick={() => setOrderOpen(true)}><ShoppingBag /></Button></div>
        {menuOpen && <nav className="mobile-navigation" aria-label="Mobile navigation"><a href="https://www.sarkar.store/collections/shop-all">Fragrances <ArrowUpRight /></a><a href="https://www.sarkar.store/pages/know-sarkar">Our story <ArrowUpRight /></a><a href="#journey" onClick={() => setMenuOpen(false)}>Discover ELURE <ArrowDown /></a></nav>}
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-photo" src={campaign} alt="Sarkar’s black chess-king bottle surrounded by delicate white flowers in the ELURE campaign" width={1920} height={1080} fetchPriority="high" />
          <div className="hero-content">
            <p className="eyebrow"><span className="tiny-line" /> INTRODUCING A NEW CHAPTER</p>
            <h1 id="hero-title">ELURE</h1>
            <h2>A scent that<br />brings you back.</h2>
            <p className="hero-description">A timeless fragrance inspired by the memories, emotions, and moments that stay with us long after they’ve passed.</p>
            <Button asChild className="campaign-cta"><a href="#shop">SHOP ELURE <ArrowUpRight /></a></Button>
          </div>
          <div className="hero-bottom"><a href="#journey"><ArrowDown size={16} /> THE SCENT. THE STORY.</a><span>A FRAGRANCE BY SARKAR</span><span className="hero-edition">01 / ELURE</span></div>
        </section>
        <div className="campaign-ribbon"><span>ONE SCENT.</span><span className="ribbon-star">✳</span><span>A THOUSAND MEMORIES.</span><span className="ribbon-star">✳</span><span className="ribbon-extra">ELURE BY SARKAR.</span></div>
        <section id="journey" className="scent-journey section-space">
          <div className="section-heading"><p className="eyebrow">THE OLFACTIVE JOURNEY</p><div><h2>It begins with a spark.<br /><span>It stays as a memory.</span></h2><p>Three chapters. One unforgettable feeling.</p></div><span className="section-index">01 — 03</span></div>
          <div className="notes-visual"><img src={notesImage} width={1536} height={640} loading="lazy" alt="Bergamot, pear and pink pepper unfolding into rose, jasmine and iris, then vanilla and sandalwood" /></div>
          <div className="notes-grid">{notes.map(note => <article className="note" key={note.number}><div className="note-top"><span>{note.number}</span><p>{note.title}</p><span className="note-dot" /></div><h3>{note.mood}</h3><p className="ingredients">{note.ingredients}</p><p className="note-copy">{note.copy}</p></article>)}</div>
        </section>
        <section className="memory-section section-space">
          <p className="eyebrow">SOME THINGS NEVER REALLY LEAVE US.</p>
          <h2>ONE SCENT.<br />A THOUSAND<br /><span>MEMORIES.</span></h2>
          <div className="memory-bottom"><span className="memory-symbol">✳</span><p>From cherished moments to feelings we can never quite put into words, ELURE is created for those who find beauty in memories and carry a piece of their past wherever life takes them.</p><span className="eyebrow">CARRY THE FEELING.</span></div>
        </section>
        <section id="shop" className="product-section">
          <div className="product-image"><img src={showcase} alt="ELURE campaign concept: Sarkar’s signature black bottle with a new ELURE carton" width={1024} height={1024} loading="lazy" /><span className="image-caption">THE ELURE EDITION / SARKAR</span></div>
          <div className="product-details"><p className="eyebrow">YOUR NEXT SIGNATURE SCENT</p><h2>ELURE</h2><p className="product-tagline">A scent that brings you back.</p><p className="product-copy">Bright beginnings. A floral heart. A warmth that stays.<br />A thousand memories, captured in one scent.</p><div className="product-price">₹{elure.price.toLocaleString("en-IN")}</div><div className="shipping"><Truck size={18} /><span>Complimentary shipping on your first order.</span></div><Button className="campaign-cta product-cta" onClick={() => setOrderOpen(true)}>MAKE MEMORIES LAST <ArrowUpRight /></Button><div className="product-footnote"><span>THOUGHTFULLY CREATED.</span><span>UNMISTAKABLY SARKAR.</span></div></div>
        </section>
      </main>
      <footer className="site-footer"><div className="footer-top"><div><a href="https://www.sarkar.store/" aria-label="Sarkar home"><img className="footer-logo" src={logo.url} width={220} height={40} loading="lazy" alt="SARKAR" /></a><p>Not just a fragrance. A presence.</p></div><div className="footer-links"><p>EXPLORE</p><a href="https://www.sarkar.store/collections/shop-all">All fragrances <ArrowUpRight size={12} /></a><a href="#shop">ELURE <ArrowUpRight size={12} /></a><a href="https://www.sarkar.store/pages/know-sarkar">Our story <ArrowUpRight size={12} /></a></div><div className="footer-links"><p>LET’S CONNECT</p><a href="mailto:support@sarkar.store">support@sarkar.store</a><div className="socials"><Button asChild variant="ghost" size="icon"><a href="https://www.instagram.com/houseofsarkar" target="_blank" rel="noreferrer" aria-label="Sarkar on Instagram"><Instagram /></a></Button><Button asChild variant="ghost" size="icon"><a href="https://www.youtube.com/@houseofsarkar" target="_blank" rel="noreferrer" aria-label="Sarkar on YouTube"><Youtube /></a></Button></div></div></div><div className="footer-bottom"><span>© 2026 SARKAR. ALL RIGHTS RESERVED.</span><a href="https://www.sarkar.store/policies/privacy-policy">PRIVACY POLICY</a><a href="https://www.sarkar.store/policies/refund-policy">SHIPPING & RETURNS</a><a href="#hero-title" className="back-top">BACK TO TOP <ArrowUpRight size={13} /></a></div></footer>
      <Dialog open={orderOpen} onOpenChange={setOrderOpen}><DialogContent className="order-dialog"><DialogTitle>Make memories last.</DialogTitle><DialogDescription>ELURE is a new addition to Sarkar. Contact us for availability and ordering; online checkout is not available yet.</DialogDescription><div className="order-summary"><img src={showcase} width={100} height={100} alt="ELURE" /><div><h3>ELURE</h3><p>₹{elure.price.toLocaleString("en-IN")}</p></div><div className="quantity"><Button variant="ghost" size="icon" aria-label="Decrease quantity" disabled={quantity <= 1} onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus /></Button><span>{quantity}</span><Button variant="ghost" size="icon" aria-label="Increase quantity" disabled={quantity >= 5} onClick={() => setQuantity(Math.min(5, quantity + 1))}><Plus /></Button></div></div><div className="order-total"><span>Product total</span><strong>₹{(elure.price * quantity).toLocaleString("en-IN")}</strong></div><p className="order-shipping">Complimentary shipping on your first order.</p><Button asChild className="campaign-cta"><a href={orderInquiry(quantity)}>ENQUIRE WITH SARKAR <ArrowRight /></a></Button></DialogContent></Dialog>
    </div>
  );
}
