import RevealSection from "./RevealSection";

const people = [
  {
    name: "Andrzej",
    role: "Wizjoner i założyciel",
    desc: "Podróżnik po europejskich ekowiosekach. Mieszkał w Sieben Linden. Przywiózł na Śląsk ideę życia we wspólnocie z ziemią.",
    initials: "A",
  },
  {
    name: "Paweł Płaczek",
    role: "Budowniczy naturalny",
    desc: "Mistrz tynków glinianych i izolacji ze słomy. Prowadzi warsztaty budownictwa naturalnego. Wierzy, że dom powinien oddychać.",
    initials: "PP",
  },
  {
    name: "Kuba",
    role: "Współtwórca",
    desc: "Łączy technologię z naturą. Wspiera samowystarczalność energetyczną i dokumentuje wiedzę archiwum Stodoły.",
    initials: "K",
  },
];

const PeopleSection = () => (
  <section id="ludzie" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
          Ludzie
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-4xl tracking-tight mb-16">
          Twarze Stodoły
        </h2>
      </RevealSection>

      <div className="grid md:grid-cols-3 gap-1">
        {people.map((person, i) => (
          <RevealSection key={person.name} delay={i * 0.15}>
            <div className="border-t border-foreground/10 pt-8 pb-12">
              {/* Initials block */}
              <div className="w-20 h-20 bg-primary flex items-center justify-center mb-6">
                <span className="text-primary-foreground font-display font-bold text-xl">
                  {person.initials}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight mb-1">
                {person.name}
              </h3>
              <p className="text-xs uppercase tracking-widest font-bold text-primary mb-4">
                {person.role}
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm max-w-[40ch]">
                {person.desc}
              </p>
            </div>
          </RevealSection>
        ))}
      </div>

      {/* Banner */}
      <RevealSection delay={0.5}>
        <div className="mt-16 border-t border-foreground/10 pt-12">
          <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-4">
            Miejsce, które rośnie
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-[65ch] text-lg">
            Stodoła jest w ciągłej budowie — tak jak wspólnota, która ją tworzy. Każdy warsztat
            to kolejna warstwa gliny na ścianie, kolejny krok ku samowystarczalności.
          </p>
        </div>
      </RevealSection>
    </div>
  </section>
);

export default PeopleSection;
