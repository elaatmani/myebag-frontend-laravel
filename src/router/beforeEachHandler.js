import store from "@/store";

export default function (to, from) {
    console.log('from: ', from);
    console.log('to: ', to);

    const isLoggedIn = store.getters['user/isLoggedIn'];

    // change page title
    document.title = to.meta.title + ' | My Ebag';

    // handle login path
    if (isLoggedIn && to.name === 'login') {
        return { name: 'home' }
    }

    // handle signup path
    if (isLoggedIn && to.name === 'signup') {
        return { name: 'home' }
    }

    // handle if path requires authentication
    if (to.meta.requireAuth && !isLoggedIn) {
        return { name: 'login' }
    }
}