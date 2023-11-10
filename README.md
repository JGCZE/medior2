# Medior Next.js test

Test pro mediora na Next.js

## Zadání
- forkněte si tento repozitář
- nezapomeňte, že vytváříte první veřejnou verzi, takže se snažte o co nejlepší kód
- upravte i CHANGELOG.md a přidejte si do něj své jméno
- používejte Typescript **REVIEW: jsou tu TS chyby - viz npm run ts**
- používejte CSS moduly s Tailwindem (viz komponenta `Home`)
- pro komponenty používejte atomický design (nepoužívejte atoms, molecules, organisms, templates, pages, použijte spíše složky ui, shared a components).
- subkomponenty vkládejte do složky `components` (např. `UserList/components/UserCard/UserCard.tsx`) atp.
- všechny karty budou mít hover efekt podle `/taskImages/hover.png`
- vytvořte komponentu `UserList` která bude zobrazovat seznam uživatelů na hlavní stránce
  - seznam bude SSR
  - seznam uživatelů bude načtený z API `usersUrl` (viz. `/next.config.js` a `/src/utils/config.ts`)
  - vzhled seznamu podle `/taskImages/userList.png`.
  - kliknutí na odkaz *Show on map* povede na Mapy.cz, kde se podle GPS souřadnic zobrazí pozice uživatele (např. `https://mapy.cz/turisticka?source=coor&id=15.424045866210946%2C50.18830352887631&x=15.4280048&y=50.1874036&z=16`) **REVIEW: odkaz na mapy.cz nefunguje**
  - Kliknutí na tlačítko *Read articles* povede na stránku `/articles/[userId]`, kde bude seznam článků
- vytvořte komponentu `ArticleList` která bude zobrazovat seznam článků konkrétního uživatele na stránce `/articles/[userId]`
  - seznam bude SSR **REVIEW: není SSR**
  - seznam článků bude načtený z API `articlesUrl` (viz. `/next.config.js` a `/src/utils/config.ts`)
  - jméno autora může být načteno z API `userUrl` (viz. `/next.config.js` a `/src/utils/config.ts`) a to v případě, že se na stránku přistoupí přímo (např. `/articles/1`). Pokud se půjde přes hlavní stránku, tak se jméno autora načte z kontextu (*React.createContext*).
  - vzhled seznamu podle `/taskImages/articlesList.png`.
- funkční aplikaci nahrejte na svůj GitHub / Gitlab a do **sedmi dnů od obdržení zadání** pošlete odkaz na repozitář na e-mail <vilem.lipold@studentagency.cz>
- v případě problémů a dotazů volejte na +420 606 753 180 (8.00 – 21.00).

## Instalation

```bash
git clone git@github.com:Vylda/medior2.git
cd medior2
npm install
```

## Development

### Development server

```bash
npm run devOpen
```

or

```bash
npm run dev
```

### Linting
- automatic before commit and push
- manual

```bash
npm run eslint
npm run stylelint
npm run ts
```

### Endpoints
saved in `.env` files.

You can use it in your code like this:

```typescript
import publicRuntimeConfig from '@/utils/config';
…
const { usersUrl } = publicRuntimeConfig;
```

## Deployment

```bash
npm run build
npm start
```
