# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2025-12-06

### Changed
- **BREAKING**: Complete rewrite focusing exclusively on YouTube video summarization
- Removed all non-YouTube platform support (Google, Bing, Bilibili, PubMed, GitHub, etc.)
- Simplified extension to only work on YouTube.com
- Updated branding from "Glarity" to "YouTube Summary with ChatGPT"
- Streamlined codebase by removing unused features and dependencies
- Simplified to English-only (removed 50+ locale files to avoid complexity)

### Removed
- Search engine integration (Google, Bing, Yahoo, etc.)
- Generic web page summary functionality
- Bilibili video support
- Article/news site support
- Page summary floating button
- Comment summary features for Amazon and other sites
- Unnecessary locale strings and configurations

### Features
- YouTube video transcript extraction
- AI-powered video summaries using ChatGPT
- Key moment identification
- Multiple language transcript support
- Customizable AI prompts
- Dark mode support
- Copy transcript to clipboard
- Support for iOS/macOS Safari

### Technical
- Updated manifest to only match YouTube URLs
- Cleaned up configuration files
- Simplified component structure
- Removed article-extractor dependencies
- Updated all localization files
