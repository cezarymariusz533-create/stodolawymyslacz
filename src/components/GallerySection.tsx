import RevealSection from "./RevealSection";
import { ExternalLink } from "lucide-react";

const GallerySection = () => (
  <section id="galeria" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
          Galeria
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight mb-6">
          Nasza historia w zdjęciach.
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-10">
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
