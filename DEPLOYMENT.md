# DEPLOYMENT GUIDE

## Deploying to Traditional Web Hosting (cPanel/Shared Hosting)

### Step 1: Build the React Application

```bash
cd beesline-react
npm install
npm run build
```

This creates a `dist/` folder with all optimized files.

### Step 2: Prepare Your Server

1. **Access your web hosting control panel** (cPanel, FTP, or File Manager)

2. **Your server structure should look like this:**
   ```
   public_html/  (or www/ or httpdocs/)
   ├── index.html              (from dist/)
   ├── assets/                 (from dist/)
   ├── .htaccess              (create this)
   └── php/
       └── contact.php        (from old website)
   ```

### Step 3: Upload Files

#### Upload React Build
1. Open the `dist/` folder from your build
2. Upload **all contents** (not the dist folder itself) to your web root:
   - index.html
   - assets/ folder
   - vite.svg or any other root files

#### Upload PHP Backend
1. Create a `php/` folder in your web root
2. Upload `contact.php` from your old website into this folder

### Step 4: Create .htaccess file

Create a file named `.htaccess` in your web root with this content:

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

# Enable CORS for API requests
<IfModule mod_headers.c>
  <FilesMatch "\.(php)$">
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type"
  </FilesMatch>
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compress files
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css application/javascript
</IfModule>
```

### Step 5: Update PHP Form URLs (if needed)

If your PHP backend and React app are on the same domain, no changes needed.

If they're on different domains:

1. Open `src/pages/Contact.jsx`
2. Find the fetch call: `fetch('/php/contact.php')`
3. Change to: `fetch('https://your-domain.com/php/contact.php')`
4. Do the same in `src/pages/RequestExport.jsx`
5. Rebuild: `npm run build`

### Step 6: Verify Deployment

Test these URLs:

1. Homepage: `https://your-domain.com/`
2. Products: `https://your-domain.com/products`
3. Product Detail: `https://your-domain.com/products/ashwagandha`
4. Contact Form: Submit a test message
5. Direct URL: Navigate to a page, refresh - should still work

### Troubleshooting

**Problem: "Cannot GET /products" error**
- Solution: .htaccess not working. Enable mod_rewrite in Apache or contact hosting support

**Problem: Contact form not submitting**
- Check PHP file path is correct: `/php/contact.php`
- Verify PHP is enabled on your server
- Check browser console for errors

**Problem: Images not loading**
- Ensure images are in the correct folder
- Check image paths in products.js
- Verify assets folder was uploaded

**Problem: Blank white screen**
- Check browser console for errors
- Ensure all files from dist/ were uploaded
- Clear browser cache

---

## Deploying to Netlify

1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `dist/` folder
4. Configure redirects: Create `dist/_redirects` with:
   ```
   /*    /index.html   200
   ```

**Note:** PHP forms won't work on Netlify. Keep PHP on original server and update fetch URLs.

---

## Deploying to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

**Note:** PHP forms won't work on Vercel. Keep PHP on original server and update fetch URLs.

---

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Navigation works (all links)
- [ ] Product filtering works
- [ ] Product detail pages load
- [ ] Contact form submits successfully
- [ ] Export request form works
- [ ] Images load properly
- [ ] Mobile responsive layout works
- [ ] Animations work smoothly
- [ ] No console errors

---

## Performance Tips

1. **Enable Gzip Compression** - Already in .htaccess
2. **Enable Browser Caching** - Already in .htaccess
3. **Optimize Images** - Use WebP format if possible
4. **CDN** - Consider Cloudflare for static assets
5. **Minification** - Already done by Vite build

---

## Updating the Website

1. Make changes to source files in `src/`
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Upload new `dist/` contents to server
5. Clear browser cache

---

## Need Help?

Common issues and solutions in README.md
