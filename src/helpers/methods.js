
export function getAvailableSizes(sizeType, productVariations) {
        const availableSizes = [];
        
        // Loop through each size in the size type
        for (const size of sizeType.sizes) {
            let sizeAvailable = false;
        
            // Check if there are any product variations for this product and size
            for (const variation of productVariations) {
                if (variation.size_id === size.id && variation.quantity > 0) {
                sizeAvailable = true;
                break;
                }
            }
        
            // If the size is available, add it to the list
            if (sizeAvailable) {
                availableSizes.push(size);
            }
        }
    
        return availableSizes;
    }