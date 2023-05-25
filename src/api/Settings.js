import Api from "./Api";
import Csrf from "./Csrf";

class Settings {
    
    async stripe() {
        await Csrf.getCookie();
        return Api.get('api/initial/app')
    }


}

export default new Settings();