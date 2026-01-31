# Century New Website

A modern real estate website built with HTML, CSS, and JavaScript featuring a dynamic navbar and animated hero section.

## Features

- **Dynamic Navbar**: Changes style on scroll (transparent overlay → solid dark red)
- **Hero Section**: Fade animation between two background images
- **Responsive Design**: Mobile-friendly layout
- **Modern UI**: Clean and professional design

## Project Structure

```
CenturyNew/
├── index.html                    # Main HTML file
├── styles/                       # Global styles
│   └── globals.css
├── components/                   # Component sections
│   ├── navbar/                  # Navbar section
│   │   ├── navbar.css
│   │   └── navbar.js
│   └── hero/                    # Hero section
│       ├── hero.css
│       └── hero.js
└── images/                      # Image files
    ├── hero-bg-1.jpg
    └── hero-bg-2.jpg
```

## Getting Started

1. **Add your hero background images** to `images/` folder:
   - `hero-bg-1.jpg` - First hero background image
   - `hero-bg-2.jpg` - Second hero background image

2. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```

3. **View the website**:
   - Open [http://localhost:8000](http://localhost:8000) in your browser

## Sections

Each section has its own folder in the `components/` directory:
- `navbar/` - Navigation bar component (CSS + JS)
- `hero/` - Hero section component (CSS + JS)

Add more sections by creating new folders in `components/` following the same structure.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The navbar automatically changes style when scrolling down
- Hero images fade between each other every 5 seconds
- All styles are responsive and mobile-friendly
