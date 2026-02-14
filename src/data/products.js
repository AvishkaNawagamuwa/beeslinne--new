// Central product data for Bees Line Exports
export const products = [
    {
        id: 1,
        slug: 'ashwagandha',
        name: 'Bees Ashwagandha Capsules',
        scientificName: 'Withania somnifera',
        category: 'Stress Relief & Vitality',
        categories: ['wellness', 'vitality'],
        tagline: 'Ancient adaptogen for stress relief, energy boost, and overall vitality',
        description: 'Ashwagandha, also known as Indian Ginseng, is a powerful adaptogenic herb used in Ayurvedic medicine for over 3,000 years. Our premium Ashwagandha capsules are formulated to help reduce stress and anxiety, boost energy levels, improve sleep quality, and enhance overall well-being. Perfect for distributors seeking high-quality herbal supplements for health-conscious consumers.',
        image: '/assets/images/products/ashwagandha.png',
        mg: 500,
        capsules: 60,
        benefits: [
            'Reduces stress and anxiety naturally',
            'Boosts energy and combats fatigue',
            'Promotes restful sleep and relaxation',
            'Supports heart health and circulation',
            'Helps increase muscle mass and strength',
            'Enhances brain function and memory',
            'Balances blood sugar levels',
            'Supports healthy thyroid function'
        ],
        ingredients: 'Pure Ashwagandha root extract (Withania somnifera), vegetable cellulose capsule',
        dosage: 'Take 1 capsule twice daily with meals, or as directed by a healthcare professional',
        featured: true
    },
    {
        id: 2,
        slug: 'garcinia',
        name: 'Bees Garcinia Capsules',
        scientificName: 'Garcinia cambogia',
        category: 'Weight Management',
        categories: ['weight-management'],
        tagline: 'Natural weight management solution for appetite control and fat reduction',
        description: 'Garcinia Cambogia is a tropical fruit native to Southeast Asia, renowned for its weight management properties. Our Garcinia capsules contain high-quality HCA (Hydroxycitric Acid) to support healthy weight loss, reduce appetite, and promote fat metabolism. Ideal for distributors targeting the growing wellness and weight management market.',
        image: '/assets/images/products/garcinia.png',
        mg: 500,
        capsules: 60,
        benefits: [
            'Supports healthy weight loss',
            'Reduces appetite and cravings',
            'Helps reduce belly fat accumulation',
            'Lowers LDL cholesterol and triglycerides',
            'Manages blood sugar levels',
            'Boosts serotonin for mood improvement',
            'Blocks fat production in the body',
            'Improves metabolism and energy'
        ],
        ingredients: 'Garcinia Cambogia fruit extract (60% HCA), vegetable cellulose capsule',
        dosage: 'Take 1 capsule 30 minutes before meals, twice daily',
        featured: true
    },
    {
        id: 3,
        slug: 'green-coffee',
        name: 'Bees Green Coffee Capsules',
        scientificName: 'Coffea arabica',
        category: 'Weight Management & Energy',
        categories: ['weight-management', 'vitality'],
        tagline: 'Natural weight loss and metabolism booster with powerful antioxidants',
        description: 'Green Coffee Bean extract is rich in chlorogenic acid, a powerful antioxidant that supports weight loss and metabolic health. Our premium Green Coffee capsules help boost metabolism, burn fat, and provide sustained energy without the jitters. An excellent choice for distributors in the weight management and wellness space.',
        image: '/assets/images/products/green-coffee.png',
        mg: 500,
        capsules: 60,
        benefits: [
            'Promotes natural weight loss',
            'Boosts metabolism and fat burning',
            'Regulates blood sugar levels',
            'Rich in antioxidants',
            'Provides sustained energy',
            'Lowers blood pressure',
            'Improves mental focus',
            'Supports cardiovascular health'
        ],
        ingredients: 'Green Coffee Bean extract (50% chlorogenic acid), vegetable cellulose capsule',
        dosage: 'Take 1 capsule twice daily before meals',
        featured: true
    },
    {
        id: 4,
        slug: 'moringa',
        name: 'Bees Moringa Capsules',
        scientificName: 'Moringa oleifera',
        category: 'Superfood Nutrition',
        categories: ['wellness', 'vitality'],
        tagline: 'Nutrient-dense superfood for complete nutrition, immunity, and vitality',
        description: 'Moringa, known as the Miracle Tree, is packed with vitamins, minerals, and antioxidants. Our Moringa capsules provide comprehensive nutritional support, boost immunity, improve digestion, and promote overall health and wellness. A must-have product for distributors in the superfood and nutrition supplement market.',
        image: '/assets/images/products/moringa.png',
        mg: 500,
        capsules: 60,
        benefits: [
            'Improves digestion and gut health',
            'Supports diabetes management',
            'Promotes healthy heart function',
            'Lowers cholesterol levels',
            'Boosts immune system naturally',
            'Nourishes skin and hair',
            'Provides anti-aging benefits',
            'Supports eye health and vision'
        ],
        ingredients: 'Pure Moringa leaf powder (Moringa oleifera), vegetable cellulose capsule',
        dosage: 'Take 1-2 capsules daily with meals',
        featured: true
    },
    {
        id: 5,
        slug: 'margosa',
        name: 'Bees Margosa (Neem) Capsules',
        scientificName: 'Azadirachta indica',
        category: 'Skin & Immunity',
        categories: ['skin', 'wellness'],
        tagline: 'Natural detoxifier for clear skin, immunity, and overall wellness',
        description: 'Margosa (Neem) has been valued in Ayurvedic medicine for its powerful purifying and detoxifying properties. Our Margosa capsules support clear skin, boost immunity, and promote overall health. Perfect for distributors seeking natural beauty and wellness solutions.',
        image: '/assets/images/products/margosa.png',
        mg: 500,
        capsules: 60,
        benefits: [
            'Purifies blood and detoxifies body',
            'Supports clear, healthy skin',
            'Boosts immune system',
            'Helps manage diabetes',
            'Promotes oral health',
            'Supports liver function',
            'Natural antibacterial properties',
            'Aids in wound healing'
        ],
        ingredients: 'Margosa (Neem) leaf extract (Azadirachta indica), vegetable cellulose capsule',
        dosage: 'Take 1 capsule twice daily with water',
        featured: false
    },
    {
        id: 6,
        slug: 'papaya-leaves',
        name: 'Bees Papaya Leaves Capsules',
        scientificName: 'Carica papaya',
        category: 'Digestive Health',
        categories: ['digestive'],
        tagline: 'Natural digestive support and platelet booster from tropical wellness',
        description: 'Papaya Leaves are renowned for their digestive enzymes and platelet-boosting properties. Our Papaya Leaves capsules support healthy digestion, boost platelet count, and enhance overall wellness. An essential product for distributors in digestive health and natural remedies.',
        image: '/assets/images/products/papaya-leaves.png',
        mg: 500,
        capsules: 60,
        benefits: [
            'Supports healthy digestion',
            'Boosts platelet production',
            'Enhances immune function',
            'Rich in digestive enzymes',
            'Helps fight inflammation',
            'Supports liver health',
            'Aids in dengue fever recovery',
            'Promotes healthy skin'
        ],
        ingredients: 'Papaya Leaf extract (Carica papaya), vegetable cellulose capsule',
        dosage: 'Take 1 capsule twice daily after meals',
        featured: false
    },
    {
        id: 7,
        slug: 'heenbovitiya',
        name: 'Bees Heenbovitiya Capsules',
        scientificName: 'Osbeckia octandra',
        category: 'Digestive & Wellness',
        categories: ['digestive', 'wellness'],
        tagline: 'Traditional Sri Lankan herb for digestive health and overall vitality',
        description: 'Heenbovitiya (Osbeckia octandra) is a traditional Sri Lankan medicinal plant used for centuries to support digestive health and overall wellness. Our Heenbovitiya capsules offer natural digestive support and help maintain optimal health. A unique offering for distributors seeking authentic Sri Lankan herbal products.',
        image: '/assets/images/products/heenbovitiya.png',
        mg: 500,
        capsules: 60,
        benefits: [
            'Supports digestive health',
            'Helps manage diabetes',
            'Promotes kidney function',
            'Anti-inflammatory properties',
            'Supports liver health',
            'Boosts overall vitality',
            'Traditional Sri Lankan remedy',
            'Supports metabolic health'
        ],
        ingredients: 'Heenbovitiya extract (Osbeckia octandra), vegetable cellulose capsule',
        dosage: 'Take 1 capsule twice daily with meals',
        featured: false
    }
]

// Category filters
export const categories = [
    { id: 'all', label: 'All Products', value: 'all' },
    { id: 'wellness', label: 'Wellness', value: 'wellness' },
    { id: 'digestive', label: 'Digestive', value: 'digestive' },
    { id: 'weight-management', label: 'Weight Management', value: 'weight-management' },
    { id: 'skin', label: 'Skin', value: 'skin' },
    { id: 'vitality', label: 'Vitality', value: 'vitality' }
]

// Get product by slug
export const getProductBySlug = (slug) => {
    return products.find(product => product.slug === slug)
}

// Filter products by category
export const filterProductsByCategory = (categoryValue) => {
    if (categoryValue === 'all') return products
    return products.filter(product => product.categories.includes(categoryValue))
}

// Get featured products
export const getFeaturedProducts = () => {
    return products.filter(product => product.featured)
}
