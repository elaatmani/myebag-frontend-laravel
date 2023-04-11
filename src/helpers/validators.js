

export function required(value, fieldName = 'This field') {
    if(!value) {
        return {
            valid: false,
            message: `${fieldName} is required`
        }
    }

    return { valid: true }
}


export function isStringBetween(value, { min, max }, fieldName = 'This field') {
    if (!value) {
        return {
            valid: false,
            message: `${fieldName} is required`
        }
    }

    if (value.length <= min || value.length >= max) {
        return {
            valid: false,
            message: `${fieldName} must be between ${min} and ${max}`
        }
    }

    return { valid: true }
}

export function isEmail() {
    
}