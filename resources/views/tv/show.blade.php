@extends('app')

@section('content')

    <!--Movie Info -->
  <div class="container mx-auto mt-24 border-b border-gray-700 py-12 px-6">
      <div class="flex flex-col md:flex-row justify-between">
          <div class="w-full md:w-5/12 xl:w-1/3 flex ">
             <div class="flex sm:mr-56 md:mr-0 px-10 sm:px-4 xl:justify-end">
                <img src="https://image.tmdb.org/t/p/w500/{{$show['poster_path']}}" class="rounded-sm w-full sm:w-10/12 md:w-full " style="height:26rem;">
             </div>
          </div>
          <div class="w-full md:w-7/12 xl:w-2/3 flex  sm:justify-start justify-center ">
                <div class="mt-6 md:mt-1 sm:px-4 px-10">
                   <div id="info">
                        <h1 class="capitalize text-white font-bold text-2xl md:text-3xl tracking-tight md:tracking-wide leading-tight">{{$show['name']}}</h1>
                        <div class="mt-2 px-2 text-xs sm:text-sm leading-tight">
                            <span id="rating">{{$show['vote_average']*10}}%</span>
                            <img src="/images/star.png" class="h-6 w-6 inline-block -ml-1 -mt-1">
                            <span id="date" class="ml-1"> | &nbsp;{{$show['first_air_date']}}&nbsp; | </span>
                            <div class="block sm:inline-block">
                                @foreach ($show['genres'] as $genre)
                                    <span>
                                        {{$genre['name']}}@if (!$loop->last), @endif
                                    </span>
                                @endforeach
                            </div>
                        </div>
                   </div>
                    <div id="description" class="mt-6 xl:w-10/12 w-full px-2">
                          <p class="text-gray-300 text-xs">{{$show['overview']}}</p>
                    </div>
                    <div id="crew" class="px-2 mt-6 sm:w-2/3 ">
                        <h1 class="text-xl sm:text-2xl font-semibold capitalize">Featured Crew</h1>
                        <div class="mt-1 flex flex-col w-full leading-tight text-gray-300">
                            @foreach ($show['credits']['crew'] as $crew)
                                @if($loop->index<2)
                                    <div class="list-disc w-full text-sm sm:text-base">- {{$crew['name']}} <span class="ml-1 text-xs sm:text-sm">( {{$crew['job']}} )</span></div>
                                @endif
                            @endforeach
                        </div>
                    </div>
                    <div class="px-2 mt-8">
                        @if(count($show['videos']['results'])>0)
                            <a href="{{'https://www.youtube.com/watch?v='.$show['videos']['results'][0]['key']}}" class="inline-flex items-center text-gray-400 sm:text-2xl text-lg font-bold rounded-lg px-6 sm:px-10 py-3 bg-red-700 capitalize hover:opacity-75 hover:text-gray-700 focus:shadow:sm focus:outline-none">
                                <i class="material-icons" style="font-size:24px;">play_circle_outline</i>
                                <span class="ml-1">play trailer</span>
                            </a>
                        @endif
                    </div>
                </div>
          </div>
      </div>
  </div>

   <!-- Movie Cast-->
    <div class="container mx-auto px-4 py-10 select-none border-b border-gray-700" >
        <div class=" ml-2 mb-5">
            <h1 class="text-white capitalize text-2xl font-bold tracking-wide1">Cast</h1>
        </div>
        @if(count($cast)>0)
            <div class="flex flex-wrap justify-start mt-5">
                @foreach ($cast as $person)
                    @if($person['profile_path'])
                        <div class="flex flex-col items-center w-1/2 sm:w-4/12 md:w-3/12 lg:w-2/12 py-6">
                            <a href="" class="flex justify-center">
                                <img src="https://image.tmdb.org/t/p/w400/{{$person['profile_path']}}" class="object-cover rounded-sm w-7/12 sm:w-9/12 h-40 sm:h-48 md:h-56">
                            </a>
                            <div class="mt-1 text-gray-400">
                                <h1 class="text-sm md:text-base lg:text-lg">{{$person['name']}}</h1>
                            </div>
                        </div>
                    @endif
                @endforeach
             </div>
        @else 
            <div class="mx-auto text-center mt-8">
                <h1 class="4xl">Not Available</h1>
            </div>
        @endif
    </div>

    <!--Movie Images-->
     <div class="container mx-auto px-4 pb-16 pt-10 select-none border-b border-gray-700" >
        <div class=" ml-12 sm:ml-2 mb-2">
            <h1 class="text-white capitalize text-2xl mb-5 font-bold tracking-wide">Images</h1>
        </div>
        @if(count($images)>0)
        <image-slider :images="{{$images}}"></image-slider>
        @else 
            <div class="mx-auto text-center mt-8">
                <h1 class="4xl">No Images</h1>
            </div>
        @endif
    </div>
@endsection   