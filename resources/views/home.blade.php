<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>RandoRande</title>
        <!-- Styles -->

        @vite(['resources/scss/app.scss'])
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
        <link rel="icon" href="/images/favicon/RR_favicon_bigger.svg" type="image/x-icon">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body>

        <div id="randorande-app"></div>

        @viteReactRefresh
        @vite('resources/js/randorande.jsx')
    </body>
</html>