import RevealSection from "./RevealSection";

const pillars = [
  {
    title: "Wspólnoty",
    desc: "Metoda kręgu, konsensus, Braterstwa Ludzi Wolnych. Uczenie się życia razem — bez hierarchii, z zaufaniem.",
  },
  {
    title: "Samowystarczalność",
    desc: "Energia odnawialna, permakultura, off-grid. Budowanie niezależności od systemu, krok po kroku.",
  },
  {
    title: "Warsztaty",
    desc: "Budownictwo naturalne, tynki gliniane, izolacje ze słomy. Wiedza przekazywana rękami, nie slajdami.",
  },
  {
    title: "Archiwum wiedzy",
    desc: "Dokumentacja doświadczeń, metod i historii ruchu ekowiosek. Żywa biblioteka wspólnotowości.",
  },
];

const PillarsSection = () => (
  <section id="dzialania" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
          Obszary działania
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-16">
          Cztery filary Stodoły
        </h2>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
        {pillars.map((pillar, i) => (
          <RevealSection key={pillar.title} delay={i * 0.1}>
            <div className="bg-background p-8 lg:p-12 min-h-[200px]">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary mb-4 block">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-[45ch]">
                {pillar.desc}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default PillarsSection;
