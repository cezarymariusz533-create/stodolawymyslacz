import { useState, useEffect } from "react";

const sections = [
  { id: "hero", code: "SW-00", label: "WEJŚCIE" },
  { id: "o-miejscu", code: "SW-01", label: "MIEJSCE" },
  { id: "warsztaty", code: "SW-02", label: "WARSZTATY" },
  { id: "ludzie", code: "SW-03", label: "LUDZIE" },
  { id: "dolacz", code: "SW-04", label: "DOŁĄCZ" },
];

const ArchiveSidebar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-0 top-0 h-screen w-[140px] hidden xl:flex flex-col justify-center items-end pr-6 z-40 pointer-events-none">
      <div className="flex flex-col gap-4 font-body">
        {sections.map(({ id, code, label }) => (
          <div
            key={id}
            className={`text-right transition-all duration-500 ${
              active === id
                ? "text-foreground opacity-100"
                : "text-muted-foreground opacity-40"
            }`}
          >
            <div className="text-[10px] tracking-widest font-bold">{code}</div>
            <div className="text-[9px] tracking-wider uppercase">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArchiveSidebar;
