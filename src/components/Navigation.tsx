import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSw from "@/assets/logo-sw.png";
import buycoffeeIcon from "@/assets/buycoffee-icon.png";

const navLinks = [
  { label: "O miejscu", href: "#o-miejscu" },
  { label: "Warsztaty", href: "#warsztaty" },
  { label: "Ludzie", href: "#ludzie" },
];

const Navigation = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 100);
      setLastScrollY(currentY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            exit={{ y: -80 }}
            transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
            className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-foreground/10"
          >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
              <a href="#" className="flex items-center gap-2 font-display font-bold text-sm tracking-tight">
                <img src={logoSw} alt="Logo Stodoła Wymyślacz" className="h-8 w-8" />
                STODOŁA WYMYŚLACZ
              </a>
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs uppercase tracking-widest font-semibold text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="/Projekt_Nowego_Spoleczenstwa.pdf"
                  download
                  className="border border-foreground px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  Projekt nowej struktury społecznej
                </a>
                <a
                  href="#dolacz"
                  className="border border-foreground px-6 py-2 uppercase tracking-widest text-xs font-bold hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  Dołącz
                </a>
                <a
                  href="https://buycoffee.to/cezarymackiewicz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors duration-300"
                  title="Wesprzyj nas kawą"
                >
                  <img src={buycoffeeIcon} alt="Buy Coffee" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Floating "Dołącz" link - bottom right */}
      <AnimatePresence>
        {!visible && (
          <motion.a
            href="#dolacz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 right-8 z-50 text-xs uppercase tracking-widest font-bold text-foreground hover:text-primary transition-colors duration-300"
          >
            Dołącz [+]
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
