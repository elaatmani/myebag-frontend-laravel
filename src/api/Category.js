import Api, { ApiForm } from "./Api";
import Csrf from "./Csrf";

class Category {
    
    async create({name, description, image}) {
        await Csrf.getCookie();
        Api;
        return ApiForm.post('api/categories', {name, description, image})
    }

}

export default new Category();