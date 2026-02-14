# Certificate Images

This directory contains the official certification and accreditation images for Bees Line Exports.

## Files

- `gmp.png` - Good Manufacturing Practice Certification
- `haccp.png` - HACCP Food Safety Certification
- `ilac.png` - IAF International Recognition
- `iso-22000.png` - ISO 22000 Food Safety Management System
- `natural.png` - 100% Natural Product Badge
- `urs-iso.png` - URS ISO Registration
- `urs-ukas.png` - URS UKAS Management Systems

## Usage

These images are automatically loaded by the Quality & Certifications page.

Access path in code: `/assets/images/certificates/<filename>`

Example:
```jsx
<img src="/assets/images/certificates/gmp.png" alt="GMP Certified" />
```

## Notes

- All images are displayed in certificate cards on the Quality page
- Clicking a certificate card opens a modal with full details
- Images are referenced in `src/data/certificates.js`
