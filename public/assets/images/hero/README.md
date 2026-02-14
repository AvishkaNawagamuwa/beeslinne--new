# Hero Carousel Background Images

## Current Setup - Premium Unsplash Images

The hero carousel now uses high-quality professional stock images:

### Slide 1: Herbal Products Theme
- **Image**: Fresh herbal leaves with natural bokeh
- **Source**: `https://images.unsplash.com/photo-1505751172876-fa1923c5c528`
- **Overlay**: Gold to dark green gradient (75-85% opacity)
- **Theme**: Natural, organic, herbal wellness

### Slide 2: Quality Certification Theme  
- **Image**: Modern laboratory/manufacturing facility
- **Source**: `https://images.unsplash.com/photo-1582719471384-894fbb16e074`
- **Overlay**: Light beige to gold gradient (82-88% opacity)
- **Theme**: Professional, clean, quality-focused

### Slide 3: Global Export Theme
- **Image**: Earth from space / global connectivity
- **Source**: `https://images.unsplash.com/photo-1451187580459-43490279c0fa`
- **Overlay**: Dark green to gold gradient (78-82% opacity)
- **Theme**: International, global reach, export-ready

## To Use Your Own Images:

1. **Place images in this folder** with these names:
   - `hero-slide-1.jpg` (Herbal theme)
   - `hero-slide-2.jpg` (Quality theme)
   - `hero-slide-3.jpg` (Global theme)

2. **Update `HeroCarousel.jsx`** - change the bgImage URLs:
```javascript
bgImage: '/assets/images/hero/hero-slide-1.jpg'
```

## Image Requirements:

- **Dimensions**: Minimum 1920x1080px (Full HD)
- **Aspect Ratio**: 16:9 for best display
- **File Size**: Under 300KB (use compression tools)
- **Format**: WebP (best quality/size) or JPG
- **Color Palette**: Works best with green, gold, earth tones

## Current Benefits:

✅ Professional stock images load fast from CDN  
✅ Automatic color overlay matches brand (#D4AF37 gold)  
✅ Text remains readable with gradient overlays  
✅ Responsive across all device sizes  
✅ Optimized for performance

## Alternative Image Ideas:

1. **Slide 1**: Your actual products, moringa plants, ashwagandha harvest
2. **Slide 2**: Your GMP facility, quality control lab, certification photos
3. **Slide 3**: Shipping containers, world map with pins, export documentation
