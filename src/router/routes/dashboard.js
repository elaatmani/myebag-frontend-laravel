import DashboardLayout from "@/layouts/dashboard/DashboardLayout";

// pages
import IndexView from "@/views/dashboard/IndexView";
import TestView from '@/views/dashboard/TestView'

// products
import IndexProductsView from '@/views/dashboard/product/IndexProductsView';
import CreateProductView from '@/views/dashboard/product/CreateProductView';
import FeaturedProductsView from '@/views/dashboard/product/FeaturedProductsView';

// categories
import IndexCategoriesView from '@/views/dashboard/category/IndexCategoriesView'
import CreateCategoryView from '@/views/dashboard/category/CreateCategoryView'


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
        ],
    }
]
