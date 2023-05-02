import Api from "./Api";
import Csrf from "./Csrf";

class App {
    
    async index() {
        await Csrf.getCookie();
        return Api.get('api/initial')
    }

}

export default new App();