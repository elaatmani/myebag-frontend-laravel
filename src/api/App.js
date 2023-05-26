import Api, { ApiForm } from "./Api";
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

    async updateOptions(options, logos = {}, hasLogo = false) {
        await Csrf.getCookie();
        return ApiForm.post('api/options/updateMany', {options, hasLogo, logos})
    }

}

export default new App();