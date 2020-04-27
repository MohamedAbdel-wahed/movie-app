<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class ActorsController extends Controller
{
    public function index()
    {
        $actors= Http::get('https://api.themoviedb.org/3/person/popular?api_key=08e97b2601cbf0fdda9895abee598073')->json()['results'];
            
        return view('actors.index',compact('actors'));
    }

    public function show($id)
    {
        $actor= Http::get('https://api.themoviedb.org/3/person/'.$id.'?api_key=08e97b2601cbf0fdda9895abee598073')->json();
        $social= Http::get('https://api.themoviedb.org/3/person/'.$id.'/external_ids?api_key=08e97b2601cbf0fdda9895abee598073')->json();
        $works= Http::get('https://api.themoviedb.org/3/person/'.$id.'/combined_credits?api_key=08e97b2601cbf0fdda9895abee598073')->json();

        $movies=collect($works['cast'])->sortByDESC('popularity')->take(6);
    
        return view('actors.show',compact('actor','social','movies'));
    }
}
