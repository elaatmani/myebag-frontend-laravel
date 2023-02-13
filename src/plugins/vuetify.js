// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

const customTheme = {
  colors: {
    primary: '#6354a4',
    secondary: '#0ea5e9'
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  }
})
