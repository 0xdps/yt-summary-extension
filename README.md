# YouTube Summary with ChatGPT

An AI-powered browser extension that generates intelligent summaries of YouTube videos using ChatGPT. Get instant video summaries, key takeaways, and timestamps without watching the entire video.

## Supported Platform

- YouTube (youtube.com)

## Installation

### From Source

1. Clone this repository
2. Install dependencies: `npm install`
3. Build the extension: `npm run build`
4. Load the extension in your browser (see instructions below)

## Features

- YouTube video transcript extraction
- AI-powered video summaries
- Key moment identification
- Multiple language transcript support
- Support for iOS Safari / macOS Safari
- Supports the official OpenAI API (GPT-3.5-turbo/text-davinci-003)
- Supports ChatGPT Plus
- Markdown rendering
- Code highlights
- Dark mode
- Copy transcript to clipboard
- Switch languages
- Customizable AI prompts

## How It Works

1. Navigate to any YouTube video
2. The extension automatically extracts the video transcript
3. ChatGPT analyzes the content and generates a comprehensive summary
4. View the summary directly on the YouTube page

## Troubleshooting

### No Transcript Available

Some YouTube videos may not have captions/transcripts available. The extension requires videos to have captions enabled to generate summaries.

### Brave Browser Users

If the extension doesn't work in Brave, disable "Prevent sites from fingerprinting me based on my language preferences" in `brave://settings/shields`

## Development

### Build from Source

```bash
# Clone the repository
git clone <your-repo-url>
cd chatgpt-youtube-summary-extension

# Install dependencies
npm install

# Build for development
npm run dev

# Build for production
npm run build
```

### Load in Chrome/Edge

1. Go to `chrome://extensions/`.
2. At the top right, turn on `Developer mode`.
3. Click `Load unpacked`.
4. Find and select extension folder(`build/chromium/`).

### Firefox

1. Go to `about:debugging#/runtime/this-firefox`.
2. Click `Load Temporary Add-on`.
3. Find and select the extension file(`build/firefox.zip`).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[GPL-3.0 license](LICENSE).
