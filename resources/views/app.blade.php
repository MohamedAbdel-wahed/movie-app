<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Movie App</title>
    
    <!-- Custom Css -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  

</head>
<body class="overflow-x-hidden bg-gray-800 text-white font-sans">

    <div id="app">    
        <nav-bar></nav-bar>
        
        @yield('content')
    </div>

    @include('inc.footer')


    <!-- Custom JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>
</html>
