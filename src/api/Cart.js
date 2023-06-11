import Api from "./Api";
import Csrf from "./Csrf";

class Cart {
    
  async all() {

    await Csrf.getCookie();
    
    return Api.get("api/");

  }

  async create(p) {

    const product = {
      product_id: p.product_id,
      quantity: p.quantity
    };
    await Csrf.getCookie();
    return Api.post("api/carts", product);

  }
  async getCart(){
    
    await Csrf.getCookie();
    return Api.get("api/carts");
  }
}

export default new Cart();
