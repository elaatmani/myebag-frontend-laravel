import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

// pages
import IndexView from "@/views/dashboard/IndexView";
import TestView from '@/views/dashboard/TestView'

// products
import CreateProductView from '@/views/dashboard/product/CreateProductView';
import IndexProductsView from '@/views/dashboard/product/IndexProductsView';
import FeaturedProductsView from '@/views/dashboard/product/FeaturedProductsView';


export default [
    {
        path: "/dashboard",
        name: "dashboard",
        component: DashboardLayout,
        meta: {
            requireAuth: true,
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
            }
        ],
    }
]
