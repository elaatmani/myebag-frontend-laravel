import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

// Pages
import IndexView from "@/views/dashboard/IndexView";
import TestView from '@/views/dashboard/TestView'
import NotFound from '@/views/dashboard/NotFound'

// Products
import IndexProductsView from '@/views/dashboard/product/IndexProductsView';
import CreateProductView from '@/views/dashboard/product/CreateProductView';
import FeaturedProductsView from '@/views/dashboard/product/FeaturedProductsView';

// Orders
import IndexOrdersView from '@/views/dashboard/order/IndexOrdersView'

// Users
import IndexUsersView from '@/views/dashboard/user/IndexUsersView'

// Categories
import IndexCategoriesView from '@/views/dashboard/category/IndexCategoriesView'
import CreateCategoryView from '@/views/dashboard/category/CreateCategoryView'

// Settings
import GeneralView from '@/views/dashboard/settings/GeneralView'
import ColorsView from '@/views/dashboard/settings/ColorsView'
import SizesView from '@/views/dashboard/settings/SizesView'
import OrderStatusView from '@/views/dashboard/settings/OrderStatusView'


export default [
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardLayout,
        meta: {
            requireAuth: true,
            requireAdmin: true
        },
        children: [
            {
                name: "dashboard/index",
                path: "",
                component: IndexView,
                meta: {
                    requireAuth: true,
                    title: "Dashboard",
                },
            },

            // test view
            {
                name: "dashboard/test",
                path: "test",
                component: TestView,
                meta: {
                    requireAuth: true,
                    title: "Test",
                },
            },

            // Product routes
            {
                name: 'products/index',
                path: 'products',
                component: IndexProductsView,
                meta: {
                    module: 'products',
                    requireAuth: true,
                    title: "Products list",
                }
            },
            {
                name: 'products/create',
                path: 'products/create',
                component: CreateProductView,
                meta: {
                    module: 'products',
                    requireAuth: true,
                    title: "Create product",
                }
            },
            {
                name: 'products/featured',
                path: 'products/featured',
                component: FeaturedProductsView,
                meta: {
                    module: 'products',
                    requireAuth: true,
                    title: "Featured products",
                }
            },

            // Orders
            {
                name: 'orders/index',
                path: 'orders',
                component: IndexOrdersView,
                meta: {
                    module: 'orders',
                    requireAuth: true,
                    title: 'Orders'
                }
            },

            // Users
            {
                name: 'users/index',
                path: 'users',
                component: IndexUsersView,
                meta: {
                    modeul: 'users',
                    requireAuth: true,
                    title: 'Users'
                }
            },


            // Categories
            {
                name: 'categories/index',
                path: 'categories',
                component: IndexCategoriesView,
                meta: {
                    module: 'categories',
                    requireAuth: true,
                    title: "Categories list",
                }
            },
            {
                name: 'categories/create',
                path: 'categories/create',
                component: CreateCategoryView,
                meta: {
                    module: 'categories',
                    requireAuth: true,
                    title: "Create category",
                }
            },

            
            {
                name: "dashboard/404",
                path: "404",
                component: NotFound,
                meta: {
                    requireAuth: true,
                    title: "Not Found",
                },
            },

            {
                name: "dashboard/settings/general",
                path: "settings/general",
                module: 'settings',
                component: GeneralView,
                meta: {
                    requireAuth: true,
                    title: "Settings",
                },
            },

            {
                name: "dashboard/settings/colors",
                path: "settings/colors",
                module: 'settings',
                component: ColorsView,
                meta: {
                    requireAuth: true,
                    title: "Colors",
                },
            },

            {
                name: "dashboard/settings/sizes",
                path: "sizes",
                module: 'settings',
                component: SizesView,
                meta: {
                    requireAuth: true,
                    title: "Sizes",
                },
            },


            {
                name: "dashboard/settings/orders/status",
                path: "orders/status",
                module: 'settings',
                component: OrderStatusView,
                meta: {
                    requireAuth: true,
                    title: "Order Status",
                },
            },

            {
                name: 'catch-all',
                path: ':pathMatch(.*)',
                beforeEnter: (to, from, next) => {
                    return next({ name: 'dashboard/404' })
                },
                meta: {
                    requireAuth: true,
                    title: "Not Found",
                },
            },
        ],
    }
]
