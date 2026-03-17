import { motion } from "framer-motion";
import clayTexture from "@/assets/clay-texture.jpg";

const quoteText = "„Potrzebujemy filozofii, która nie tylko opisuje świat, ale go integruje – tworząc pomost między nauką, duchowością i działaniem.\u201D";

const HeroSection = () =>
<section id="hero" className="relative min-h-screen flex items-center">
    {/* Background texture */}
    <div className="absolute inset-0 z-0">
      <img
      src={clayTexture}
      alt="Tekstura gliny"
      className="w-full h-full object-cover grayscale opacity-15" />
    </div>

    <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full py-[20vh]">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-8">
            Lubliniec, Śląsk
          </motion.p>

          <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
          className="font-display font-bold leading-[0.9] tracking-tighter mb-8"
          style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            STODOŁA
            <br />
            WYMYŚLACZ
          </motion.h1>

          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg leading-relaxed text-muted-foreground mb-12 max-w-[50ch]">
            Archiwum wiedzy wspólnot i niezależności
          </motion.p>

          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex flex-wrap gap-4">
            <a
            href="#dolacz"
            className="border border-foreground px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-foreground hover:text-background transition-colors duration-300">
              Dołącz
            </a>
            <a
            href="#warsztaty"
            className="border border-foreground/20 px-6 py-3 uppercase tracking-widest text-xs font-bold text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-300">
              Zobacz warsztaty
            </a>
          </motion.div>
        </div>
      </div>

      {/* Quote */}
      <motion.blockquote
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="mt-24 border-t border-foreground/10 pt-8 max-w-[65ch]">
        <p className="font-display lg:text-2xl leading-snug tracking-tight italic text-foreground/80 text-2xl text-left">
          {quoteText}
        </p>
        <p className="font-display lg:text-2xl leading-snug tracking-tight text-foreground/80 mt-4"><br></br>
          Henryk Skolimowski
        </p>
      </motion.blockquote>
    </div>
  </section>;


export default HeroSection;
