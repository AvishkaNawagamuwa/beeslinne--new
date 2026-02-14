# Assets Folder

## Required Images

Please copy the following images from your original website to this folder:

### Logo
- `logo.png` - Company logo (recommended size: 200x200px or similar)

### Product Images
Create a `products/` subfolder and add:

1. `products/ashwagandha.png`
2. `products/garcinia.png`
3. `products/green-coffee.png`
4. `products/moringa.png`
5. `products/margosa.png`
6. `products/papaya-leaves.png`
7. `products/heenbovitiya.png`

### Image Guidelines

- **Format:** PNG with transparent background preferred
- **Size:** 800x800px recommended (square aspect ratio)
- **Quality:** High resolution for product showcase
- **Naming:** Use lowercase with hyphens (as shown above)
- **Background:** Products should have clean, consistent backgrounds

### Folder Structure

```
assets/
└── images/
    ├── logo.png
    └── products/
        ├── ashwagandha.png
        ├── garcinia.png
        ├── green-coffee.png
        ├── moringa.png
        ├── margosa.png
        ├── papaya-leaves.png
        └── heenbovitiya.png
```

### Copy Command (if using terminal)

From the root of your old website:

```bash
# Copy logo
cp "professional website/assets/images/logo.png" "beesline-react/src/assets/images/"

# Copy all product images
cp "professional website/assets/images/products/"*.png "beesline-react/src/assets/images/products/"
```

### After Adding Images

Run development server to see images:
```bash
npm run dev
```

Images should appear on:
- Home page (featured products)
- Products page (product grid)
- Product detail pages
- Quick view modals
