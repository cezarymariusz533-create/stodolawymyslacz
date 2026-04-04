import logoSw from "@/assets/logo-sw.png";

const Footer = () =>
<footer className="border-t border-foreground/10 py-16">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5 mb-8 lg:mb-0">
          <div className="flex items-center gap-3 mb-2">
            <img src={logoSw} alt="Logo Stodoła Wymyślacz" className="h-10 w-10" />
            <h4 className="font-display font-bold text-lg tracking-tight">STODOŁA WYMYŚLACZ</h4>
          </div>
          <a href="mailto:unite@wp.pl" className="text-sm font-bold text-foreground hover:underline">unite@wp.pl</a>
          <p className="text-sm text-muted-foreground">
            Lubliniec, Śląsk, Polska
          </p>
        </div>
        <div className="lg:col-span-4">
          <div className="flex gap-8">
            <a href="#warsztaty" className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors">
              Warsztaty
            </a>
            <a href="#dolacz" className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors">
              Dołącz
            </a>
            <a href="#" className="text-xs uppercase tracking-widest font-bold text-muted-foreground hover:text-foreground transition-colors">
              Kontakt
            </a>
          </div>
        </div>
        <div className="lg:col-span-3 mt-8 lg:mt-0 lg:text-right">
          <p className="text-xs text-muted-foreground">
            © 2026 Stodoła Wymyślacz
          </p>
          <a href="mailto:unite@wp.pl" className="text-xs font-bold text-foreground hover:underline block mt-1">
            unite@wp.pl
          </a>
          <a href="tel:+48576365711" className="text-xs font-bold text-foreground hover:underline block mt-1">
            576 365 711 — Czarek
          </a>
          <a href="tel:+48733469669" className="text-xs font-bold text-foreground hover:underline block mt-1">
            733 469 669 — Kuba
          </a>
        </div>
      </div>
    </div>
  </footer>;


export default Footer;