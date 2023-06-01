import Api from "./Api";
import Csrf from "./Csrf";

class Cart {
    
  async all() {

    await Csrf.getCookie();
    
    return Api.get("api/");

  }

  async create(product) {

    const p = {};
    await Csrf.getCookie();
    return Api.post("api/products", p);

  }
}

export default new Cart();
