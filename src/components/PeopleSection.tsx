import RevealSection from "./RevealSection";
import wizjaAdv from "@/assets/wizja-adv.png";
import andrzejFoto from "@/assets/andrzej-foto.jpg";
import pawelFoto from "@/assets/pawel-foto.jpg";
import kubaFoto from "@/assets/kuba-foto.png";
import czaroFoto from "@/assets/czaro-portret.jpg.asset.json";

const people = [
  {
    name: "Andrzej",
    role: "Wizjoner i założyciel",
    desc: "Podróżnik po europejskich ekowiosekach. Mieszkał w Sieben Linden.",
    photo: andrzejFoto,
  },
  {
    name: "Paweł Płaczek",
    role: "Budowniczy naturalny",
    desc: "Podróżnik, nurek, paralotniarz.",
    photo: pawelFoto,
  },
  {
    name: "Kuba",
    role: "Współtwórca",
    desc: "Mistrz tynków glinianych i izolacji ze słomy. Prowadzi warsztaty budownictwa naturalnego.",
    photo: kubaFoto,
  },
  {
    name: "Czaro",
    role: "Projektant",
    desc: "Web designer, gitarzysta-amator, filozof akademicki, jogin.",
    photo: czaroFoto,
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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
        {people.map((person, i) => (
          <RevealSection key={person.name} delay={i * 0.15}>
            <div className="border-t border-foreground/10 pt-8 pb-12">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 bg-muted">
                <img
                  src={typeof person.photo === "string" ? person.photo : person.photo.url}
                  alt={person.name}
                  className={`w-full h-full object-cover ${person.name === "Czaro" ? "object-[32%_12%] scale-[2.1] translate-x-[18%] translate-y-[18%]" : ""}`}
                />
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

      <RevealSection delay={0.5}>
        <div className="mt-16 border-t border-foreground/10 pt-12">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start">
            <div className="lg:col-span-6">
              <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-4">
                Miejsce, które wzrasta
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Stodoła jest w ciągłej budowie — tak jak wspólnota, która ją tworzy. Każdy warsztat
                to kolejna warstwa gliny na ścianie, kolejny krok ku samowystarczalności.
              </p>
            </div>
            <div className="lg:col-span-3 mt-8 lg:mt-0">
              <img
                src={wizjaAdv}
                alt="Wizja Centrum Operacyjno-Kreatywnego"
                className="w-full max-w-[240px] rounded-lg mx-auto"
              />
            </div>
            <div className="lg:col-span-3 mt-8 lg:mt-0">
              <div className="border border-foreground/10 rounded-lg p-5 bg-background shadow-sm">
                <p className="font-display text-lg font-bold tracking-tight mb-3 leading-snug">
                  Co naprawdę oznacza jedność w codziennym życiu? 🌿
                </p>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                  Sztuka Jedności w Stodole Wymyślacz to coś więcej niż słowa — to codzienna praktyka i poszukiwanie harmonii ze sobą, innymi oraz naturą. Nasze działania i duchowy wymiar tego miejsca mocno czerpią z filozofii zebranej na stronie FEAP:
                </p>
                <a
                  href="http://www.feap.paraveda.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors"
                >
                  👉 http://www.feap.paraveda.net/
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  </section>
);

export default PeopleSection;
