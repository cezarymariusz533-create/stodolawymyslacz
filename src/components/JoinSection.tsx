import RevealSection from "./RevealSection";

const actions = [
  {
    title: "Przyjedź na warsztaty",
    desc: "Naucz się budować z gliny i słomy. Poczuj, jak pachnie praca z ziemią.",
    cta: "Zobacz terminy",
    href: "#warsztaty",
  },
  {
    title: "Współtwórz miejsce",
    desc: "Zostań częścią wspólnoty. Przyjedź na wolontariat, zostań na dłużej.",
    cta: "Napisz do nas",
    href: "#",
  },
  {
    title: "Wesprzyj projekt",
    desc: "Każda złotówka to cegła (a raczej garść gliny) w budowie Stodoły.",
    cta: "Dowiedz się więcej",
    href: "#",
  },
];

const JoinSection = () => (
  <section id="dolacz" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
          Dołącz
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-16">
          Trzy sposoby, żeby zacząć
        </h2>
      </RevealSection>

      <div className="grid md:grid-cols-3 gap-1">
        {actions.map((action, i) => (
          <RevealSection key={action.title} delay={i * 0.15}>
            <div className="border-t border-foreground/10 pt-8 pb-12">
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary mb-4 block">
                [{String(i + 1).padStart(2, "0")}]
              </span>
              <h3 className="font-display font-bold text-xl tracking-tight mb-3">
                {action.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-[40ch]">
                {action.desc}
              </p>
              <a
                href={action.href}
                className="border border-foreground px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-foreground hover:text-background transition-colors duration-300 inline-block"
              >
                {action.cta}
              </a>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default JoinSection;
