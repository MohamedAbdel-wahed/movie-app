@extends('app')

@section('content')
    <div class="container mx-auto mt-24 border-b border-gray-700 py-12 px-6 select-none">
        <div class="flex flex-col md:flex-row justify-between">
            <div class="w-full md:w-5/12 xl:w-1/3 flex ">
                <div class="flex flex-col sm:mr-56 md:mr-0 px-10 sm:px-4 xl:justify-end">
                    <img src="https://image.tmdb.org/t/p/w500/{{$actor['profile_path']}}" class="object-cover flex-shrink-0 rounded-sm w-full sm:w-10/12 md:w-full " style="height:26rem;">
                    <ul class="flex justify-start md:justify-center mt-3">
                        <li>
                            <a href="https://facebook.com/{{$social['facebook_id']}}"><img src="/images/fb.png" class="w-8 sm:w-10 rounded-full"></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/{{$social['twitter_id']}}"><img src="/images/twitter.png" class="w-8 sm:w-10 ml-3 rounded-full"></a>
                        </li>
                        <li>
                            <a href="https://instagram.com/{{$social['instagram_id']}}"><img src="/images/ig.png" class="w-8 sm:w-10 ml-3 rounded-full"></a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-7/12 xl:w-2/3 flex  sm:justify-start justify-center mt-6">
                <div class="mt-6 md:mt-1 sm:px-4 px-10">
                    <div id="info">
                        <h1 class="px-2 capitalize text-white font-bold text-2xl md:text-3xl tracking-tight md:tracking-wide leading-tight">{{$actor['name']}}</h1>
                        <div class="mt-1 px-2 text-xs sm:text-sm leading-tight flex flex-col lg:flex-row lg:items-center">
                            <i class="material-icons">cake</i>
                            <span class="ml-1 ">{{Carbon\Carbon::parse($actor['birthday'])->format('M d, Y')}} </span>
                            <span class="ml-1">({{Carbon\Carbon::parse($actor['birthday'])->age}} years old) </span>
                            <span class="ml-1">{{$actor['place_of_birth']}}</span>
                        </div>
                    </div>
                    <div class="mt-6 md:mt-10 xl:w-10/12 w-full px-2">
                        <p class="text-gray-300 text-xs">{{$actor['biography']}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

     <!-- Actor's Movies-->
     <div class="container mx-auto px-4 py-10 select-none border-b border-gray-700" >
        <div class=" ml-2 mb-5">
            <h1 class="text-white capitalize text-2xl font-bold tracking-wide1">Movies</h1>
        </div>
        <div class="flex flex-wrap justify-start mt-5">
            @if(count($movies)>0)
                @foreach($movies as $movie)
                    @if($movie['media_type']=='movie')
                        @if($movie['poster_path'])
                            <div class="flex flex-col items-center w-1/2 sm:w-4/12 md:w-3/12 lg:w-2/12 py-6">
                                <a href="/movie/{{$movie['id']}}" class="flex justify-center">
                                    <img src="https://image.tmdb.org/t/p/w400/{{$movie['poster_path']}}" title="click here to show the movie" class="object-cover rounded-sm w-7/12 sm:w-9/12 h-40 sm:h-48 md:h-56 hover:opacity-75 transition ease-in-out duration-150">
                                </a>
                                <div class="mt-1 ml-6 md:ml-2 text-gray-400 w-32 md:w-40">
                                    <h1 class="text-sm md:text-base font-semibold">{{$movie['title']}}</h1>
                                </div>
                            </div>
                        @endif
                    @endif
                @endforeach
                {{$movies->links()}}
            @else 
                <div class="mx-auto text-center mt-8">
                    <h1 class="text-gray-400 4xl">No Movies</h1>
                </div>    
            @endif
        </div>
    </div>
@endsection