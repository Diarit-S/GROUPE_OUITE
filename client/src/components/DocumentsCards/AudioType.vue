<template>
  <div data-animate="true" class="audio-container">
    <section class="buttons">
      <img class="playBtn" v-if="!onplay" @click="playAudio" src="../../assets/images/button play black.svg"  >
      <img class="pauseBtn" v-if="onplay" @click="stopAudio" src="../../assets/images/button pause black.svg"  >
      <div data-aos="fade-up" data-aos-anchor-placement="bottom-center" id="waveform"></div>
      <img class="reloadBtn"  @click="wavesurfer.stop() ,  onplay = false " src="../../assets/images/Icon - Back black.svg"  >
    </section>
  </div>
</template>

<script>

import { ViewPort } from '../../libs/viewPort' ;

require( "../../libs/wavesurfer" );
const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

export default {
  data() {
    return {
      wavesurfer : null,
      onplay : false,
      hasVolume : true
    }
  },
  props : ['child','audioName'],
  methods : {
    playAudio() {
      this.wavesurfer.play();
      this.onplay =   this.onplay  ? false : true ;
    },
    stopAudio() {
      this.wavesurfer.pause();
      this.onplay = this.onplay  ? false : true  
    }
  },
  mounted(){
    this.wavesurfer = WaveSurfer.create({
    container: '#waveform',
    scrollParent: true,
    waveColor: 'black',
    backend: "MediaElement",
    barWidth: 0.5 ,
    });

    TweenMax.to('wave' , 0 , { 'overflow-x' : 'hidden' , 'height' : '50px' } )
    this.pathAudio = require( `../../assets/audio/${this.audioName}.mp3` )
    this.wavesurfer.load(  this.pathAudio  );

    let elementDetected =  new ViewPort( this.$el.querySelector('#waveform'));
    elementDetected.detectViewport( ( callback , element )=>{
      if (callback) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }
}

</script>

<style lang="scss" scoped>
.audio-container {
  position: absolute;
  margin: auto;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
} 

#waveform{
  z-index: 100;
  width: 35vw;
  padding: 0px 50px 0px 50px; 
  height: 50px;
  overflow-x:hidden;
  z-index: 2;
  background-color: #F8F8F8;
  border-radius: 35px;
  
  *{
    overflow-x:hidden;
  }
}

h2{
  color: white;
}

.buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  &:hover {
    cursor: pointer;
  }

  img {
    height: 28px;
    position: relative;
    z-index: 3;
    display: block;
    margin: auto; 
    transform: translateY(-2px);
    &:nth-child(1){
    right: -40px;
    }
    &:nth-child(3){
    right: 40px;
    }
  }
}
.mute {
  position: absolute;
  height: 48px;
  top: 13vh;
  right: 7vw;
}

</style>
