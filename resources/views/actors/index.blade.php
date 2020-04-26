@extends('app')

@section('content')
    <div class="container mx-auto px-4 mt-32 select-none border-b border-gray-700 pb-8" >
        <div class=" ml-12 sm:ml-2">
            <h1 class="text-orange-600 uppercase text-lg mb-3 font-semibold tracking-wide">Popular Actors</h1>
        </div>
        <div class="flex flex-wrap justify-center sm:justify-start">
            @foreach($actors as $actor)
                <div class="flex flex-col items-center w-10/12 sm:w-1/2 md:w-4/12 lg:w-3/12 md:shadow-sm md:hover:shadow-xl py-4  mt-2 sm:mt-3">
                    <a href="/actor/{{$actor['id']}}" class="flex justify-center">
                        <img src="https://image.tmdb.org/t/p/w500/{{$actor['profile_path']}}" class="rounded-sm w-7/12 sm:w-9/12 h-56 sm:h-64 md:hover:opacity-75 transition ease-in-out duration-150" title="click here to actor the actor" >
                    </a>
                    <div class="mt-2 text-gray-400 text-xs text-center w-9/12">
                        <h1 class="font-bold text-lg">{{$actor['name']}}</h1>
                    </div>
                    <div id="type" class="text-xs text-center w-56 mt-1">
                        @foreach ($actor['known_for'] as $work)
                            <span>
                                @if($work['media_type']=="tv")
                                    {{$work['name']}}@if (!$loop->last), @endif
                                @elseif($work['media_type']=="movie")
                                    {{$work['title']}}@if (!$loop->last), @endif
                                @endif
                            </span>
                        @endforeach
                    </div>
                </div>
            @endforeach
            {{$actors->links()}}
        </div>
    </div>
@endsection