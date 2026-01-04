# random-bg-generator
 # 🎨 Random Color Generator

This is a simple, interactive web app that shows off how you can use arrays and math functions in JavaScript to change the DOM on the fly.

## ✨ Features

- **Random Color Selection:** Pulls from a list of hand-picked hex codes, so the background always looks good.
- **Responsive Layout:** Uses a two-column Bootstrap grid. The instructions and color display areas shift nicely between mobile and desktop.
- **Clean UI:** There’s a rounded button with smooth, custom CSS styling that highlights on hover.
- **Full Height Display:** The color display area stretches to fill the entire screen.

## 🛠️ Built With

- **HTML5:** Sets up the layout with Bootstrap 4 containers.
- **CSS3:** Handles the look—background styles, button shapes, and fonts.
- **Bootstrap 4:** For the responsive grid and flex utilities.
- **JavaScript (Vanilla):** Handles picking random colors and updating the background.

## 🚀 How It Works

Everything happens in `Random Color Generator.js`:

1. **Storage:** There’s an array (`bgColorsArray`) with eight different hex color codes.
2. **Randomization:** When you click the button, the script uses `Math.random()` to pick a number, then `Math.ceil()` to get a valid array index.
3. **Boundary Handling:** The code makes sure the index never goes out of bounds.
4. **UI Update:** It sets the `backgroundColor` of the `bgContainer` element to the color at that index.
