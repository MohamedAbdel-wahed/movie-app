<template>
  <div>
      <vueper-slides :breakpoints="breakpoints" class="no-shadow" :slide-ratio="1/2" fixed-height="300px" :gap="3" :dragging-distance="70" >
          <vueper-slide v-for="(slide,i) in images" :key="i" :image="'https://image.tmdb.org/t/p/w300/'+slide.file_path" />
      </vueper-slides>
  </div>
</template> 

 
<script>
import {VueperSlides,VueperSlide} from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    props:['images'],
    components: {
        VueperSlides,
        VueperSlide
    },
    data(){
        return {
            breakpoints:{
                640:{ visibleSlides:1, fixedHeight:"300px"},
                768:{ visibleSlides:2, fixedHeight:"300px"},
                1024:{ visibleSlides:3, fixedHeight:"300px"},
                1280:{ visibleSlides:4, fixedHeight:"300px"},
                3000:{ visibleSlides:5, fixedHeight:"300px"},
            }
        }
    }, 
}
</script> 

<style>
  .ex--center-mode{
      width:600px;
      max-width:90%;
      margin:auto
  }


</style>