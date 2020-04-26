 @extends('app')

@section('content')
    <!-- Top Rated Shows -->
    <div class="container mx-auto px-4 mt-32 select-none border-b border-gray-700 pb-8" >
        <div class=" ml-12 sm:ml-2">
            <h1 class="text-orange-600 uppercase text-lg mb-3 font-semibold tracking-wide">Top Rated</h1>
        </div>
        <div class="flex flex-wrap justify-center sm:justify-start">
            @foreach($topShows as $show)
                <div class="flex flex-col items-center w-10/12 sm:w-1/2 md:w-4/12 lg:w-3/12 md:shadow-sm md:hover:shadow-xl py-4  mt-2 sm:mt-3">
                    <a href="/tv/{{$show['id']}}" class="flex justify-center">
                        <img src="https://image.tmdb.org/t/p/w500/{{$show['poster_path']}}" class="rounded-sm w-7/12 sm:w-9/12 h-56 sm:h-64 md:hover:opacity-75 transition ease-in-out duration-150" title="click here to show the show" >
                    </a>
                    <div class="mt-2 text-gray-400 text-xs text-center w-9/12">
                        <h1 class="font-bold text-lg">{{$show['name']}}</h1>
                        <div class="mt-2">
                            <span id="rating" class="-mt-1">{{$show['vote_average']*10}}%</span>
                            <img src="/images/star.png" class="h-6 w-6 inline-block -ml-1 -mt-1">
                            <span id="date" class="ml-1"> | &nbsp; {{$show['first_air_date']}}</span>
                        </div>
                        <div id="type" >
                            @foreach ($show['genre_ids'] as $genre)
                                <span>
                                    {{$genres->get($genre)}}@if (!$loop->last), @endif
                                    </span>
                            @endforeach
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>


    <!-- Popular Shows -->
    <div class="container mx-auto px-4 mt-16 select-none border-b border-gray-700 pb-8" >
        <div class=" ml-12 sm:ml-2">
            <h1 class="text-orange-600 uppercase text-lg mb-3 font-semibold tracking-wide">Popular Tv Shows</h1>
        </div>
        <div class="flex flex-wrap justify-center sm:justify-start">
            @foreach($popularShows as $show)
                <div class="flex flex-col items-center w-10/12 sm:w-1/2 md:w-4/12 lg:w-3/12 md:shadow-sm md:hover:shadow-xl py-4  mt-2 sm:mt-3">
                    <a href="/tv/{{$show['id']}}" class="flex justify-center">
                        <img src="https://image.tmdb.org/t/p/w500/{{$show['poster_path']}}" class="rounded-sm w-7/12 sm:w-9/12 h-56 sm:h-64 md:hover:opacity-75 transition ease-in-out duration-150" title="click here to show the show" >
                    </a>
                    <div class="mt-2 text-gray-400 text-xs text-center w-9/12">
                        <h1 class="font-bold text-lg">{{$show['name']}}</h1>
                        <div class="mt-2">
                            <span id="rating" class="-mt-1">{{$show['vote_count']*10}}%</span>
                            <img src="/images/star.png" class="h-6 w-6 inline-block -ml-1 -mt-1">
                            <span id="date" class="ml-1"> | &nbsp; {{$show['first_air_date']}}</span>
                        </div>
                        <div id="type" >
                            @foreach ($show['genre_ids'] as $genre)
                                <span>
                                    {{$genres->get($genre)}}@if (!$loop->last), @endif
                                    </span>
                            @endforeach
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection