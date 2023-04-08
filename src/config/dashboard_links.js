export default [
    {
        id: 1,
        name: 'Dashboard',
        icon: 'carbon:dashboard',
        to: 'dashboard/index',
        hasChildren: false
    },
    {
        id: 2,
        name: 'Products',
        icon: 'fluent-mdl2:product-variant',
        hasChildren: true,
        module: 'products',
        children: [
            {
                id: 1,
                name: 'All products',
                to: 'products/index',
                module: 'products'
            },
            {
                id: 2,
                name: 'Create product',
                to: 'products/create',
                module: 'products'
            },
            {
                id: 3,
                name: 'Featured products',
                to: 'products/featured',
                module: 'products'
            },
        ]
    },
    {
        id: 3,
        name: 'Test',
        icon: 'eos-icons:config-map',
        to: 'dashboard/test',
        hasChildren: false
    },
    // {
    //     id: 3,
    //     name: 'Categories',
    //     icon: 'fluent-mdl2:product-variant',
    //     hasChildren: true,
    //     to: 'dashboard/index',
    //     children: [
    //         {
    //             id: 1,
    //             name: 'All categories',
    //             icon: '',
    //             to: 'dashboard/index'
    //         },
    //         {
    //             id: 2,
    //             name: 'Create category',
    //             icon: '',
    //             to: 'dashboard/index'
    //         },
    //     ]
    // },
    // {
    //     id: 4,
    //     name: 'Orders',
    //     icon: 'carbon:dashboard',
    //     to: 'dashboard/index'
    // },
    // {
    //     id: 5,
    //     name: 'Users',
    //     icon: 'carbon:dashboard',
    //     to: 'dashboard/index'
    // },
]