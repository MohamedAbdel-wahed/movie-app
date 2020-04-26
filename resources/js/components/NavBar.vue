<template>
    <div>
        <nav class="fixed top-0 z-50 border-b border-gray-800 bg-gray-900 shadow-sm w-full h-20" >
            <div class="container mx-auto flex items-center justify-between py-6 px-6 ">
                <div class=" items-end flex md:hidden">
                <button class="focus:outline-none border-0 " @click="showSideNav=!showSideNav">
                        <i class="material-icons text-gray-500 hover:text-white cursor-pointer menu-icon select-none">list</i>
                </button>
                </div>
                <ul class="relative flex items-center hidden md:flex"> 
                    <li class="md:mr-8 lg:mr-0">
                        <a href="/popular-movies" class="flex text-gray-400 font-semibold text-lg">
                            <i class="material-icons">local_movies</i>       
                            <span class="ml-1">MovieApp</span>
                        </a>
                    </li>
                    <li class="relative z-20 lg:ml-16 hover:text-red-400 text-sm cursor-pointer">
                        <div class="flex items-center">
                            <a @contextmenu.prevent="showSideNav=!showSideNav" href="/movies">MOVIES</a>
                            <i class="material-icons font-extrabold ml-1 hover:text-green-600" @click="showSideNav=!showSideNav">arrow_downward</i>
                        </div>
                        <button v-if="showSideNav" @click="showSideNav=false" class="hidden sm:block h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-25"></button>
                        <div v-if="showSideNav" class="absolute mt-5 shadow-lg flex flex-col justify-center items-center rounded-lg h-24 w-40 bg-gray-700">
                            <a href="#playing" @click="showSideNav=false" class="w-full text-white text-semibold hover:text-blue-600 py-1 mt-1 rounded-sm text-center">Playing Movies</a>
                            <a href="#popular" @click="showSideNav=false" class="w-full text-white text-semibold hover:text-blue-600 py-1 rounded-sm text-center">Popular Movies</a>
                        </div>
                    </li>
                    <li class="ml-4 lg:ml-6 hover:text-red-400 text-sm"><a href="/tv">TV SHOWS</a></li>
                    <li class="ml-4 lg:ml-6 hover:text-red-400 text-sm"><a href="/actors">ACTORS</a></li>
                </ul>
                <button @click="showSearchResults=false" v-if="showSearchResults" class="h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-50"></button>
                <div class="flex items-center justify-between relative">
                        <input type="text" @keyup="getSearchResults()" v-model="search" class="pl-10 py-2 w-48 md:w-64 text-xs rounded-full focus:outline-none focus:shadow-outline bg-gray-700" placeholder="Search">
                        <i class="material-icons absolute ml-2 select-none text-gray-800 cursor-pointer">search</i>
                    <div class="ml-3 hidden md:block">
                        <img src="/images/panda.jpeg" class="h-12 w-12 rounded-full select-none">
                    </div>
                    <div v-if="showSearchResults" style="margin-top:9rem" class=" w-48 md:w-64 absolute flex flex-col items-start rounded-lg bg-gray-900">
                        <div class="flex justify-start items-center py-1 px-4 w-full border-b border-gray-500 hover:text-blue-600" v-for="(movie,index) in searchResults" :key="index">
                             <img :src="'https://image.tmdb.org/t/p/w400/'+movie.poster_path" class="h-6 w-6 rounded-full select-none ">
                            <a :href="'/movie/'+movie.id" class="text-xs ml-2">{{movie.title}}</a>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>

        <button v-if="showSideNav" @click="showSideNav=false" class="h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-25"></button>
        <ul id="mobile-nav" class="md:hidden flex flex-col items-center w-1/2 sm:w-5/12  border-r-2 border-gray-900 h-screen shadow-sm bg-gray-900 fixed top-0 z-60" v-if="showSideNav">
            <li class="mt-24 md:hidden">
                <img src="/images/panda.jpeg" class="rounded-full h-20 w-20 select-none">
            </li>
            <li class="mt-3 pb-5  ">
                <a href="#" class="flex text-gray-400 font-bold text-xl tracking-wide select-none items-center">
                    <i class="material-icons">local_movies</i>       
                    <span class="ml-1">MovieApp</span>
                </a>
            </li>
        <hr class="border border-gray-700 w-full">
            <li id="movies" :class="[showDropdown?addActive('movies'):removeActive('movies')]" class="flex justify-center items-center mt-5 text-sm hover:bg-gray-700 rounded-sm  py-2 w-full text-center cursor-pointer">
                <a class="select-none text-base" href="/movies">MOVIES</a>
                <i class="material-icons select-none font-extrabold ml-2 text-gray-200 hover:text-green-600" @click="showDropdown=!showDropdown">arrow_downward</i>
            </li>
            <button v-if="showDropdown" @click="showDropdown=false" class="h-full w-full fixed top-0 bottom-0 right-0 left-0 bg-gray-800 opacity-25"></button>
            <div v-if="showDropdown" class="border border-gray-700 shadow-xl absolute mt-56 ml-40 sm:ml-48 h-32 w-40 bg-gray-800 rounded-md text-center flex items-center justify-center ">
               <div class="w-full">
                    <a href="#playing" id="playing" @click="activatePlaying()" :class="[showDropdown && showPlaying ? dropDownActivate('playing'):'']" class="px-1 py-1 rounded-sm block mt-1 text-sm hover:text-gray-300">Playing Movies</a>
                    <a href="#popular" id="popular" @click="activatePopular()" :class="[showDropdown && showPopular ? dropDownActivate('popular'):'']" class="px-1 py-1 rounded-sm block mt-1 text-sm hover:text-gray-300">Popular Movies</a>
               </div>
            </div>
            <li id="shows" class=" mt-2 py-2 text-sm hover:bg-gray-700 rounded-sm w-full text-center cursor-pointer" @click="addActive('shows')">
                <a href="#" class="select-none w-full mr-4">TV SHOWS</a>
            </li>
            <li id="actors" class="mt-2 py-2 text-sm hover:bg-gray-700 rounded-sm w-full text-center cursor-pointer" @click="addActive('actors')" >
                <a href="/actors" class="select-none w-full mr-4">ACTORS</a>
            </li>
        </ul>
    </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'


