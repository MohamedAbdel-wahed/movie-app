<div class="flex flex-wrap justify-center sm:justify-start">
    @foreach($movies as $movie)
        <div class="flex flex-col items-center w-10/12 sm:w-1/2 md:w-4/12 lg:w-3/12 md:shadow-sm md:hover:shadow-xl py-4  mt-2 sm:mt-3">
            <a href="/movie/{{$movie['id']}}" class="flex justify-center">
                <img src="https://image.tmdb.org/t/p/w500/{{$movie['poster_path']}}" class="rounded-sm w-7/12 sm:w-9/12 h-56 sm:h-64 md:hover:opacity-75 transition ease-in-out duration-150" title="click here to show the movie" >
            </a>
            <div class="mt-2 text-gray-400 text-xs text-center w-9/12">
                <h1 class="font-bold text-lg">{{$movie['title']}}</h1>
                <div class="mt-2">
                    <span id="rating" class="-mt-1">{{$movie['vote_average']*10}}%</span>
                    <img src="/images/star.png" class="h-6 w-6 inline-block -ml-1 -mt-1">
                    <span id="date" class="ml-1"> | &nbsp; {{$movie['release_date']}}</span>
                </div>
                <div id="type" >
                    @foreach ($movie['genre_ids'] as $genre)
                        <span>
                            {{$genres->get($genre)}}@if (!$loop->last), @endif
                            </span>
                    @endforeach
                </div>
            </div>
        </div>
    @endforeach
</div>