import RevealSection from "./RevealSection";
import joga1 from "@/assets/warsztaty-joga-1.jpg";
import joga2 from "@/assets/warsztaty-joga-2.jpg";
import joga3 from "@/assets/warsztaty-joga-3.jpg";

const archiveWorkshops = [
  {
    title: "Joga na łące",
    description:
      "Praktyka jogi na świeżym powietrzu — asany, oddech i relaksacja w otoczeniu natury.",
    photos: [
      { src: joga1, alt: "Stojące asany na łące w słońcu" },
      { src: joga2, alt: "Skłony i rozciąganie w trawie" },
      { src: joga3, alt: "Savasana — relaksacja na trawie o zachodzie" },
    ],
  },
];

const WorkshopsSection = () => (
  <section id="warsztaty" className="border-t border-foreground/10 py-[15vh]">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <RevealSection>
        <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-4">
          Archiwum
        </p>
        <h2 className="font-display font-bold text-3xl lg:text-5xl tracking-tight mb-16">
          Warsztaty, które się odbyły.
        </h2>
      </RevealSection>

      <div className="space-y-24">
        {archiveWorkshops.map((workshop, wi) => (
          <RevealSection key={workshop.title} delay={wi * 0.15}>
            <div>
              <h3 className="font-display font-bold text-xl lg:text-2xl tracking-tight mb-3">
                {workshop.title}
              </h3>
              <p className="text-muted-foreground max-w-2xl mb-8">
                {workshop.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {workshop.photos.map((photo) => (
                  <figure key={photo.alt} className="group">
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <figcaption className="text-xs text-muted-foreground mt-2 font-mono">
                      {photo.alt}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopsSection;
