import RevealSection from "./RevealSection";
import { ExternalLink } from "lucide-react";
import biuroImg from "@/assets/Biuro_OST.png";
import warsztatImg from "@/assets/Warsztat_OST.png";
import strych2Img from "@/assets/Strych_2_OST.png";
import strychImg from "@/assets/Strych_OST.png";

const visionImages = [
  { src: biuroImg, alt: "Biuro – wizja końcowa" },
  { src: warsztatImg, alt: "Warsztat – wizja końcowa" },
  { src: strych2Img, alt: "Strych – przestrzeń dzienna – wizja końcowa" },
  { src: strychImg, alt: "Strych – zabudowa – wizja końcowa" },
];

const GallerySection = () => (
  <section id="galeria" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
          Galeria
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight mb-6">
          Wizje końcowe
        </h2>
      </RevealSection>

      <RevealSection delay={0.1}>
        <div className="text-muted-foreground max-w-3xl space-y-6 mb-12 leading-relaxed">
          <p>
            Tworzymy społeczność Stodoła Wymyślacz zlokalizowaną na obrzeżach
            Lublińca niedaleko Częstochowy. Jednym z naszych głównych założeń
            jest wspólne decydowanie w sprawach, które nas dotyczą. Ziemia jest
            dla nas dobrem wspólnym. Będąc równymi wobec miejsca, w którym
            żyjemy, stajemy się równi wobec siebie.
          </p>
          <p>
            Jesteśmy w trakcie prac wykończeniowych budynku jednopiętrowego. Na
            ten moment jest zrobiona kuchnia, łazienka i biuro. Mamy ogrzewanie
            podłogowe zasilane zbiornikiem akumulacyjnym. Budynek jest izolowany
            słomą i tynkowany gliną. Na dachu zainstalowane są panele
            fotowoltaiczne, które będą zasilać pompę ciepła. Docelowo ma to być
            przestrzeń warsztatowa, edukacyjna i integracyjna w obszarze rozwoju
            świadomości.
          </p>
          <p>
            Naszym celem jest budowanie przestrzeni dla działań społeczności
            dążących do rozrastania się sieci kontaktów i jak największej
            autonomii w zakresie żywności, zdrowia i edukacji.
          </p>
          <p>
            Jeśli czujesz, że rezonuje z Tobą to, co tworzymy – zapraszamy do
            kontaktu, odwiedzin i współpracy.
          </p>
        </div>
      </RevealSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {visionImages.map((img, i) => (
          <RevealSection key={img.alt} delay={0.15 + i * 0.1}>
            <div className="group overflow-hidden rounded-lg">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <p className="text-xs text-muted-foreground font-mono mt-2">
                {img.alt}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>

      <RevealSection delay={0.2}>
        <p className="text-muted-foreground max-w-2xl mb-6">
          Lata warsztatów, spotkań i wspólnej pracy — udokumentowane na naszym
          profilu Sztuka Jedności.
        </p>

        <a
          href="https://www.facebook.com/sztukajednosci/photos_albums"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-display font-bold text-sm uppercase tracking-widest text-primary hover:text-primary/80 transition-colors"
        >
          Zobacz wszystkie albumy na Facebooku
          <ExternalLink className="w-4 h-4" />
        </a>

        <p className="text-xs text-muted-foreground font-mono mt-6">
          Ponad 10 lat dokumentacji — warsztaty, budowa, spotkania kręgu
        </p>
      </RevealSection>
    </div>
  </section>
);

export default GallerySection;
