<?php

use Illuminate\Support\Facades\Route;


if (App::environment('production')) {
    URL::forceScheme('https');
}


// welcome route 
Route::view('/', 'welcome');

// movies routes
Route::get('/movies', 'MoviesController@index')->name('movies.index');
Route::get('/movie/{movie}', 'MoviesController@show')->name('movie.show');

// tv_shows routes 
Route::get('/tv', 'TvController@index')->name('tv.index');
Route::get('/tv/{tv}', 'TvController@show')->name('tv.show');

// actors routes 
Route::get('/actors', 'ActorsController@index')->name('actors.index');
Route::get('/actor/{actor}', 'ActorsController@show')->name('actors.show');

