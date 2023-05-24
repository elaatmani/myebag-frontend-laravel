
export function getAvailableSizes(product) {
    const availableSizes = product.variations.map(v => v.size);
    

    return availableSizes;
}

export function getAvailableColors(product) {
    const all = product.variations.map(p => p.color)
    const availableColors = []
    all.forEach(element => {
        if(!availableColors.some(i => i.id == element.id)) {
        // if(!availableColors.includes(element)) {
            availableColors.push(element)
        }
    });
    
    

    return availableColors;
}

export function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export function hexToRgb(hex) {
    // Remove the hash symbol if present
    hex = hex.replace('#', '');

    // Convert the hex value to RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return`${r}, ${g}, ${b}`;
}