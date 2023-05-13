import Api from "./Api";
import Csrf from "./Csrf";

class App {
    
    async index() {
        await Csrf.getCookie();
        return Api.get('api/initial/app')
    }

    async dashboard() {
        await Csrf.getCookie();
        return Api.get('api/initial/dashboard')
    }

    async user() {
        await Csrf.getCookie();
        return Api.get('api/initial/user')
    }

}

export default new App();