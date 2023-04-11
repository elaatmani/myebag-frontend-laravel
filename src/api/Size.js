import Api from "./Api";
import Csrf from "./Csrf";

class Size {
    
    async create({name, sizes}) {
        await Csrf.getCookie();
        return Api.post('api/sizes', {name, sizes})
    }

}

export default new Size();