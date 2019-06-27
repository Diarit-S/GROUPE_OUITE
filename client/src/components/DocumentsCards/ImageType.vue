<template>
  <div class="image-container" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
    <img :src="Image()" :alt="getAlt()">
    <div v-if="child.audio">
      <audio-type :audioName="audioName()" :child="child"></audio-type>
    </div>
  </div>
</template>

<script>

import AudioType from './AudioType.vue'; 
import { ViewPort } from '../../libs/viewPort' ;

require( "../../libs/wavesurfer" );

export default {
  components : {
    AudioType
  },
  props : ['childId', 'parentName', 'child'],
  data() {
    return {
    }
  },
  mounted(){
    let elementDetected =  new ViewPort( this.$el.querySelector('img') );
    elementDetected.detectViewport( ( callback , element )=>{
      if (callback) {
        element.classList.add('active');
      } else{
        element.classList.remove('active');
      }
    });
  },
  methods : {
    imgUrl() {
      if (this.child.image) {
        if(this.child.png) {
          return require (`../../assets/images/${this.child.image}.png`)
        } else {
          return require (`../../assets/images/${this.child.image}.jpg`)
        }
      }
    },
    Image() {
      return this.imgUrl()
    },
    audioName() {
      if (this.child.audio) {
        return this.child.audio
      }
    },
    getAlt() {
      if (this.child.alt) {
        return this.child.alt
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000112;
  width: 50%;
  height: 100vh;
  position: relative;
}

img {
  max-width: 100%;
  max-height: 95%;
  border-radius: 10px;
  
  transform: translateY(100px) scale( 0.8 ) ;
  opacity: 0;
  transition-duration: 0.8s;

  &.active{
  transform: translateY(0px) scale( 1.0 );
  opacity: 1;
  }
}
</style>
