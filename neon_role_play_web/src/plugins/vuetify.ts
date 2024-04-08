/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import '@mdi/font/css/materialdesignicons.css'
// import 'vuetify/styles'

// Composables
import {createVuetify} from 'vuetify'
import colors from 'vuetify/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.purple.darken4,
                    secondary: colors.purple.lighten5,
                    darkPurple3: colors.purple.darken3
                },
            },
        },
    },
})

// link to colors
// https://vuetifyjs.com/en/styles/colors/#javascript-color-pack
