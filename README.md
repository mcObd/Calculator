# Simple Calculator

A beautiful, responsive web calculator with modern styling and smooth animations. Built with plain HTML, CSS and vanilla JavaScript.

## Features

- Responsive layout for mobile and desktop
- Clear (`AC`), delete (`DEL`) and percentage operations
- Basic arithmetic: add, subtract, multiply, divide
- Clean, accessible UI with keyboard-friendly buttons
- Dark mode support via `prefers-color-scheme`

## Files

- `index.html` — Main HTML page and markup for the calculator UI.
- `styles.css` — All styling, animations and responsive rules.
- `Calculator.js` — Calculator logic (button handlers and computation).

## Quick start

Open `index.html` in your browser:

- Double-click `index.html` or open it with your browser of choice.

Optional: serve locally to avoid file:// behaviour (recommended for testing JS in some browsers):

```powershell
# from project folder
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

(If you don't have Python, any static server or Live Server extension for VS Code will work.)

## Usage

- Click numbers and operators to build an expression.
- `AC` clears everything. `DEL` removes the last digit/character.
- `=` computes the current operation.
- The `%` button currently behaves as a modulo operation between the previous and current values.

## Notes & known quirks

- The `%` behavior is implemented as JavaScript's `%` (remainder). If you want percentage-of behavior (e.g. 50% of 200), the logic would need to be adapted.
- The calculator uses Unicode operator symbols (×, ÷, −) in the UI and maps them to operations in the script.

## Contributing

Small improvements welcome: keyboard input handling, improved percentage semantics, operator chaining edge cases, unit tests, or accessibility enhancements.

## License

MIT — feel free to reuse and adapt.
