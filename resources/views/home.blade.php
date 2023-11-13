<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>RandoRande</title>
        <!-- Styles -->
        @vite(['resources/scss/app.scss'])
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>

        <div id="randorande-app"></div>

        @viteReactRefresh
        @vite('resources/js/randorande.jsx')
    </body>
</html>