let mix = require('laravel-mix');

mix
    .js('resources/js/app.js', 'js')
    .vue({ version: 2 })
    .setPublicPath('public')
    .version()
    .sourceMaps()
    .extract(['vue'])
    .options({ legacyNodePolyfills: true })
    .postCss('resources/css/app.css', 'css', [
        require("tailwindcss"),
    ]);