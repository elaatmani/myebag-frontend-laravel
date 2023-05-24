import store from "@/store";
import { appName } from "@/config/app";

export default function (to, from) {
    console.log('from: ', from);
    console.log('to: ', to);

    const isLoggedIn = store.getters['user/isLoggedIn'];
    const isAdmin = store.getters['user/isAdmin'];
    const options = store.getters['app/options'];
    const name = options.find(o => o.option_name == 'name')?.option_value || appName;

    // change page title
    document.title = to.meta.title + ' | ' + name;

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

    // handle admin paths
    if(to.meta.requireAuth && to.meta.requireAdmin && !isAdmin) {
        return { name: 'home' }
    }

    return true;
}