const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
mix.js('node_modules/bootstrap/dist/js/bootstrap.min.js','public/assets/js/bootstrap.min.js');
mix.css('node_modules/bootstrap/dist/css/bootstrap.min.css','public/assets/css/bootstrap.min.css');