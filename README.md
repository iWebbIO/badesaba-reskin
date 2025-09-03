# Badesaba Reskinned

A complete dark-themed reskin of [badesaba.ir](https://badesaba.ir), focusing on the calendar and removing clutter.

## Features

- **Dark Theme**: Applies a modern dark theme to the entire site using custom CSS variables.
- **Clutter Removal**: Removes unnecessary elements like headers, footers, weather, news, banners, and more to focus on the calendar.
- **Layout Adjustments**: Expands the calendar to full width and adjusts margins for better usability.
- **Dynamic Updates**: Uses a MutationObserver to reapply fixes when the page content changes dynamically.
- **Custom Styling**: Enhances buttons, forms, events, and other UI elements with consistent dark theme colors.

## Installation

### For Chrome/Chromium-based Browsers

1. Download or clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files (`manifest.json`, `content.js`, `styles.css`).
5. The extension should now be loaded and active on `https://badesaba.ir/*`.

## Usage

Once installed:
1. Visit [badesaba.ir](https://badesaba.ir).
2. The extension will automatically apply the new skin.
3. The calendar will be centered and expanded for better visibility.
4. All changes are applied dynamically, so they persist even if the page updates via AJAX or similar.

![Badesaba Reskinned in Desktop mode](https://raw.githubusercontent.com/iWebbIO/badesaba-reskin/refs/heads/main/screenshots/max.jpeg)
![Badesaba Reskinned in Mobile mode](https://raw.githubusercontent.com/iWebbIO/badesaba-reskin/refs/heads/main/screenshots/min.jpeg)
