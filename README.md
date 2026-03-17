# Stodoła Wymyślacz

Strona internetowa miejsca w Lublińcu na Śląsku — archiwum wiedzy wspólnot i niezależności.

## O projekcie

Stodoła Wymyślacz to strona wizytówka miejsca, które powstało z inspiracji ruchem ekowiosek. Promuje:
- Budownictwo naturalne (z gliny, słomy)
- Wspólnotowy styl życia
- Warsztaty i spotkania
- Filozofię Henryka Skolimowskiego

## Technologie

- **Vite** — narzędzie budowania
- **React 18** — biblioteka UI
- **TypeScript** — typowanie
- **Tailwind CSS** — style
- **shadcn/ui** — komponenty UI
- **Framer Motion** — animacje
- **Radix UI** — dostępne komponenty

## Instalacja

```bash
# Instalacja zależności
npm install

# Uruchomienie serwera deweloperskiego
npm run dev

# Budowanie produkcyjne
npm run build

# Uruchomienie testów
npm run test
```

## Struktura projektu

```
src/
├── assets/          # Obrazy i zasoby
├── components/      # Komponenty React
│   ├── ui/          # Komponenty shadcn/ui
│   └── *.tsx        # Główne sekcje strony
├── hooks/           # Własne hooki React
├── lib/             # Funkcje pomocnicze
├── pages/           # Strony aplikacji
└── test/            # Testy
```

## Sekcje strony

- **HeroSection** — główny baner z cytatem
- **AboutSection** — o miejscu
- **PillarsSection** — filary projektu
- **TransformationSection** — transformacja budynku
- **WorkshopsSection** — warsztaty
- **GallerySection** — galeria zdjęć
- **PeopleSection** — ludzie
- **JoinSection** — dołączenie
- **Footer** — stopka

## Licencja

MIT
