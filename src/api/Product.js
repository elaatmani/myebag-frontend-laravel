import Api from "./Api";
import Csrf from "./Csrf";

class Product {
    
    async get(id) {
        await Csrf.getCookie();
        return Api.post('api/products/' + id)
    }

}

export default new Product();