# Font System Usage Guide

## Available Fonts

Your website now has these professional fonts configured:

### 1. **Playfair Display** (`font-playfair`)
- **Usage**: Main headings, section titles, elegant headlines
- **Weight**: 600-900
- **Style**: Serif, premium, sophisticated
- **Currently used on**: Page titles, section headings, brand name

### 2. **Inter** (`font-inter`)
- **Usage**: Body text, buttons, UI elements, descriptions
- **Weight**: 300-900
- **Style**: Sans-serif, modern, clean
- **Currently used on**: All body text, paragraphs, descriptions

### 3. **Poppins** (`font-poppins`)
- **Usage**: Alternative sans-serif for specific emphasis
- **Weight**: 400-900
- **Style**: Sans-serif, friendly, modern
- **Currently used on**: Some interactive elements

### 4. **Satisfy** (`font-satisfy`) - NEW!
- **Usage**: Accent text, special highlights, premium touches
- **Style**: Cursive, elegant, handwriting-style
- **Perfect for**: 
  - Testimonials or quotes
  - Special offers or announcements
  - Brand accents
  - Call-to-action emphasis

## Usage Examples

```jsx
// Main heading
<h1 className="font-playfair text-4xl font-bold">Welcome to Fushiguro</h1>

// Body text
<p className="font-inter text-base">This is regular content text.</p>

// Cursive accent
<p className="font-satisfy text-2xl text-pink-500">Premium Quality Service</p>

// Button text
<button className="font-inter font-semibold">Click Me</button>
```

## Font Hierarchy

**Headings**: Playfair Display (elegant, premium feel)
**Body**: Inter (readable, modern)
**Accents**: Satisfy (special highlights)
**Fallback**: Poppins (alternative emphasis)

## Color + Font Combinations That Work Well

- **Dark text + Playfair** = Professional headings
- **Pink/Purple gradient + Playfair** = Premium aesthetic
- **Gray text + Inter** = Clear body content
- **Gold/Pink text + Satisfy** = Eye-catching accents

## Where to Add Satisfy Font

Consider using `font-satisfy` in:
- Hero section subtitle or tagline
- Special announcements
- Quote or testimonial sections
- Premium service highlights
- Section transitions or decorative text
