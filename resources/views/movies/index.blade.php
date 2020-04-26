@extends('app')

@section('content')
    <!-- Now Playing Movies -->
    <div id="playing" class="container mx-auto px-4 mt-32 select-none border-b border-gray-700 pb-8 " >
        <div class=" ml-12 sm:ml-2">
            <h1 class="text-orange-600 uppercase text-lg mb-3 font-semibold tracking-wide">Now Playing Movies</h1>
        </div>
        @include('inc.movie-card')
    </div>

    <!-- Popular Movies -->
    <div id="popular" class="container mx-auto px-4 mt-12 select-none border-b border-gray-700 pb-8 " >
        <div class=" ml-12 sm:ml-2">
            <h1 class="text-orange-600 uppercase text-lg mb-3 font-semibold tracking-wide">Popular Movies</h1>
        </div>
       @include('inc.movie-card')
    </div>
@endsection