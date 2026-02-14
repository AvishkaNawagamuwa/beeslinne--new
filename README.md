# Bees Line Exports - React Website

Modern, premium React website for Bees Line Exports - showcasing premium Sri Lankan herbal and Ayurvedic products with e-commerce catalog experience.

## 🚀 Features

- **Modern React + Vite** - Fast development and optimized production builds
- **TailwindCSS** - Premium UI with custom gold theme and professional styling
- **Framer Motion** - Smooth animations and page transitions
- **React Router** - Client-side routing with clean URLs
- **Product Catalog** - Filter, search, and quick-view modal for products
- **Responsive Design** - Mobile-first, works beautifully on all devices
- **PHP Contact Integration** - Existing PHP contact form backend integrated
- **Premium UX** - E-commerce-like catalog without cart/payment

## 📁 Project Structure

```
beesline-react/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── ScrollToTop.jsx
│   │   ├── ProductCard.jsx
│   │   └── ProductModal.jsx
│   ├── data/
│   │   └── products.js  # Central product data
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Quality.jsx
│   │   ├── Partners.jsx
│   │   ├── Contact.jsx
│   │   └── RequestExport.jsx
│   ├── App.jsx          # Main app with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind + custom styles
├── public/              # Static assets
├── index.html           # HTML template
└── package.json
```

## 🛠️ Installation & Development

### Prerequisites
- Node.js 16+ and npm

### Setup

1. **Install dependencies:**
   ```bash
   cd beesline-react
   npm install
   ```

2. **Copy images from old website:**
   ```bash
   # Copy logo and product images to src/assets/images/
   # Structure should be:
   # src/assets/images/logo.png
   # src/assets/images/products/ashwagandha.png
   # src/assets/images/products/garcinia.png
   # ... (other product images)
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

```bash
npm run build
```

This creates optimized files in the `dist/` folder.

## 📦 Deployment

### Option 1: Traditional Web Hosting (cPanel, shared hosting, etc.)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files to your server:**
   - Upload contents of `dist/` folder to `public_html/` (or your web root)
   - Upload the `/php` folder from your old website to `public_html/php/`

3. **Configure server for React Router (SPA):**
   
   Create `.htaccess` file in your web root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     
     # Don't rewrite files or directories
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     
     # Don't rewrite PHP files
     RewriteCond %{REQUEST_URI} !^/php/
     
     # Rewrite everything else to index.html
     RewriteRule ^ index.html [L]
   </IfModule>
   ```

4. **Verify PHP backend:**
   - Ensure `php/contact.php` is accessible
   - Test at: `https://yourdomain.com/php/contact.php`

### Option 2: Vercel (Recommended for React)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. **PHP Backend Note:** Vercel doesn't support PHP. You'll need to:
   - Host PHP form on original server
   - Update fetch URLs in `Contact.jsx` and `RequestExport.jsx` to point to:
     ```javascript
     fetch('https://your-original-domain.com/php/contact.php', ...)
     ```
   - Add CORS headers to your PHP file

### Option 3: Netlify

1. Build the project
2. Upload `dist/` folder to Netlify
3. Add redirect rules in `netlify.toml`:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

## 🔧 Configuration

### Update PHP Endpoint

In production, update the fetch URLs in:
- `src/pages/Contact.jsx`
- `src/pages/RequestExport.jsx`

Change:
```javascript
fetch('/php/contact.php', ...)
```

To:
```javascript
fetch('https://your-domain.com/php/contact.php', ...)
```

### Add Images

Place product images in `src/assets/images/products/` matching these names:
- ashwagandha.png
- garcinia.png
- green-coffee.png
- moringa.png
- margosa.png
- papaya-leaves.png
- heenbovitiya.png

Place logo in `src/assets/images/logo.png`

## 🎨 Customization

### Colors (tailwind.config.js)

The theme uses your existing brand colors:
- Primary Gold: `#D4AF37`
- Cream Background: `#FFF9F0`
- Beige: `#F5F1E8`

### Products (src/data/products.js)

Add/edit products by modifying the products array. Each product should have:
- Basic info: name, slug, scientificName, category
- Details: description, benefits, ingredients, dosage
- Images: image path
- Specs: mg, capsules count

## 📱 Features by Page

- **Home** - Hero, featured products, why choose us, CTA
- **Products** - Filterable grid, search, quick-view modal, product cards
- **Product Details** - Full product info, benefits, specs, CTAs
- **About** - Company story, mission/vision, core values
- **Quality** - Certifications, quality process, standards
- **Partners** - Partnership benefits, process, ideal partners
- **Contact** - Contact form with PHP integration, business info
- **Request Export** - Export inquiry form with product selection

## 🚨 Important Notes

1. **PHP Backend:** The contact forms rely on your existing PHP backend. Ensure it's accessible and CORS-configured if deployed separately.

2. **Images:** Copy all images from the old website to maintain visual consistency.

3. **SPA Routing:** React Router requires server configuration (.htaccess for Apache) to handle direct URL access.

4. **Product Slugs:** URLs like `/products/ashwagandha` must match the slugs in `products.js`

## 📞 Support

For any issues or questions, contact the development team.

## 📄 License

© 2026 Bees Line Exports. All rights reserved.
