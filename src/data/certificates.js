// Certificate data for Bees Line Exports
export const certificates = [
    {
        id: 1,
        title: 'GMP Certified',
        shortDescription: 'Good Manufacturing Practice compliance',
        fullDescription: 'Good Manufacturing Practice compliance supporting consistent production quality for export markets. Our GMP certification ensures that every product is manufactured to the highest international standards.',
        image: '/assets/images/certificates/gmp.png',
        badge: 'Core Standard',
        featured: true
    },
    {
        id: 2,
        title: 'HACCP Certified',
        shortDescription: 'Hazard Analysis and Critical Control Points',
        fullDescription: 'Hazard Analysis and Critical Control Points system to ensure food safety during manufacturing and handling. This certification demonstrates our commitment to identifying and controlling potential food safety hazards.',
        image: '/assets/images/certificates/haccp.png',
        badge: 'Food Safety',
        featured: true
    },
    {
        id: 3,
        title: 'IAF Recognition',
        shortDescription: 'International Accreditation Forum',
        fullDescription: 'International recognition supporting credibility of certification and assessment standards. IAF membership ensures our certifications are recognized globally, facilitating international trade.',
        image: '/assets/images/certificates/ilac.png',
        badge: 'International',
        featured: false
    },
    {
        id: 4,
        title: 'ISO 22000 Certified',
        shortDescription: 'Food Safety Management System',
        fullDescription: 'Food Safety Management System standard aligned with international requirements for safe production. ISO 22000 combines HACCP and quality management principles to ensure comprehensive food safety.',
        image: '/assets/images/certificates/iso-22000.png',
        badge: 'ISO Standard',
        featured: true
    },
    {
        id: 5,
        title: '100% Natural Product',
        shortDescription: 'Natural ingredients focus',
        fullDescription: 'Products are developed with a strong focus on natural ingredients and careful processing. We maintain the integrity of traditional herbal formulations while meeting modern quality standards.',
        image: '/assets/images/certificates/natural.png',
        badge: 'Natural',
        featured: false
    },
    {
        id: 6,
        title: 'URS – ISO Registration',
        shortDescription: 'ISO accredited certification',
        fullDescription: 'Registration/assessment evidence through accredited certification bodies for ISO-related requirements. This demonstrates our commitment to maintaining internationally recognized quality management systems.',
        image: '/assets/images/certificates/urs-iso.png',
        badge: 'Accredited',
        featured: false
    },
    {
        id: 7,
        title: 'URS – UKAS Management Systems',
        shortDescription: 'UKAS management certification',
        fullDescription: 'UKAS-related management system recognition supporting international trust and compliance. This UK-based accreditation ensures our management systems meet the highest global standards.',
        image: '/assets/images/certificates/urs-ukas.png',
        badge: 'UK Accredited',
        featured: false
    }
]

// Quality commitments
export const qualityCommitments = [
    {
        icon: '🏭',
        title: 'GMP-Aligned Processes',
        description: 'All manufacturing follows Good Manufacturing Practice guidelines, ensuring consistent product quality from raw materials to finished goods.'
    },
    {
        icon: '🔬',
        title: 'HACCP-Based Food Safety Controls',
        description: 'Comprehensive hazard analysis at critical control points throughout the production process to prevent contamination and ensure safety.'
    },
    {
        icon: '🧪',
        title: 'Lab Testing for Purity & Quality',
        description: 'Every batch undergoes rigorous laboratory testing for purity, potency, and safety before receiving clearance for export.'
    },
    {
        icon: '📦',
        title: 'Traceable Sourcing & Export-Ready Packaging',
        description: 'Complete supply chain transparency with traceable ingredients and packaging designed to meet international export requirements.'
    }
]

// Get certificate by id
export const getCertificateById = (id) => {
    return certificates.find(cert => cert.id === id)
}

// Get featured certificates
export const getFeaturedCertificates = () => {
    return certificates.filter(cert => cert.featured)
}
