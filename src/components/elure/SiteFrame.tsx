import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Instagram, Menu, ShoppingBag, X, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/sarkar-logo.png.asset.json";

export function SiteFrame({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="elure-site">
      <div className="site-ribbon">A NEW SCENT BY SARKAR <span>·</span> WHERE MEMORIES LINGER</div>
      <header className="elure-header">
        <Button className="nav-toggle" variant="ghost" size="icon" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
        <nav className="main-nav" aria-label="Main navigation">
          <Link to="/">HOME</Link><Link to="/shop">SHOP ELURE</Link><Link to="/our-story">OUR STORY</Link><Link to="/memory-edit">THE MEMORY EDIT</Link>
        </nav>
        <Link to="/" className="elure-wordmark" aria-label="ELURE by SARKAR home"><span>ELURE</span><small>BY SARKAR</small></Link>
        <div className="header-actions">
          <a className="sarkar-link" href="https://www.sarkar.store/" target="_blank" rel="noreferrer">SARKAR <ArrowUpRight size={13} /></a>
          <Button asChild variant="ghost" size="icon" aria-label="Explore ELURE collection"><Link to="/shop"><ShoppingBag /></Link></Button>
        </div>
        {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link onClick={() => setMenuOpen(false)} to="/">Home <ArrowUpRight /></Link>
          <Link onClick={() => setMenuOpen(false)} to="/shop">Shop ELURE <ArrowUpRight /></Link>
          <Link onClick={() => setMenuOpen(false)} to="/our-story">Our story <ArrowUpRight /></Link>
          <Link onClick={() => setMenuOpen(false)} to="/memory-edit">The Memory Edit <ArrowUpRight /></Link>
          <a href="https://www.sarkar.store/" target="_blank" rel="noreferrer">Sarkar store <ArrowUpRight /></a>
        </nav>}
      </header>
      {children}
      <footer className="elure-footer">
        <div className="footer-main">
          <div className="footer-signoff"><Link to="/" className="elure-wordmark"><span>ELURE</span><small>BY SARKAR</small></Link><p>Where memories linger.</p></div>
          <div className="footer-column"><p className="footer-label">EXPLORE</p><Link to="/">Home</Link><Link to="/shop">Shop ELURE</Link><Link to="/our-story">Our story</Link><Link to="/memory-edit">The Memory Edit</Link></div>
          <div className="footer-column"><p className="footer-label">SARKAR</p><a href="https://www.sarkar.store/" target="_blank" rel="noreferrer">Official store <ArrowUpRight size={13} /></a><a href="https://www.sarkar.store/pages/shipping-policy" target="_blank" rel="noreferrer">Shipping</a><a href="https://www.sarkar.store/pages/refund-policy" target="_blank" rel="noreferrer">Returns</a><a href="mailto:support@sarkar.store">support@sarkar.store</a></div>
          <div className="footer-column"><p className="footer-label">FOLLOW ALONG</p><div className="footer-socials"><Button asChild variant="ghost" size="icon"><a href="https://www.instagram.com/houseofsarkar" target="_blank" rel="noreferrer" aria-label="Sarkar on Instagram"><Instagram /></a></Button><Button asChild variant="ghost" size="icon"><a href="https://www.youtube.com/@houseofsarkar" target="_blank" rel="noreferrer" aria-label="Sarkar on YouTube"><Youtube /></a></Button></div></div>
        </div>
        <div className="footer-bottom"><span>© 2026 SARKAR. ALL RIGHTS RESERVED.</span><span>A FRAGRANCE BY SARKAR</span><a href="https://www.sarkar.store/pages/privacy-policy" target="_blank" rel="noreferrer">PRIVACY</a></div>
      </footer>
    </div>
  );
}