export default {
    name:'NavBar', 
    data(){
        return{
            showSideNav:false, 
            showDropdown:false,
            showPopular:false,
            showPlaying:false,
            showSearchResults:false,
            search:'',
            searchResults:null,
        }
    },
    methods:{
        getSearchResults(){
            if(this.search.length >=2){
                this.showSearchResults=true
                axios.get('https://api.themoviedb.org/3/search/movie?api_key=08e97b2601cbf0fdda9895abee598073&query='+this.search)
                    .then(res=>{
                        this.searchResults= res.data.results.slice(0,7)
                    })
            }else{
               this.showSearchResults=false
            }
        },
        activatePopular(){
            this.showPopular=true
            this.showPlaying=false
            this.showDropdown=false
            this.showDropdown=false
        },
        activatePlaying(){
            this.showPopular=false
            this.showPlaying=true
            this.showDropdown=false
            this.showDropdown=false
        },
        addActive(id){
            $(function(){
                $('#'+id).addClass(['text-red-700','font-bold'])
                         .siblings().removeClass(['text-red-700','font-bold'])
                         
            })

        },
        dropDownActivate(id){
             $(function(){
                $('#'+id).addClass(['text-blue-600','font-bold'])
                         .siblings().removeClass(['text-blue-600','font-bold'])
                         
            })
        },
        removeActive(id){
            $(function(){
                        $('#'+id).removeClass(['text-red-700','font-bold'])
                         
            })
        }
    }
}
</script>

<style scoped>

     .menu-icon:active{
             color:rgba(224, 71, 24, 0.849);
         }


    
</style>
