import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteFrame } from "@/components/elure/SiteFrame";
import { elure } from "@/lib/elure";
import productImage from "@/assets/elure-showcase.jpg";

export const Route = createFileRoute("/shop")({
  component: ShopPage,
  head: () => ({ meta: [{ title: "Shop ELURE — SARKAR" }, { name: "description", content: "Explore ELURE, the single-fragrance collection by SARKAR. A nostalgic fragrance where memories linger." }, { property: "og:title", content: "Shop ELURE — SARKAR" }, { property: "og:description", content: "Find the feeling. Keep the memory. Discover ELURE by SARKAR." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "https://elure-scent-journey.lovable.app/shop" }], links: [{ rel: "canonical", href: "https://elure-scent-journey.lovable.app/shop" }] }),
});

function ShopPage() {
  return <SiteFrame><main className="inner-page shop-page"><header className="inner-page-heading"><p className="kicker">THE ELURE COLLECTION / 01</p><h1>Find the feeling.<br /><em>Keep the memory.</em></h1><p>Explore the world of ELURE, where fragrance becomes a way to revisit the moments that matter.</p></header><section className="collection-listing"><Link to="/product/elure" className="collection-image"><img src={productImage} alt="ELURE campaign presentation using Sarkar's chess-inspired bottle and box" width={1024} height={1024} /><span>01 / THE ELURE EDITION</span></Link><div className="collection-product"><p className="kicker">A SINGLE-FRAGRANCE COLLECTION</p><h2>ELURE</h2><p className="collection-tagline">WHERE MEMORIES LINGER.</p><p>A timeless, nostalgic fragrance with a fresh opening, a delicate floral heart, and a warm, comforting finish.</p><div className="price-line"><span>ELURE BY SARKAR</span><strong>₹{elure.price.toLocaleString("en-IN")}</strong></div><Button asChild className="button-ink"><Link to="/product/elure">DISCOVER THE FRAGRANCE <ArrowRight /></Link></Button><a className="text-link" href="https://www.sarkar.store/collections/shop-all" target="_blank" rel="noreferrer">EXPLORE SARKAR FRAGRANCES <ArrowUpRight /></a><p className="product-caveat">For ELURE ordering and availability, please enquire with SARKAR.</p></div></section><div className="collection-back"><Link className="text-link" to="/">← BACK TO ELURE HOME</Link><a className="text-link" href="https://www.sarkar.store/collections/shop-all" target="_blank" rel="noreferrer">SARKAR'S FULL COLLECTION <ArrowUpRight /></a></div></main></SiteFrame>;
}