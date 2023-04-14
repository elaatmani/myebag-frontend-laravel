export default [
    {
        id: 1,
        name: 'Dashboard',
        // icon: 'carbon:dashboard',
        icon: 'ph:diamonds-four',
        to: 'dashboard/index',
        hasChildren: false
    },
    {
        id: 0,
        name: 'Orders',
        to: 'orders/index',
        icon: 'ph:storefront',
        hasChildren: false,
        module: 'order',
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
        name: 'Categories',
        icon: 'ph:tag',
        hasChildren: true,
        module: 'categories',
        children: [
            {
                id: 1,
                name: 'All categories',
                to: 'categories/index',
                module: 'categories'
            },
            {
                id: 2,
                name: 'Create category',
                to: 'categories/create',
                module: 'categories'
            },
        ]
    },
    {
        id: 4,
        name: 'Users',
        icon: 'ph:user-list',
        to: 'users/index',
        module: 'users',
        hasChildren: true,
        children: [
            {
                id: 1,
                name: 'All users',
                to: 'users/index',
                module: 'users'
            },
        ]
    },
    // {
    //     id: 5,
    //     name: 'Test',
    //     icon: 'ph:tree-structure',
    //     to: 'dashboard/test',
    //     hasChildren: false
    // },
    {
        id: 6,
        name: 'Settings',
        icon: 'ph:gear-six',
        module: 'settings',
        hasChildren: true,
        children: [
            {
                id: 1,
                name: 'General',
                to: 'dashboard/settings/general',
                module: 'settings'
            },
            {
                id: 2,
                name: 'Colors',
                to: 'dashboard/settings/colors',
                module: 'settings'
            },
            {
                id: 3,
                name: 'Sizes',
                to: 'dashboard/settings/sizes',
                module: 'settings'
            },
        ]
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