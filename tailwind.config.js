/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {

    content: ["./**/*.{html,js}"],
    theme: {

        extend: {
            fuchsia: colors.fuchsia,
        },

    },

    plugins: [],

};



