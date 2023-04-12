// layouts
import DefaultLayout from "@/layouts/default/DefaultLayout";

// pages
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView";
import ProductView from "@/views/ProductView";
import CategoriesView from '@/views/CategoriesView'

export default [
    {
        path: "/",
        name: "default",
        component: DefaultLayout,
        children: [
            {
                name: "home",
                path: "",
                component: HomeView,
                meta: {
                    requireAuth: false,
                    title: "Home",
                },
            },
            {
                path: "/profile",
                name: "profile",
                component: ProfileView,
                meta: {
                    requireAuth: true,
                    title: "Account",
                },
            },
            {
                path: "/categories",
                name: "categories",
                component: CategoriesView,
                meta: {
                    requireAuth: false,
                    title: "Categories",
                },
            },
            {
                path: "/products/:id",
                name: "products.show",
                component: ProductView,
                meta: {
                    requireAuth: false,
                    title: "Product",
                },
            },
        ],
    },
];
