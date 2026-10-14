import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteFrame } from "@/components/elure/SiteFrame";
import sunlitImage from "@/assets/memory-sunlit.jpg";
import letterImage from "@/assets/memory-letter.jpg";
import homeImage from "@/assets/memory-home.jpg";
import embraceImage from "@/assets/memory-embrace.jpg";

export const Route = createFileRoute("/memory-edit")({
  component: MemoryEditPage,
  head: () => ({ meta: [{ title: "The Memory Edit — ELURE by SARKAR" }, { name: "description", content: "Small stories about sunlight, familiar places, and the moments we keep. The Memory Edit by ELURE." }, { property: "og:title", content: "The Memory Edit — ELURE by SARKAR" }, { property: "og:description", content: "A small journal of memories, familiar feelings, and the places that stay with us." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "https://elure-scent-journey.lovable.app/memory-edit" }], links: [{ rel: "canonical", href: "https://elure-scent-journey.lovable.app/memory-edit" }] }),
});

const essays = [
  { title: "The Afternoon That Stayed", category: "A SUNLIT MEMORY", image: sunlitImage, alt: "Sunlit curtains across a softly familiar room", text: "The afternoon light found its way through the curtains and made everything feel unhurried. Familiar voices drifted in from another room. There was nowhere else to be, and nothing more to ask of the day." },
  { title: "A Note Between the Pages", category: "WORDS KEPT CLOSE", image: letterImage, alt: "A handwritten letter on warm paper", text: "Some words are saved not because they are grand, but because they sound like someone we know. Folded once, tucked away, and found again at just the right time." },
  { title: "The Way Home", category: "PLACES THAT KNOW US", image: homeImage, alt: "A familiar open doorway filled with afternoon light", text: "There is a particular ease in arriving somewhere that already knows your name. The familiar door, the light in the hallway, the sense of being expected." },
  { title: "A Feeling We Carry", category: "THE LITTLE THINGS", image: embraceImage, alt: "A soft cardigan draped across a chair in warm light", text: "Sometimes comfort is a texture, a fragrance, or the warmth that lingers after someone has left the room. Small things, held close." },
];

function MemoryEditPage() {
  return <SiteFrame><main className="inner-page memory-edit-page"><header className="inner-page-heading"><p className="kicker">A JOURNAL BY ELURE</p><h1>The Memory<br /><em>Edit.</em></h1><p>Small stories about scent, familiar feelings, and the moments we carry.</p></header><div className="essay-list">{essays.map((essay, index) => <article className="essay-row" key={essay.title}><img src={essay.image} alt={essay.alt} width={1024} height={1024} loading="lazy" /><div className="essay-copy"><p className="kicker">0{index + 1} / {essay.category}</p><h2>{essay.title}</h2><p>{essay.text}</p></div></article>)}</div><section className="memory-edit-cta"><p className="kicker">A FRAGRANCE BY SARKAR</p><h2>Some memories<br />have a <em>scent.</em></h2><Link className="text-link" to="/product/elure">MEET ELURE <ArrowUpRight /></Link></section></main></SiteFrame>;
}