import RevealSection from "./RevealSection";
import barnInterior from "@/assets/barn-interior.jpg";

const AboutSection = () => (
  <section id="o-miejscu" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-6">
          O miejscu
        </p>
      </RevealSection>

      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <RevealSection delay={0.1}>
            <h2 className="font-display font-bold text-3xl lg:text-5xl leading-[0.95] tracking-tight mb-10">
              Stodoła na końcu drogi,
              <br />
              na początku czegoś nowego.
            </h2>
          </RevealSection>

          <RevealSection delay={0.2}>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground max-w-[65ch]">
              <p>
                Wszystko zaczęło się od inspiracji ruchem ekowiosek — od Sieben Linden w Niemczech,
                od podróży Andrzeja po wspólnotach Europy, od pytania: czy da się żyć inaczej?
              </p>
              <p>
                W Lublińcu na Śląsku powstało miejsce, które nie chce być produktem. Stodoła Wymyślacz
                to archiwum żywej wiedzy — o tym, jak budować domy z gliny, jak podejmować decyzje
                w kręgu, jak wrócić do ziemi.
              </p>
              <p>
                To miejsce spotkań Braterstw Ludzi Wolnych, warsztatów budownictwa naturalnego
                i każdego, kto szuka prawdziwej alternatywy.
              </p>
            </div>
          </RevealSection>

          <RevealSection delay={0.3}>
            <p className="mt-12 font-display text-xl italic text-foreground/70 leading-snug max-w-[50ch]">
              Budujemy miejsce, w którym ludzie uczą się żyć razem — z ziemią, z sobą, z odwagą.
              Nie jako projekt. Jako sposób życia.
            </p>
          </RevealSection>
        </div>

        <div className="lg:col-span-5 mt-12 lg:mt-0">
          <RevealSection delay={0.4}>
            <img
              src={barnInterior}
              alt="Wnętrze stodoły z drewnianą konstrukcją"
              className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </RevealSection>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
