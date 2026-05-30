# dev-flashcards

An interactive flashcard app for studying developer concepts — built with vanilla HTML, CSS, and JavaScript.

## Features

- **5 categories** — JavaScript, Git, Linux, Networking, Security
- **3-D flip animation** — CSS `transform-style: preserve-3d` card flip on click
- **Score tracking** — mark each card correct or incorrect; see your ratio in real time
- **Progress bar** — visual indicator as you work through the deck
- **Shuffle** — randomize card order at any time
- **Keyboard shortcuts** — `Space` to flip, `→` correct, `←` incorrect
- **Completion screen** — score summary when you finish a deck
- **Zero dependencies** — no frameworks, no build step; just open `index.html`

## Getting Started

```bash
git clone https://github.com/jonatakuzi/dev-flashcards.git
cd dev-flashcards
```

Open `index.html` in your browser — no server required.

Or serve it locally:

```bash
npx serve .
# → Available at http://localhost:3000
```

## Project Structure

```
dev-flashcards/
├── index.html   # App shell and markup
├── style.css    # Dark theme, card flip animation, responsive layout
├── app.js       # State management, DOM interactions, keyboard shortcuts
└── cards.js     # Flashcard data organized by category
```

## Adding Cards

Open `cards.js` and add objects to any category array:

```js
{
  q: "What is event delegation?",
  a: "Attaching a listener to a parent element to handle events from children via bubbling."
}
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, 3-D transforms, flexbox) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Inter via Google Fonts |

## License

MIT
