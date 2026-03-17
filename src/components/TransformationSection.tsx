import RevealSection from "./RevealSection";
import kitchenBefore from "@/assets/kitchen-before.jpg";
import kitchenAfter from "@/assets/kitchen-after.jpg";
import barnBefore from "@/assets/barn-before.jpg";
import barnAfter from "@/assets/barn-after.jpg";
import workshopBefore from "@/assets/workshop-before.jpg";
import workshopAfter from "@/assets/workshop-after.jpg";

const transformations = [
  {
    title: "Kuchnia wspólnoty",
    description:
      "Z ciemnej, zniszczonej kuchni tworzymy jasne serce domu — miejsce, gdzie wspólnota spotyka się przy stole.",
    before: kitchenBefore,
    after: kitchenAfter,
  },
  {
    title: "Serce Stodoły",
    description:
      "Z zagraconego wnętrza stodoły powstaje ciepła przestrzeń do życia — z kominkiem, gliną na ścianach i drewnem nad głową.",
    before: barnBefore,
    after: barnAfter,
  },
  {
    title: "Warsztat budownictwa",
    description:
      "Kąt pełen rupiecidzieli staje się zorganizowanym warsztatem — miejscem, gdzie uczymy budować z natury.",
    before: workshopBefore,
    after: workshopAfter,
  },
];

const TransformationSection = () => (
  <section id="transformacja" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4 text-center">
          Transformacja
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight mb-6 text-center">
          Od tego, co <span className="text-primary italic">jest</span>, do tego, co{" "}
          <span className="text-primary italic">będzie</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-20">
          Stodoła Wymyślacz jest w trakcie remontu. Każda para rąk i każda złotówka przybliża nas do
          miejsca, które będzie służyło wspólnocie przez pokolenia. Zobacz, skąd startujemy — i
          dokąd zmierzamy.
        </p>
      </RevealSection>

      <div className="space-y-24">
        {transformations.map((t, i) => (
          <RevealSection key={t.title} delay={i * 0.1}>
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight mb-3">
                {t.title}
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm lg:text-base">
                {t.description}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              <div className="relative overflow-hidden rounded-sm">
                <span className="absolute top-4 left-4 bg-foreground/80 text-background text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 z-10">
                  Stan obecny
                </span>
                <img
                  src={t.before}
                  alt={`${t.title} — stan obecny`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-sm">
                <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 z-10">
                  Wizja
                </span>
                <img
                  src={t.after}
                  alt={`${t.title} — wizja`}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default TransformationSection;
