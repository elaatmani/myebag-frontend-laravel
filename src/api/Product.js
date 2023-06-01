import Api, { ApiForm } from "./Api";
import Csrf from "./Csrf";

class Product {
    
    async all() {
        await Csrf.getCookie();
        return Api.get('api/products')
    }

    async all_active() {
        await Csrf.getCookie();
        return Api.get('api/products/active')
    }

    async get(id) {
        await Csrf.getCookie();
        return Api.get('api/products/' + id)
    }

    async see(id) {
        await Csrf.getCookie();
        return Api.get('api/products/' + id)
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('api/products/' + id)
    }

    async create(product) {
        const p = {
            name: product.name,
            description: product.description,
            size_type_id: product.size_type_id,
            stock_alert: product.stock_alert,
            gender: product.gender,
            category_id: product.category_id,
            discount_id: product.discount_id,
            product_variations: product.variations,
            images: product.images,
            has_colors: product.has_colors,
            same_price: product.same_price,
            discount_percentage: product.discount_percentage,
            is_discount_active: product.is_discount_active
        }
        await Csrf.getCookie();
        return ApiForm.post('api/products', p)
    }

    async update(id, product) {
        const p = {
            id: id,
            name: product.name,
            description: product.description,
            size_type_id: product.size_type_id,
            stock_alert: product.stock_alert,
            gender: product.gender,
            category_id: product.category_id,
            discount_id: product.discount_id,
            product_variations: product.variations,
            images: product.images,
            has_colors: product.has_colors,
            same_price: product.same_price,
            discount_percentage: product.discount_percentage,
            is_discount_active: product.is_discount_active,
            deleted_variations: product.deleted_variations,
            new_variations: product.new_variations,
            is_images_dirty: product.isImagesDirty,
        }
        await Csrf.getCookie();
        return ApiForm.post('api/products/' + id, p)
    }

    async setActive(id, value) {
        await Csrf.getCookie();
        return Api.post('api/products/' + id + '/active', {active: value})
    }

    async storeImages(images) {
        
        await Csrf.getCookie();
        return ApiForm.post('api/products/images', {images})
    }

}

export default new Product();