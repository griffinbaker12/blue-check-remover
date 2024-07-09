# X Chrome Extension

## Inspiration

This project was inspired by comments I saw on X from users who expressed enjoying their feed more with fewer blue checkmarks visible.

## Features

- Automatically hides blue verification checkmarks on X profiles and posts
- Auto-reloads the feed so that you don't have to manually click "Load [more] tweets"
- Operates in real-time, affecting both existing and dynamically loaded content

## Installation

To install this extension in developer mode:

1. Clone this repository or download the source code.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" using the toggle switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

Once installed, the extension will automatically start working when you visit X. You should notice the absence of blue checkmarks on verified accounts.

## Project Structure (Relevant Files)

```
blue-check-remover/
├── manifest.json
├── content.js
└── icon.svg
```

- `manifest.json`: Defines the extension's properties and permissions.
- `content.js`: Contains the logic for removing blue checkmarks.
- `icon.svg`: The extension's icon, combining a Twitter blue check with an eraser.

## Disclaimer

This extension is not affiliated with, endorsed by, or connected to X in any way. It is an independent project created for educational purposes and to enhance user experience based on community feedback.

## License

[MIT License](LICENSE)
