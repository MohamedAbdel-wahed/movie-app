<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class MoviesController extends Controller
{
    public function index()
    {
        $movies= Http::get('https://api.themoviedb.org/3/movie/popular?api_key=08e97b2601cbf0fdda9895abee598073')->json()['results'];
        $movies= Http::get('https://api.themoviedb.org/3/movie/now_playing?api_key=08e97b2601cbf0fdda9895abee598073')->json()['results'];
        $genres=$this->getGenres();

        return view('movies.index',compact('movies','genres'));
    }

    public function show($id)
    {
        $movie= Http::get('https://api.themoviedb.org/3/movie/'.$id.'?api_key=08e97b2601cbf0fdda9895abee598073&append_to_response=credits,videos,images')->json();
       
        $cast=collect($movie['credits']['cast'])->take(10);
        $images=collect($movie['images']['backdrops'])->take(10);
               
        return view('movies.show',compact('movie','cast','images'));
    }

    protected function getGenres()
    {
        $genres= Http::get('https://api.themoviedb.org/3/genre/movie/list?api_key=08e97b2601cbf0fdda9895abee598073')->json()['genres'];
        return $genres=collect($genres)->mapWithKeys(function($genre){
                return [ $genre['id']=>$genre['name'] ];
            });
    }

   
}
