# Wplace Overlay Script

A user script (Tampermonkey/Greasemonkey) that enhances the experience on the `wplace.live` website by allowing a custom image overlay on the screen. With this script, you can load a template, adjust its position, size, opacity, and blend mode, making collaborative art creation easier.

All settings, including the image, are saved locally in your browser so you don’t need to reconfigure everything on each visit.

![Example of the script interface on the wplace.live screen](https://i.imgur.com/DaCfs9Q.png)

## ✨ Features

- **Choose Local Image**: Load any image from your computer to be used as an overlay.
- **Adjustable Opacity**: Control the image transparency with a precise slider (from 0% to 100%).
- **Move and Resize**: Drag the image anywhere on the screen and freely resize it by pulling its edges.
- **Fine Size Control**:
    - Set the width and height in pixels.
    - Apply a scale (e.g., 1.5x, 2x) to maintain the original proportions.
    - Restore the image's original size with one click.
- **Blend Modes**: Switch between different `mix-blend-mode` options for better overlay visualization, including "Normal", "Overlay", "Difference", and "Exclusion".
- **Lock Position/Size**: Lock the overlay in place to prevent accidental moves and resizes while drawing.
- **Quick Centering**: Instantly center the overlay on the screen.
- **Data Persistence**: All your settings (image, position, size, opacity, blend mode, and lock state) are automatically saved to the browser’s `localStorage`.
- **Reset Everything**: Clear all settings and remove the overlay to start fresh.

## 🚀 Installation

To use this script, you first need a user script manager installed in your browser.

1. **Install a User Script Manager**:
    - [Tampermonkey](https://www.tampermonkey.net/) (recommended for Chrome, Firefox, Edge, Safari, Opera)
    - [Violentmonkey](https://violentmonkey.github.io/) (popular alternative)
    - [Greasemonkey](https://www.greasespot.net/) (for Firefox)

2. **Install the Wplace Overlay Script**:
    - Go to the [script page](https://greasyfork.org/pt-BR/scripts/544135-wplace-overlay).
    - Your script manager will detect the file and open a new tab.
    - Click the **"Install"** button.

Done! The script will activate automatically when you visit `wplace.live`.

## 📖 How to Use

1. Go to **[https://wplace.live/](https://wplace.live/)**.
2. A control panel will appear on the right side of the screen.
3. **Choose Image**: Click this button to open the file selector and load your reference image.
4. **Mode**: Toggle between blend modes to find the best visualization.
5. **Opacity Slider**: Drag to make the image more or less transparent.
6. **Locked/Editable**:
    - **🔓 Editable**: You can move the image (by clicking and dragging) and resize it (by pulling the edges).
    - **🔒 Locked**: The image becomes fixed, preventing accidental clicks and movement.
7. **Size Controls**:
    - **Px**: Enter width/height values and click "Apply" for an exact size.
    - **Scale**: Enter a factor (e.g., `0.5` for half, `2` for double) and click "Apply" to resize proportionally.
    - **Original Size**: Restores the image's original dimensions.
8. **Center on Screen**: Aligns the overlay to the center of the browser window.
9. **Reset Overlay**: Removes the image and clears all saved settings. The page will reload.

## ✍️ Author

- **FrodoCompacto** - [GitHub](https://github.com/FrodoCompacto)

## 📜 License

This project is open-source and distributed under the MIT License.