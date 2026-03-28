import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import clayTexture from "@/assets/clay-texture.jpg";
import heroVideo from "@/assets/stodola-wymyslacz-1.mp4";

const quoteText = "„Potrzebujemy filozofii, która nie tylko opisuje świat, ale go integruje – tworząc pomost między nauką, duchowością i działaniem.\u201D";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={clayTexture}
          alt="Tekstura gliny"
          className="w-full h-full object-cover grayscale opacity-15"
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 w-full py-[20vh]">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-8"
            >
              LUBLINIEC, ŚLĄSK. UNITE@WP.PL
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.3 }}
              className="font-display font-bold leading-[0.9] tracking-tighter mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
            >
              STODOŁA
              <br />
              WYMYŚLACZ
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg leading-relaxed text-muted-foreground mb-12 max-w-[50ch]"
            >
              Archiwum wiedzy wspólnot i niezależności
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#dolacz"
                className="border border-foreground px-6 py-3 uppercase tracking-widest text-xs font-bold hover:bg-foreground hover:text-background transition-colors duration-300"
              >
                Dołącz
              </a>
              <a
                href="#warsztaty"
                className="border border-foreground/20 px-6 py-3 uppercase tracking-widest text-xs font-bold text-muted-foreground hover:border-foreground hover:text-foreground transition-colors duration-300"
              >
                Zobacz warsztaty
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="lg:col-span-5 mt-12 lg:mt-0"
          >
            <div className="relative rounded-[32px] border border-white/30 overflow-hidden shadow-[0_20px_60px_rgba(15,15,15,0.45)] bg-muted">
              <video
                ref={(el) => {
                  if (el && !videoRef.current) {
                    videoRef.current = el;
                    el.muted = true;
                    el.play().then(() => {
                      el.muted = false;
                      setIsMuted(false);
                    }).catch(() => {});
                  }
                }}
                src={heroVideo}
                autoPlay
                loop
                playsInline
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors z-10"
                aria-label={isMuted ? "Włącz dźwięk" : "Wycisz"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/70">
                  Wizja
                </p>
                <p className="text-lg font-semibold">Stodoła Wymyślacz</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24 border-t border-foreground/10 pt-8 max-w-[65ch]"
        >
          <p className="font-display lg:text-2xl leading-snug tracking-tight italic text-foreground/80 text-2xl text-left">
            {quoteText}
          </p>
          <p className="font-display lg:text-2xl leading-snug tracking-tight text-foreground/80 mt-4">
            <br />
            Henryk Skolimowski                                                                                                                                      unite@wp.pl
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default HeroSection;
