"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="largeSizeMediumTitles"
        background="circleGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Shop", id: "shop" },
        { name: "Collezioni", id: "collections" },
        { name: "Best Seller", id: "best-seller" },
        { name: "La nostra storia", id: "story" },
      ]}
      brandName="Veyra Gioielli"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="INDOSSA CIÒ CHE SENTI"
      description="Gioielli pensati per custodire emozioni, ricordi e legami."
      buttons={[
        { text: "Trova il tuo gioiello", href: "#shop" },
        { text: "Scopri la storia", href: "#story" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/young-transgender-person-using-hair-net_23-2148827034.jpg"
      showBlur={true}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/portrait-stylish-woman-posing-fashionable-outfit_23-2149021799.jpg", alt: "Portrait of stylish woman posing in a fashionable outfit" },
        { src: "http://img.b2bpic.net/free-photo/expressive-transgender-posing-medium-shot_23-2149154632.jpg", alt: "Expressive transgender posing medium shot" },
        { src: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg", alt: "Pretty young woman with wet hair posing in studio, wearing black oversize blazer and shiny necklace" },
        { src: "http://img.b2bpic.net/free-photo/bride-pink-robe-puts-eing-her-finger_8353-394.jpg", alt: "Bride in pink robe puts eing on her finger" },
        { src: "http://img.b2bpic.net/free-photo/greyeyed-blonde-curly-woman-white-blouse-pearl-necklace-touches-face-looks-into-camera-walks-outdoors_197531-29992.jpg", alt: "Greyeyed blonde curly woman in white blouse and pearl necklace touches face looks into camera and walks outdoors" },
      ]}
      avatarText="Oltre 500 clienti soddisfatte"
    />
  </div>

  <div id="pillars" data-section="pillars">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Luminoso",          description: "Luce pura in ogni dettaglio.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/stylish-ring-with-diamonds_1203-1532.jpg", imageAlt: "luxury gold pendant necklace detail" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/top-view-gold-chains-underwater_23-2149836406.jpg", imageAlt: "luxury gold pendant necklace detail" }
        },
        {
          title: "Elegante",          description: "Semplicità che definisce il tuo stile.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/gold-ring_1203-2736.jpg", imageAlt: "luxury gold pendant necklace detail" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/black-white-chocolate-art-designed-isolated-yummy-whole-white-floor_140725-14144.jpg", imageAlt: "luxury gold pendant necklace detail" }
        },
        {
          title: "Emozionale",          description: "Custodiamo il tuo ricordo più caro.",          phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/woman-demonstrating-golden-oriental-style-jewelry_114579-12627.jpg", imageAlt: "luxury gold pendant necklace detail" },
          phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/close-up-military-protection-item-background_23-2149341300.jpg", imageAlt: "luxury gold pendant necklace detail" }
        },
      ]}
      showStepNumbers={false}
      title="La nostra essenza"
      description="Ogni creazione Veyra riflette una promessa di luce ed emozione."
    />
  </div>

  <div id="best-seller" data-section="best-seller">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Veyra Gioielli", name: "Collana Vera", price: "€180", rating: 5, reviewCount: "128", imageSrc: "http://img.b2bpic.net/free-photo/woman-wearing-gold-necklace-with-square-pendant-hoop-earrings_23-2151995439.jpg" },
        { id: "p2", brand: "Veyra Gioielli", name: "Anello Iside", price: "€120", rating: 5, reviewCount: "94", imageSrc: "http://img.b2bpic.net/free-photo/side-view-silver-necklace-with-swarovski-crystal-black-wall_140725-12839.jpg" },
        { id: "p3", brand: "Veyra Gioielli", name: "Orecchini Hayami", price: "€95", rating: 4, reviewCount: "42", imageSrc: "http://img.b2bpic.net/free-photo/top-view-engagement-ring-cloth_23-2148966198.jpg" },
        { id: "p4", brand: "Veyra Gioielli", name: "Bracciale Essenziale", price: "€150", rating: 5, reviewCount: "56", imageSrc: "http://img.b2bpic.net/free-photo/woman-laying-floor-high-angle_23-2149735240.jpg" },
      ]}
      title="Il Nostro Best Seller"
      description="Collana Vera: un tributo all'amore e alla memoria che porti con te ogni giorno."
    />
  </div>

  <div id="story" data-section="story">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="La nostra storia"
      description="Veyra nasce da una storia personale, semplice ma profonda. La nostra founder ha voluto trasformare il ricordo di sua nonna Vera in un gioiello che non sia solo un oggetto, ma un legame da custodire con cura."
      bulletPoints={[
        { title: "Artigianalità Italiana", description: "Fatto a mano con amore." },
        { title: "Custode di Emozioni", description: "Gioielli che raccontano storie." },
        { title: "Design Raffinato", description: "Eleganza senza tempo." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/expensive-golden-ring-with-white-powder-background_23-2150347033.jpg"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Giulia R.", role: "Cliente", company: "Milano", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/fashion-portrait-two-stylish-caucasian-woman-blazers-french-cap-classic-white-hat-stand_343596-2183.jpg" },
        { id: "2", name: "Elena V.", role: "Cliente", company: "Roma", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/laughing-woman-getting-marriage-proposal_23-2147736719.jpg" },
        { id: "3", name: "Sofia M.", role: "Cliente", company: "Firenze", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-laughing-blonde-woman_329181-2134.jpg" },
        { id: "4", name: "Chiara B.", role: "Cliente", company: "Torino", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-posing-seaside_23-2149412670.jpg" },
        { id: "5", name: "Alessia P.", role: "Cliente", company: "Napoli", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/beautiful-elegant-woman-black-dress-with-festive-makeup-beautiful-photo-with-bokeh-background_132075-14628.jpg" },
      ]}
      title="Parole di cuore"
      description="Le nostre clienti raccontano cosa significa indossare un ricordo."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "Quali materiali usate?", content: "Usiamo solo metalli nobili e pietre scelte." },
        { id: "f2", title: "Come scelgo la misura?", content: "Consulta la nostra guida alle taglie presente in ogni pagina prodotto." },
        { id: "f3", title: "Spedizione gratuita?", content: "Sì, per tutti gli ordini superiori a 100€." },
        { id: "f4", title: "Come effettuo un reso?", content: "Hai 30 giorni di tempo dalla ricezione per restituire il tuo gioiello." },
      ]}
      title="Domande frequenti"
      description="Tutto quello che c'è da sapere sul tuo gioiello Veyra."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Resta connessa"
      title="Iscriviti alla nostra newsletter"
      description="Ricevi in anteprima le nuove collezioni e storie speciali."
      imageSrc="http://img.b2bpic.net/free-photo/side-view-young-woman-posing-with-flower_23-2149513259.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Veyra Gioielli"
      copyrightText="© 2025 Veyra Gioielli. Indossa ciò che senti."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
