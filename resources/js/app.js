import Vue from 'vue'
import NavBar from './components/NavBar' 
import ImageSlider from './components/ImageSlider'

require('./bootstrap')

const app = new Vue({
    el: '#app',
    components:{
        NavBar,
        ImageSlider
    }
 });


 
 

