import RevealSection from "./RevealSection";
import handsClay from "@/assets/hands-clay.jpg";
import strawInsulation from "@/assets/straw-insulation.jpg";

const workshops = [
  {
    category: "budownictwo",
    title: "Budownictwo naturalne — fundament",
    date: "12–14 kwietnia 2026",
    location: "Stodoła Wymysłacz, Lubliniec",
    image: null,
  },
  {
    category: "glina",
    title: "Tynki gliniane — praktyka",
    date: "26–27 kwietnia 2026",
    location: "Stodoła Wymysłacz, Lubliniec",
    image: handsClay,
  },
  {
    category: "budownictwo",
    title: "Izolacje ze słomy",
    date: "10–11 maja 2026",
    location: "Stodoła Wymysłacz, Lubliniec",
    image: strawInsulation,
  },
  {
    category: "wspólnota",
    title: "Krąg decyzyjny — metoda konsensusu",
    date: "24 maja 2026",
    location: "Stodoła Wymysłacz, Lubliniec",
    image: null,
  },
];

const WorkshopsSection = () => (
  <section id="warsztaty" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
          Warsztaty
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight mb-16">
          Ucz się rękami.
        </h2>
      </RevealSection>

      <div className="grid md:grid-cols-2 gap-1">
        {workshops.map((w, i) => (
          <RevealSection key={w.title} delay={i * 0.1}>
            <div className="group cursor-pointer">
              {/* Image or terracotta block */}
              <div className="aspect-square overflow-hidden mb-4 bg-primary">
                {w.image ? (
                  <img
                    src={w.image}
                    alt={w.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex items-end p-6">
                    <span className="text-primary-foreground font-display font-bold text-lg">
                      {w.title}
                    </span>
                  </div>
                )}
              </div>

              <div className="pb-8">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary block mb-2">
                  {w.category}
                </span>
                <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                  {w.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">{w.date}</p>
                <p className="text-sm text-muted-foreground">{w.location}</p>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopsSection;
