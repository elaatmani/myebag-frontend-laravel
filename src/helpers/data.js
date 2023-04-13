
export const categories = [
    {
        id: 1,
        name: 'Shoes',
        image: 'assets/images/categories/shoes.png'
    },
    {
        id: 2,
        name: 'Hoodies',
        image: 'assets/images/categories/hoodies.png'
    },
    {
        id: 3,
        name: 'Watches',
        image: 'assets/images/categories/watches.png'
    }
]

export const products = {
    shoes: [
        {
            id: 1,
            image: 'assets/images/products/shoes/1/1.webp'
        },
        {
            id: 2,
            image: 'assets/images/products/shoes/2/1.webp'
        },
        {
            id: 3,
            image: 'assets/images/products/shoes/3/1.webp'
        },
        {
            id: 4,
            image: 'assets/images/products/shoes/4/1.webp'
        }
    ],

    hoodies: [
        {
            id: 1,
            image: 'assets/images/products/hoodies/5/1.webp'
        },
        {
            id: 2,
            image: 'assets/images/products/hoodies/6/1.webp'
        },
        {
            id: 3,
            image: 'assets/images/products/hoodies/7/1.webp'
        },
        {
            id: 4,
            image: 'assets/images/products/hoodies/8/1.webp'
        }
    ],

    watches: [
        {
            id: 1,
            image: 'assets/images/products/watches/9/1.jpg'
        },
        {
            id: 2,
            image: 'assets/images/products/watches/10/1.jpg'
        },
        {
            id: 3,
            image: 'assets/images/products/watches/11/1.webp'
        },
        {
            id: 4,
            image: 'assets/images/products/watches/12/1.webp'
        }
    ]
}

export const tableProducts = [
    {
        id: 1,
        image: 'assets/images/products/shoes/1/1.webp',
        name: "Nike Off-White x Air Jordan 1 Retro High OG 'UNC'",
        sku: 'air-jordan-1-retro-high-og',
        category: 'Shoes',
        price: 1000,
        quantity: 30
    },
    {
        id: 2,
        image: 'assets/images/products/shoes/2/1.webp',
        name: "Air Jordan 5 Retro 'Racer Blue'",
        sku: 'air-jordan-2-retro-racer-blue',
        category: 'Shoes',
        price: 1000,
        quantity: 35
    },
    {
        id: 3,
        image: 'assets/images/products/shoes/3/1.webp',
        name: "Air Jordan 1 Zoom Air CMFT Womens Light Violet",
        sku: 'air-jordan-1-zoom-air-cmft-light-violet',
        category: 'Shoes',
        price: 1100,
        quantity: 20
    },
    {
        id: 4,
        image: 'assets/images/products/shoes/4/1.webp',
        name: "Air Jordan 5 Retro 'Raging Bull' 2021",
        sku: 'air-jordan-5-retro-raging-bull-2021',
        category: 'Shoes',
        price: 1200,
        quantity: 15
    },
    {
        id: 5,
        image: 'assets/images/products/hoodies/5/1.webp',
        name: "Butter Goods Orchard Pullover Hoody - Cream",
        sku: 'butter-goods-orchard-pullover-hoody-cream',
        category: 'Hoodies',
        price: 150,
        quantity: 100
    },
    {
        id: 6,
        image: 'assets/images/products/hoodies/6/1.webp',
        name: "Obey Step Hoody - Black",
        sku: 'obey-step-hoody-black',
        category: 'Hoodies',
        price: 300,
        quantity: 90
    },
    {
        id: 7,
        image: 'assets/images/products/hoodies/7/1.webp',
        name: 'Pleasures Suffering Hoody - Black',
        sku: 'pleasures-suffering-hoody-black',
        category: 'Hoodies',
        price: 200,
        quantity: 50
    },
    {
        id: 8,
        image: 'assets/images/products/hoodies/8/1.webp',
        name: 'Pleasures Blurry Hoody - Sand',
        sku: 'pleasures-blurry-hoody-sand',
        category: 'Hoodies',
        price: 190,
        quantity: 100
    },
    {
        id: 9,
        image: 'assets/images/products/watches/9/1.jpg',
        name: 'Ladies Olivia Burton Mermaid Tail Watch',
        sku: 'ladies-olivia-burton-mermaid-tail',
        category: 'Watches',
        price: 400,
        quantity: 100
    },
    {
        id: 10,
        image: 'assets/images/products/watches/10/1.jpg',
        name: 'Mens Lacoste Watch',
        sku: 'mens-lacoste-watch',
        category: 'Watches',
        price: 400,
        quantity: 100
    },
    {
        id: 11,
        image: 'assets/images/products/watches/11/1.webp',
        name: 'Mens Accurist Chronograph Watch',
        sku: 'mens-accurist-chronograph-watch',
        category: 'Watches',
        price: 400,
        quantity: 100
    },
    {
        id: 12,
        image: 'assets/images/products/watches/12/1.webp',
        name: 'Mens HUGO #Seek Watch',
        sku: 'mens-hugo-seek-watch',
        category: 'Watches',
        price: 400,
        quantity: 100
    }
]

export const sizes = [
    {
        id: 1,
        name: 'EU',
        sizes: [
            {
                id: 1,
                name: '30'
            },
            {
                id: 2,
                name: '32'
            },
            {
                id: 3,
                name: '34'
            },
            {
                id: 4,
                name: '36'
            },
            {
                id: 5,
                name: '38'
            },
            {
                id: 6,
                name: '40'
            },
            {
                id: 7,
                name: '42'
            },
        ]
    },
    {
        id: 2,
        name: 'UK',
        sizes: [
            {
                id: 8,
                name: 'XS'
            },
            {
                id: 9,
                name: 'S'
            },
            {
                id: 10,
                name: 'M'
            },
            {
                id: 11,
                name: 'L'
            },
            {
                id: 12,
                name: 'XL'
            },
            {
                id: 13,
                name: 'XXL'
            },
        ]
    }
]

export const colors = [
    {
        id: 1,
        name: 'red',
        hex: '#FF0000'
    },
    {
        id: 2,
        name: 'green',
        hex: '#00FF00'
    },
    {
        id: 3,
        name: 'blue',
        hex: '#0000FF'
    }
]

export const product = {
    id: 1,
    name: 'Air Force 1',
    sku: 'air-force-1',
    description: 'lorem ipsum...',
    category_id: 1,
    category: {
        id: 1,
        name: 'Shoes',
        image: '...'
    },

    size_type_id: 2,
    size_type: {
        id: 2,
        name: 'UK',
    },
    
    discount_id: null,
    discount: null,

    images: [
        {
            id: 1,
            order: 1,
            path: 'assets/images/products/shoes/1/1.webp'
        },
        {
            id: 2,
            order: 2,
            path: 'assets/images/products/shoes/1/2.webp'
        },
        {
            id: 3,
            order: 3,
            path: 'assets/images/products/shoes/1/3.webp'
        },
    ],

    product_variations: [
        {
            id: 1,
            product_id: 1,
            size_id: 12,
            size: {
                id: 9,
                name: 'S'
            },

            color_id: 1,
            color: {
                id: 1,
                name: 'red',
                hex: '#FF0000'
            },

            quantity: 100,
            price: 150
        },
        {
            id: 2,
            product_id: 1,
            size_id: 13,
            size: {
                id: 13,
                name: 'XXL'
            },

            color_id: 1,
            color: {
                id: 1,
                name: 'red',
                hex: '#FF0000'
            },

            quantity: 100,
            price: 150
        }
    ],

    reviews: []
}