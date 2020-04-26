<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class TvController extends Controller
{
   public function index()
   {
        $popularShows= Http::get('https://api.themoviedb.org/3/tv/popular?api_key=08e97b2601cbf0fdda9895abee598073')->json()['results'];
        $topShows= Http::get('https://api.themoviedb.org/3/tv/top_rated?api_key=08e97b2601cbf0fdda9895abee598073')->json()['results'];
        $genres=$this->getGenres();

        $topShows=collect($topShows)->take(8);
        return view('tv.index',compact('popularShows','topShows','genres'));

   }

   public function show($id)
   {
        $show= Http::get('https://api.themoviedb.org/3/tv/'.$id.'?api_key=08e97b2601cbf0fdda9895abee598073&append_to_response=credits,videos,images')->json();
      
        $cast=collect($show['credits']['cast'])->take(15);
        $images=collect($show['images']['backdrops'])->take(10);

        return view('tv.show',compact('show','cast','images'));

   }

   protected function getGenres()
   {
       $genres= Http::get('https://api.themoviedb.org/3/genre/movie/list?api_key=08e97b2601cbf0fdda9895abee598073')->json()['genres'];
       return $genres=collect($genres)->mapWithKeys(function($genre){
               return [ $genre['id']=>$genre['name'] ];
           });
   }
}
