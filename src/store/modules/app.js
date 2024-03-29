import { hexToRgb } from "@/helpers/methods"

const defaultLogoWidth = 28;

const defaultPrimary = {
    "name": "violet",
    "light": "#8b5cf6",
    "dark": "#a78bfa",
    "main": "#8b5cf6"
}
const defaultSecondary = {
    "name": "emerald",
    "light": "#10b981",
    "dark": "#34d399",
    "main": "#10b981"
}

function getPrimary() {
    let color = localStorage.getItem('primaryColor');
    if(!color) {
        return defaultPrimary
    }
    return JSON.parse(color);
}

function getSecondary() {
    let color = localStorage.getItem('secondaryColor');
    if(!color) {
        return defaultSecondary
    }
    return JSON.parse(color);
}

function getLogoWidth() {
    let width = localStorage.getItem('logoWidth');
    if(!width) {
        return defaultLogoWidth
    }
    return parseInt(width);
}

let initialState = {
    IsSidebarActive: false,
    primary: getPrimary(),
    secondary: getSecondary(),
    sizes: [],
    colors: [],
    orderStatuses: [],
    featured: [],
    categories: [],
    options: [],
    sliders: [],
    logoWidth: getLogoWidth(),
    isHomeReady: false,
    isReady: false
}

export default {
    namespaced: true,
    name: 'app',
    state: initialState,
    getters: {
        primary: state => {
            return {
                name: state.primary.name,
                main: hexToRgb(state.primary.main),
                light: hexToRgb(state.primary.light),
                dark: hexToRgb(state.primary.dark)
            }
        },
        secondary: state => {
            return {
                name: state.secondary.name,
                main: hexToRgb(state.secondary.main),
                light: hexToRgb(state.secondary.light),
                dark: hexToRgb(state.secondary.dark)
            }
        },

        primaryRaw: state => state.primary,
        secondaryRaw: state => state.secondary,
        IsSidebarActive: state => state.IsSidebarActive,
        sizes: state => state.sizes,
        colors: state => state.colors,
        categories: state => state.categories,
        orderStatuses: state => state.orderStatuses,
        featured: state => state.featured,
        options: state => state.options,
        sliders: state => state.sliders,
        isHomeReady: state => state.isHomeReady,
        logoWidth: state => state.logoWidth,
        isReady: state => state.isReady,
    },
    mutations: {
        
        SET_IS_SIDEBAR_ACTIVE: (state, payload) => {
            state.IsSidebarActive = payload
        },

        SET_LOGO_WIDTH: (state, payload) => {
            document.documentElement.style.setProperty('--logo-width', `${payload}px`)
            localStorage.setItem('logoWidth', payload);
            state.logoWidth = payload;

        },

        SET_PRIMARY: (state, payload) => {
            const color = {
                name: payload.name,
                main: payload.main,
                light: payload.light,
                dark: payload.dark,
            }

            localStorage.setItem('primaryColor', JSON.stringify(color))

            state.primary = color;
        },

        SET_SECONDARY: (state, payload) => {
            const color = {
                name: payload.name,
                main: payload.main,
                light: payload.light,
                dark: payload.dark,
            }

            localStorage.setItem('secondaryColor', JSON.stringify(color))

            state.secondary = color;
        },

        SET_SIZES: (state, payload) => {
            state.sizes = payload
        },

        REMOVE_SIZE: (state, payload) => {
            state.sizes = state.sizes.filter(s => s.id !== payload)
        },

        ADD_SIZE: (state, payload) => {
            state.sizes.push(payload)
        },

        SET_COLORS: (state, payload) => {
            state.colors = payload
        },

        REMOVE_COLOR: (state, payload) => {
            state.colors = state.colors.filter(c => c.id !== payload)
        },

        ADD_COLOR: (state, payload) => {
            state.colors.push(payload)
        },

        SET_ORDER_STATUSES: (state, payload) => {
            state.orderStatuses = payload
        },

        REMOVE_ORDER_STATUS: (state, payload) => {
            state.orderStatuses = state.orderStatuses.filter(c => c.id !== payload)
        },

        ADD_ORDER_STATUS: (state, payload) => {
            state.orderStatuses.push(payload)
        },

        SET_FEATURED: (state, payload) => {
            state.featured = payload
        },

        SET_OPTIONS: (state, payload) => {
            state.options = payload
        },

        UPDATE_OPTIONS: (state, payload) => {
            state.options = state.options.map(
                o => {
                    const option = payload.find(i => i.option_name == o.option_name);
                    if(option !== null) {
                        return option;
                    }
                    return o;
                }
            )
        },

        SET_SLIDERS: (state, payload) => {
            state.sliders = payload
        },

        ADD_SLIDER: (state, payload) => {
            state.sliders.push(payload)
        },

        REMOVE_SLIDER: (state, payload) => {
            state.sliders = state.sliders.filter(c => c.id !== payload)
        },

        UPDATE_OPTION: (state, payload) => {
            state.options = state.options.map(
                i => {
                    if(i.id == payload.id) {
                        return {...payload}
                    }
                    return i
                }
            )
        },

        SET_IS_HOME_READY: (state, payload) => {
            state.isHomeReady = payload
        },
        
        SET_IS_READY: (state, payload) => {
            state.isReady = payload
        }
    },
    actions: {
        
        setIsSidebarActive: ({commit}, payload) => {
            commit('SET_IS_SIDEBAR_ACTIVE', payload)
        },

        setLogoWidth: ({commit}, payload) => {
            commit('SET_LOGO_WIDTH', payload)
        },

        setSizes: ({commit}, payload) => {
            commit('SET_SIZES', payload)
        },

        setPrimary: ({commit}, payload) => {
            commit('SET_PRIMARY', payload)
        },

        setSecondary: ({commit}, payload) => {
            commit('SET_SECONDARY', payload)
        },

        removeSize: ({commit}, payload) => {
            commit('REMOVE_SIZE', payload)
        },

        addSize: ({commit}, payload) => {
            commit('ADD_SIZE', payload)
        },

        setColors: ({commit}, payload) => {
            commit('SET_COLORS', payload)
        },

        removeColor: ({commit}, payload) => {
            commit('REMOVE_COLOR', payload)
        },

        addColor: ({commit}, payload) => {
            commit('ADD_COLOR', payload)
        },

        setOrderStatuses: ({commit}, payload) => {
            commit('SET_ORDER_STATUSES', payload)
        },

        removeOrderStatus: ({commit}, payload) => {
            commit('REMOVE_ORDER_STATUS', payload)
        },

        addOrderStatus: ({commit}, payload) => {
            commit('ADD_ORDER_STATUS', payload)
        },

        setFeatured: ({commit}, payload) => {
            commit('SET_FEATURED', payload)
        },

        setOptions: ({commit}, payload) => {
            commit('SET_OPTIONS', payload)
        },

        updateOptions: ({commit}, payload) => {
            commit('UPDATE_OPTIONS', payload)
        },

        setSliders: ({commit}, payload) => {
            commit('SET_SLIDERS', payload)
        },

        addSlider: ({commit}, payload) => {
            commit('ADD_SLIDER', payload)
        },

        removeSlider: ({commit}, payload) => {
            commit('REMOVE_SLIDER', payload)
        },

        updateOption: ({commit}, payload) => {
            commit('UPDATE_OPTION', payload)
        },

        setIsHomeReady: ({commit}, payload) => {
            commit('SET_IS_HOME_READY', payload)
        },

        setIsReady: ({commit}, payload) => {
            commit('SET_IS_READY', payload)
        },
    }
}