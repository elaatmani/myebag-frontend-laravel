import Api from "./Api";
import Csrf from "./Csrf";

class Product {
    
    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/products/' + id)
    }

}

export default new Product();