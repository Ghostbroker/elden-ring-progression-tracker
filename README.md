# Elden Ring Progression Tracker

A client-side web app that parses your Elden Ring PC save file to automatically track your progression. Upload your `.sl2` (or Seamless Coop `.co2`) save and instantly see which bosses you've defeated, graces you've discovered, and collectibles you've found.

**[Live Site](https://ghostbroker.github.io/elden-ring-progression-tracker/)**

## Features

- **Boss Tracking** - 208 bosses (base game + Shadow of the Erdtree DLC) grouped by region
- **Sites of Grace** - 418 grace locations grouped by region
- **Collectibles** - Cookbooks (104), Paintings (10), Whetblades (6), Gestures (52)
- **Seamless Coop Support** - Works with both vanilla `.sl2` and Seamless Coop `.co2` save files
- **DLC Toggle** - Show or hide Shadow of the Erdtree content
- **Filters** - Filter by completion status and region
- **Session Caching** - Saves your last session to LocalStorage so you can pick up where you left off
- **Fully Client-Side** - Your save file never leaves your browser

## How It Works

Elden Ring PC save files are BND4 archives containing 10 character slots. The app parses the binary format to read:

- **Profile summary** (character names, levels) from the USERDATA10 section
- **Event flags** (boss kills, grace discoveries, collectible pickups) via BST block mapping from each character slot

All parsing happens in-browser using the [File API](https://developer.mozilla.org/en-US/docs/Web/API/File_API). No data is transmitted anywhere.

## Save File Location

| Version | Path |
|---------|------|
| Vanilla | `C:\Users\[you]\AppData\Roaming\EldenRing\[SteamID]\ER0000.sl2` |
| Seamless Coop | `C:\Users\[you]\AppData\Roaming\EldenRing\[SteamID]\ER0000.co2` |

## Development

```bash
npm install
npm run dev       # Start dev server
npm test          # Run tests
npm run build     # Production build
```

## Tech Stack

- React 19 + Vite
- Tailwind CSS 4
- Vitest (64 tests)
- GitHub Pages (via GitHub Actions)

## Credits

- Event flag BST mapping data from [ER-Save-Lib](https://github.com/ClayAmore/ER-Save-Lib)
- Boss and grace flag IDs from [SoulSplitter](https://github.com/FrankvdStam/SoulSplitter)
- Wiki links point to [Fextralife](https://eldenring.wiki.fextralife.com/)

## License

MIT
