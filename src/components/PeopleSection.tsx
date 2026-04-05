import RevealSection from "./RevealSection";
import wizjaPro from "@/assets/wizja-pro.png";
import andrzejFoto from "@/assets/andrzej-foto.jpg";
import pawelFoto from "@/assets/pawel-foto.jpg";
import kubaFoto from "@/assets/kuba-foto.png";
import czaroFoto from "@/assets/czaro-foto.jpg";

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
    desc: "Projektant, grajek, filozof.",
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
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover"
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
          <h3 className="font-display font-bold text-2xl lg:text-3xl tracking-tight mb-4">
            Miejsce, które wzrasta
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-[65ch] text-lg mb-8">
            Stodoła jest w ciągłej budowie — tak jak wspólnota, która ją tworzy. Każdy warsztat
            to kolejna warstwa gliny na ścianie, kolejny krok ku samowystarczalności.
          </p>

          {/* Wizja image with FOR SALE ribbon on right half */}
          <div className="relative max-w-2xl overflow-hidden rounded-lg">
            <div className="grid grid-cols-2">
              {/* Left half - as is */}
              <div className="overflow-hidden">
                <img
                  src={wizjaPro}
                  alt="Wizja Stodoły Wymyślacz — Centrum Operacyjno-Kreatywne"
                  className="w-[200%] h-full object-cover object-left"
                />
              </div>
              {/* Right half - with FOR SALE ribbon */}
              <div className="relative overflow-hidden">
                <img
                  src={wizjaPro}
                  alt="Wizja Stodoły Wymyślacz — Strefa Chilloutu"
                  className="w-[200%] h-full object-cover object-right ml-[-100%]"
                />
                {/* Diagonal ribbon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div
                    className="bg-red-600 text-white font-bold uppercase tracking-widest text-sm py-2 w-[140%] text-center shadow-lg"
                    style={{ transform: "rotate(-35deg)" }}
                  >
                    For Sale
                  </div>
                </div>
                {/* Semi-transparent overlay */}
                <div className="absolute inset-0 bg-black/30 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </RevealSection>
    </div>
  </section>
);

export default PeopleSection;
