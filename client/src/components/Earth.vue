<template>
  <div class="background">

    <div v-if="isEarthRoute()" class="scene3D" id="scene3D" ref="scene3D"></div>

    <router-link class="menu button--small" to="/chapters" id="menu">Back to menu</router-link>

    <div class="title" id="title">
      <h1>How we build the world together</h1>
      <h2>Computing</h2>
    </div>
    <transition name="iconAnim">
      <div class="icons" id="icons" v-if="showInts">
          <div class="icon">
            <svg class="dragIcon" width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3346 10.3748H25.2888C24.6549 10.3771 24.0457 10.6209 23.5852 11.0562C23.2258 10.0061 22.2724 9.25384 21.1524 9.25384C20.4587 9.26289 19.7994 9.55722 19.3301 10.068C18.9061 9.17316 18.0304 8.57319 17.021 8.57319H16.9723C16.3914 8.57319 15.8259 8.74612 15.4398 9.08996V2.72762C15.4398 1.22356 14.2735 0 12.8502 0C11.4283 0 10.2666 1.22255 10.2656 2.72561L10.2545 15.3085L9.49117 14.3806C8.87688 13.6157 7.97228 13.1407 6.99403 13.0688C6.0354 13.0032 5.09234 13.337 4.38832 13.991L3.77327 14.5012C3.58652 14.656 3.53324 14.9202 3.64509 15.1351L9.62639 26.6186C10.7145 28.7091 12.7843 30 15.0281 30H21.7368C25.1388 30 27.9094 27.0595 27.9129 23.4353C27.9144 21.8162 27.9162 20.6117 27.9172 19.6307C27.9207 16.9893 27.9219 16.0018 27.9151 13.0942C27.9116 11.5941 26.7542 10.3748 25.3346 10.3748ZM26.8876 19.6332C26.8866 20.6142 26.8849 21.8152 26.8834 23.4343C26.8804 26.4912 24.5717 28.9705 21.7368 28.9705H15.0281C13.1694 28.9705 11.4494 27.892 10.5393 26.1436L4.74976 15.0248L5.05489 14.7739C5.06143 14.7684 5.06821 14.7636 5.0745 14.7576C5.57141 14.2901 6.2405 14.05 6.9214 14.0955C7.61687 14.1488 8.25932 14.4889 8.6944 15.0343L10.3681 17.072C10.5061 17.2399 10.7346 17.303 10.9392 17.2298C11.1438 17.1567 11.2805 16.9629 11.2808 16.7455L11.2906 2.72661C11.2911 1.7911 11.9956 1.02977 12.8507 1.02977C13.7055 1.02977 14.4103 1.79135 14.4103 2.72762V11.1814C14.4103 11.2106 14.409 11.2397 14.409 11.2691C14.409 11.282 14.4103 11.294 14.4103 11.3063V14.9215C14.4103 15.2057 14.6408 15.4362 14.925 15.4362C15.2093 15.4362 15.4398 15.2057 15.4398 14.9215V11.1988C15.4398 10.2954 16.1388 9.60271 16.9723 9.60271H17.021C17.8761 9.60271 18.5927 10.3334 18.5927 11.2699V14.5766C18.5927 14.8609 18.8232 15.0914 19.1075 15.0914C19.3917 15.0914 19.6222 14.8609 19.6222 14.5766V11.982C19.6222 11.0457 20.3089 10.2839 21.169 10.2839C22.0243 10.2839 22.7108 11.0457 22.7108 11.982V14.4298C22.7108 14.7141 22.9412 14.9446 23.2255 14.9446C23.5098 14.9446 23.7403 14.7141 23.7403 14.4298V13.1045C23.7403 12.168 24.4335 11.4044 25.2888 11.4044H25.3346C26.1876 11.4044 26.8836 12.1649 26.8856 13.0984C26.8924 16.0043 26.8912 16.9931 26.8876 19.6332Z" fill="white"/>
              <path d="M17.2414 5.09852H23.9129L22.7168 6.29467C22.5836 6.42412 22.5303 6.61514 22.5775 6.7946C22.6248 6.97432 22.765 7.11457 22.9448 7.16182C23.1242 7.20882 23.3152 7.15554 23.4447 7.02232L25.512 4.95525C25.7131 4.75417 25.7131 4.42817 25.512 4.22735L23.4447 2.16027C23.2434 1.9612 22.9191 1.96221 22.719 2.16228C22.5187 2.3626 22.5177 2.68684 22.7168 2.88817L23.8976 4.069H17.2414C16.9572 4.069 16.7267 4.29948 16.7267 4.58376C16.7267 4.86803 16.9572 5.09852 17.2414 5.09852Z" fill="white"/>
              <path d="M1.74969 5.09852H8.36187C8.64615 5.09852 8.87663 4.86803 8.87663 4.58376C8.87663 4.29948 8.64615 4.069 8.36187 4.069H1.76502L2.94585 2.88817C3.14492 2.68684 3.14391 2.3626 2.94359 2.16228C2.74351 1.96221 2.41928 1.9612 2.21795 2.16027L0.15062 4.22735C-0.0502065 4.42842 -0.0502065 4.75442 0.15062 4.95525L2.21795 7.02232C2.34764 7.15378 2.53791 7.20556 2.71637 7.15805C2.89483 7.1108 3.03407 6.9713 3.08158 6.79284C3.12908 6.61439 3.0773 6.42437 2.94585 6.29442L1.74969 5.09852Z" fill="white"/>
            </svg>
            <p>Drag to move around</p>
          </div>
          <div class="icon">
            <svg class="clickIcon--strokes" width="40" height="19" viewBox="0 0 40 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M4.47 2.532C3.93428 1.5655 2.7165 1.21628 1.75 1.752C0.783502 2.28772 0.434284 3.5055 0.97 4.472L7.76 16.722C8.29572 17.6885 9.5135 18.0377 10.48 17.502C11.4465 16.9663 11.7957 15.7485 11.26 14.782L4.47 2.532Z" fill="white"/>
              <path d="M38.8619 4.34648C39.3974 3.3804 39.0483 2.16312 38.0822 1.62762C37.1162 1.09211 35.8989 1.44116 35.3634 2.40724L28.5761 14.6519C28.0405 15.618 28.3896 16.8353 29.3557 17.3708C30.3218 17.9063 31.539 17.5572 32.0745 16.5912L38.8619 4.34648Z" fill="white"/>
              <path d="M21.6582 2C21.6582 0.89543 20.7628 0 19.6582 0C18.5536 0 17.6582 0.89543 17.6582 2V13C17.6582 14.1046 18.5536 15 19.6582 15C20.7628 15 21.6582 14.1046 21.6582 13V2Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="39.831" height="18.465" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <svg class="clickIcon" width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.3873 10.4003H19.3415C18.7157 10.3964 18.1116 10.6276 17.6483 11.0483C17.2788 10.0065 16.3256 9.25477 15.2085 9.25477C14.5231 9.25477 13.8675 9.53462 13.3933 10.0293C12.9619 9.14293 12.087 8.52731 11.0805 8.52731H11.0319C10.4832 8.52626 9.95063 8.71466 9.52471 9.06062V2.74628C9.52471 1.23177 8.34834 0 6.91484 0C5.48264 0 4.31149 1.23073 4.31045 2.74419L4.30209 11.0609L1.01361 14.1531C0.0603818 15.0449 -0.25527 16.4262 0.215595 17.6436L3.64909 26.5798C3.65615 26.5986 3.66451 26.601 3.67366 26.619C4.76433 28.7144 6.83958 30 9.08991 30H15.7925C19.2033 30 21.9809 27.0609 21.9843 23.4283C21.9859 21.8093 21.9875 20.6091 21.9888 19.6284C21.9922 16.9903 21.9935 16.0235 21.9867 13.1192C21.983 11.6088 20.8171 10.4003 19.3873 10.4003ZM20.9182 19.635C20.9172 20.6159 20.9154 21.8079 20.9141 23.4272C20.9112 26.4703 18.6136 28.9297 15.7925 28.9297H9.08991C7.24956 28.9297 5.54614 27.8759 4.63681 26.151L1.21403 17.2516C0.899943 16.4416 1.11029 15.5218 1.74551 14.9287L4.29869 12.5291L4.29555 16.7523C4.29529 17.0483 4.53438 17.289 4.83044 17.2903C5.12701 17.29 5.36793 17.0504 5.36976 16.7541L5.37734 11.2947V11.2906L5.37943 2.74497C5.38021 1.82179 6.07423 1.07029 6.91719 1.07029C7.76015 1.07029 8.45442 1.82205 8.45442 2.74628V11.1921C8.45442 11.2213 8.45312 11.2508 8.45312 11.2806C8.45312 11.2934 8.45442 11.306 8.45442 11.3188V14.93C8.45442 15.2255 8.69404 15.4651 8.98957 15.4651C9.2851 15.4651 9.52471 15.2255 9.52471 14.93V11.2101C9.52471 10.319 10.2104 9.59812 11.0319 9.59812H11.0805C11.9232 9.59812 12.6018 10.3575 12.6018 11.2817V14.5858C12.6018 14.8814 12.8414 15.121 13.1369 15.121C13.4325 15.121 13.6721 14.8814 13.6721 14.5858V11.9929C13.6721 11.0687 14.3651 10.317 15.213 10.317C16.0559 10.317 16.7492 11.0687 16.7492 11.9929V14.4387C16.7492 14.7343 16.9888 14.9739 17.2843 14.9739C17.5798 14.9739 17.8195 14.7343 17.8195 14.4387V13.1142C17.8195 12.1902 18.4983 11.4706 19.3415 11.4706H19.3873C20.2281 11.4706 20.9141 12.2041 20.9161 13.1257C20.9232 16.028 20.9216 16.9984 20.9182 19.635Z" fill="white"/>
            </svg>
            <p>Click on the points to discover</p>
          </div>
      </div>
    </transition>
     <transition name="popanim">
       <popup @return-to-earth="closePopup()" class="popup" :index="index" v-if="display"></popup>
     </transition>
    <router-link  class="game" to="/game" id="gameBtn">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="14.25" stroke="white" stroke-width="1.5"/>
        <path d="M24.7395 17.0676C24.6909 15.9554 24.4966 14.7223 24.2052 13.5617C23.9137 12.4494 23.5494 11.4097 23.1122 10.6118C21.4121 7.63775 19.5662 8.09716 17.3559 8.67746C16.6516 8.84671 15.8987 9.04015 15.1214 9.11268H14.8786C14.1013 9.04015 13.3484 8.84671 12.6441 8.67746C10.4338 8.12134 8.58795 7.63776 6.88778 10.636C6.4506 11.4339 6.06199 12.4736 5.79482 13.5858C5.50336 14.7464 5.30906 15.9796 5.26048 17.0918C5.2119 18.3249 5.33335 19.2196 5.60051 19.8482C5.86768 20.4285 6.25629 20.7912 6.76634 20.9363C7.22782 21.0572 7.76215 21.0088 8.32078 20.767C9.26801 20.3802 10.361 19.5581 11.4297 18.5667C12.1826 17.8414 13.5913 17.4787 15 17.4787C16.4087 17.4787 17.8174 17.8414 18.5703 18.5667C19.639 19.5581 20.732 20.3802 21.6792 20.767C22.2378 20.9847 22.7722 21.0572 23.2337 20.9363C23.7194 20.7912 24.1323 20.4527 24.3995 19.8241C24.6667 19.2196 24.7881 18.3249 24.7395 17.0676ZM23.5737 19.4855C23.428 19.8241 23.2337 20.0175 22.9908 20.09C22.7236 20.1626 22.3836 20.1142 21.995 19.9691C21.1449 19.6306 20.1491 18.8811 19.1776 17.9623C18.2546 17.0435 16.6273 16.584 15 16.584C13.3727 16.584 11.7454 17.0435 10.7982 17.9139C9.80235 18.8327 8.80654 19.6064 7.98075 19.9208C7.59214 20.0658 7.2521 20.1384 6.98493 20.0417C6.74205 19.9691 6.54775 19.7757 6.40202 19.4372C6.20772 18.9778 6.11056 18.2282 6.15914 17.116C6.20772 16.0763 6.37773 14.8915 6.66919 13.7793C6.93636 12.7396 7.27639 11.7724 7.68929 11.047C9.02513 8.65328 10.5796 9.04015 12.4255 9.52373C13.1784 9.71716 13.9556 9.9106 14.8057 9.98313C14.83 9.98313 14.83 9.98313 14.8543 9.98313H15.1214C15.1457 9.98313 15.1457 9.98313 15.17 9.98313C16.0444 9.9106 16.8216 9.71716 17.5745 9.52373C19.4204 9.06433 20.9749 8.65328 22.3107 11.047C22.7236 11.7724 23.0636 12.7154 23.3308 13.7793C23.598 14.8915 23.7923 16.0521 23.8409 17.116C23.8894 18.2282 23.7923 18.9778 23.5737 19.4855Z" fill="white"/>
        <path d="M12.7654 12.3527C12.5226 12.1351 12.2311 11.9658 11.8911 11.9417C11.8668 11.6273 11.721 11.313 11.5025 11.0954L11.4782 11.0712C11.211 10.8052 10.871 10.6602 10.4824 10.6602C10.0937 10.6602 9.72943 10.8294 9.48655 11.0712C9.26795 11.2888 9.09794 11.6031 9.07365 11.9417C8.73362 11.9658 8.44216 12.1109 8.19928 12.3285L8.17499 12.3527C7.90782 12.6187 7.76209 12.9572 7.76209 13.344C7.76209 13.7309 7.93211 14.0936 8.17499 14.3354C8.41787 14.5772 8.70933 14.7223 9.07365 14.7464C9.09794 15.0849 9.24367 15.3993 9.48655 15.6169C9.75372 15.8829 10.0937 16.0279 10.4824 16.0279C10.871 16.0279 11.2353 15.8587 11.4782 15.6169C11.6968 15.3751 11.8668 15.0849 11.8911 14.7464C12.2311 14.7223 12.5468 14.5772 12.7654 14.3354C13.0326 14.0694 13.1783 13.7309 13.1783 13.344C13.1783 12.9572 13.0083 12.5945 12.7654 12.3527ZM12.1582 13.7067C12.0611 13.8035 11.9396 13.8518 11.7939 13.8518H11.4539C11.211 13.8518 10.9924 14.0452 10.9924 14.3112V14.6255C10.9924 14.7706 10.9438 14.8915 10.8467 14.9882C10.7495 15.0849 10.6281 15.1333 10.4824 15.1333C10.3366 15.1333 10.2152 15.0849 10.118 14.9882C10.0209 14.8915 9.97231 14.7706 9.97231 14.6255V14.287C9.97231 14.0452 9.778 13.8276 9.51083 13.8276H9.1708C9.02507 13.8276 8.90363 13.7793 8.80648 13.6826C8.73362 13.61 8.66075 13.4891 8.66075 13.344C8.66075 13.199 8.70933 13.0781 8.80648 12.9814C8.80648 12.9814 8.80648 12.9814 8.83077 12.9572C8.92792 12.8846 9.04936 12.8363 9.1708 12.8363H9.51083C9.75371 12.8363 9.97231 12.6429 9.97231 12.3769V12.0384C9.97231 11.8933 10.0209 11.7724 10.118 11.6757C10.2152 11.579 10.3366 11.5306 10.4824 11.5306C10.6281 11.5306 10.7495 11.579 10.8467 11.6757C10.8467 11.6757 10.8467 11.6757 10.871 11.6999C10.9438 11.7966 10.9924 11.9175 10.9924 12.0384V12.3769C10.9924 12.6187 11.1867 12.8363 11.4539 12.8363H11.7939C11.9396 12.8363 12.0611 12.8846 12.1582 12.9814C12.2554 13.0781 12.304 13.199 12.304 13.344C12.304 13.4891 12.2554 13.61 12.1582 13.7067Z" fill="white"/>
        <path d="M19.2261 12.4736C19.6956 12.4736 20.0762 12.0947 20.0762 11.6273C20.0762 11.1599 19.6956 10.7811 19.2261 10.7811C18.7566 10.7811 18.3761 11.1599 18.3761 11.6273C18.3761 12.0947 18.7566 12.4736 19.2261 12.4736Z" fill="white"/>
        <path d="M19.2261 15.9071C19.6956 15.9071 20.0762 15.5282 20.0762 15.0608C20.0762 14.5934 19.6956 14.2145 19.2261 14.2145C18.7566 14.2145 18.3761 14.5934 18.3761 15.0608C18.3761 15.5282 18.7566 15.9071 19.2261 15.9071Z" fill="white"/>
        <path d="M17.5017 14.1903C17.9712 14.1903 18.3518 13.8115 18.3518 13.3441C18.3518 12.8767 17.9712 12.4978 17.5017 12.4978C17.0322 12.4978 16.6516 12.8767 16.6516 13.3441C16.6516 13.8115 17.0322 14.1903 17.5017 14.1903Z" fill="white"/>
        <path d="M20.9506 14.1903C21.4201 14.1903 21.8006 13.8115 21.8006 13.3441C21.8006 12.8767 21.4201 12.4978 20.9506 12.4978C20.4811 12.4978 20.1005 12.8767 20.1005 13.3441C20.1005 13.8115 20.4811 14.1903 20.9506 14.1903Z" fill="white"/>
      </svg>
      <p>Test your knowledge</p>
    </router-link>

  </div> 
</template>

<script>
import Popup from './Popup';

//IMPORTS
const THREE = require('three');

const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

const EffectComposer = require('../libs/three_composer');
const RenderPass = require('../libs/three_renderpass');
const ShaderPass = require('../libs/three_shaderpass');
const UnrealBloomPass = require('../libs/three_unrealbloompass');

const LuminosityHighPassShader = require('../libs/three_luminosityHighPassShader');
const CopyShader = require('../libs/three_copyshader');

export default {
  components : {
    Popup
  },
  data() {
    return {
      showInts: true,
      index : 0,
      display : false,
    }
  },
  methods : {
    callPopup(index) {
      this.index = index;
      this.display = true;
    },
    closePopup() {
      this.display = false;
      console.log(this);
      this.earthBack();
    },
    isEarthRoute(){
      if (this.$route.name == "earth" || this.$route.name == "game") {
        console.log('is earth');
        return true;
      }
    }
  },

  beforeDestroy: function () {
    // this.sceneToDelete = this.$el.querySelector('.scene3D');
    // console.log(this.sceneToDelete)
    
    // this.sceneToDelete.destroy();
  },

  destroyed(){
    console.log('destroyed');
  },

  mounted() {
    
    
    setTimeout( () => {
      document.querySelector('#title').classList.add('appeared');
      document.querySelector('#menu').classList.add('appeared');
      document.querySelector('#icons').classList.add('appeared');
      document.querySelector('#gameBtn').classList.add('appeared');
    }, 1500);


    var earthVue = this;
    
    //WEBGL SCENE
    //Latitude Longitude calcul
    function calcPosFromLatLonRad(lat,lon,radius){
      
      var phi   = (90-lat)*(Math.PI/180);
      var theta = (lon+180)*(Math.PI/180);

      var x = -((radius) * Math.sin(phi)*Math.cos(theta));
      var z = ((radius) * Math.sin(phi)*Math.sin(theta));
      var y = ((radius) * Math.cos(phi));

      return [x,y,z];
    }
       
    //CONST imports
    const container = this.$refs.scene3D;
    const backgroundImg = require( "../assets/images/earth/background.jpg" );
    const earthImg = require( "../assets/images/earth/earthsubstract.jpg" );
    const lightsImg = require( "../assets/images/earth/lights.jpg" );

      
    //Texture loader
    var textureLoader = new THREE.TextureLoader();

    //SCENE
    var scene = new THREE.Scene();
    var backgroundTexture = textureLoader.load( backgroundImg );
    scene.background = backgroundTexture;

    //CAMERA
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 9;
    camera.position.y = 1.8;
    camera.rotation.x = Math.PI/180 * -10; 
    scene.add(camera);

    //RENDERER
    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild(renderer.domElement);

    //COMPOSER (Post Processing)
    var composer = new THREE.EffectComposer( renderer );
    composer.setSize( window.innerWidth, window.innerHeight );
    let renderPass = new THREE.RenderPass(scene,camera);
    composer.addPass(renderPass);
    //Parameters
    var params = {
        exposure: 1,
        bloomStrength: 1,
        bloomThreshold: 0.4,
        bloomRadius: 0.5
    };

    var bloomPass = new THREE.UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
    bloomPass.exposure = params.exposure;
    bloomPass.threshold = params.bloomThreshold;
    bloomPass.strength = params.bloomStrength;
    bloomPass.radius = params.bloomRadius;

    composer.addPass( bloomPass );

    //Important
    var copyPass = new THREE.ShaderPass(THREE.CopyShader);
    copyPass.renderToScreen = true;
    composer.addPass(copyPass);

    //RESPONSIVE
    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize( window.innerWidth, window.innerHeight );
    });

    //LIGHTS
    //Simple
    var pointLight = new THREE.PointLight(0xffffff, 1, 10);
    pointLight.position.set( 2, 2, 5 );
    scene.add( pointLight );
    //Blue arc
    var nblights = 7;
    var arcAngle = 120;
    for(let i= 0; i<nblights;i++){
        var angle  = Math.PI/180 * (arcAngle/(nblights-1)) * i;
        var x = Math.cos(angle) * 15; 
        var y = Math.sin(angle) * 15; 

        var directionalLight = new THREE.DirectionalLight( 0x56bbff , 0.6 );
        directionalLight.position.set( x, y, -22 );
        directionalLight.target.position.set( 0,0,0 );
        scene.add( directionalLight );
    }
    //Ambient
    var ambientLight = new THREE.AmbientLight( 0xd8d8d8 );
    scene.add( ambientLight );

    //EARTH
    //Textures
    var earthTexture = textureLoader.load( earthImg );
    var lightsTexture = textureLoader.load( lightsImg );
    //Object
    var earthGeometry = new THREE.SphereGeometry( 2.8, 50, 50 );
    var earthMaterial = new THREE.MeshStandardMaterial({
        //color : 0x001B5A,
        map : earthTexture,
        
        emissiveMap: lightsTexture,
        emissive: 0xffefd3,
        emissiveIntensity : 0.7,

        roughness : 0.7,
        metalness : 0.4
    })
    var earth = new THREE.Mesh( earthGeometry, earthMaterial);
    earth.rotation.y -= 97;
    scene.add( earth );
    earth.material.needsUpdate = true;

    //POINTS
    var placePoint = function(name, lat, long, callback ) {
        var pointGeometry = new THREE.SphereGeometry( 0.13, 32, 32 );
        var pointMaterial = new THREE.MeshBasicMaterial({
            color : 0xff9a0c
        });

        var point = new THREE.Mesh( pointGeometry, pointMaterial );
        earth.add( point );

        var coord = calcPosFromLatLonRad( lat, long, 2.7);
        point.position.set( coord[0], coord[1], coord[2] );
        point._name = name;
        point._callback = callback;

        return point;
    }
    //Creating the points + Action on click (APPEL VUE.JS)
    var mathematicsEgyptPoint = placePoint( 'mathematicsEgyptPoint', 30.044420, 31.235712 , () => {
        this.callPopup(1);
    });
    var binaryChinaPoint = placePoint( 'binaryChinaPoint', 35.861660, 104.195397 , () =>{
        this.callPopup(2);
    });
    var computersEnglandPoint = placePoint( 'computersEnglandPoint', 51.5073509, -0.1277583 , ()=>{
        this.callPopup(3);
    });
    var programmingItalyPoint = placePoint( 'programmingItalyPoint', 41.86009225771948, 12.508575535957334 , ()=>{
        this.callPopup(4);
    });
    var internetAmericaPoint = placePoint( 'internetAmericaPoint', 37.090240, -95.712891 , ()=>{
        this.callPopup(5);
    });

    //RAYCASTER + DRAG MOUSEMOVE
    //Table for raycasting the points
    var points = [mathematicsEgyptPoint, binaryChinaPoint, computersEnglandPoint, programmingItalyPoint, internetAmericaPoint, earth];
    var pickedObject;
    var raycast = new THREE.Raycaster();
    //Init Drag mousemove
    var normalizedPosition = { x : 0, y : 0 };
    var mousehold = false;
    var startMouseX = 0;
    var mouseDelta = 0;
    var earthRotY = 0;
    
    //Drag Listeners
    this.$refs.scene3D.addEventListener("mousedown", function(event) {
        if ( pickedObject ) {
            pickedObject._callback();
            //Move the earth
            TweenMax.to(camera.position,2,{x: -2, z: 6 , ease: Power4.easeInOut});
            
        } else {
            mousehold = true;
            startMouseX = event.clientX;
            earthRotY = earth.rotation.y; 
        }

        earthVue.showInts = false;
    });

    this.$refs.scene3D.addEventListener("mouseup",function(){
        mousehold = false;
    });

    this.$refs.scene3D.addEventListener("mousemove", function(event) {
        if ( mousehold ) {
            mouseDelta = (event.clientX - startMouseX) / window.innerWidth;
            earth.rotation.y = earthRotY + mouseDelta * Math.PI * 1; //rotation speed
        }

        normalizedPosition.x = (event.clientX / container.clientWidth ) *  2 - 1;
        normalizedPosition.y = (event.clientY / container.clientHeight) * -2 + 1;  //flip Y because of canvas coord
    });

    //BackBtn animation
    /*
    document.getElementById("backBtn").addEventListener("click",function(){
        TweenMax.to(camera.position,2,{x: 0, z: 9 ,ease: Power4.easeInOut});
    });
    */ 
    this.earthBack = () => {
      TweenMax.to(camera.position,2,{x: 0, z: 9 ,ease: Power4.easeInOut});
    }
  


    // console.log(this.$refs);
    
    

    //CLOCK
    var clock = new THREE.Clock();

    //RENDER
    var render = function() {
        var delta = clock.getDelta();
      
        //Points color init
        for(let i = 0; i < points.length; i++){
            if ( points[i] != earth ){
                points[i].material.color.setHex(0xff9a20);
            }
        }

        //Raycasting
        raycast.setFromCamera(normalizedPosition, camera);
        //get the list of objects the ray intersected
        const intersectedObjects = raycast.intersectObjects( points );
        if (intersectedObjects.length) {
            //pick the first object. It's the closest one
            var intersectObj = intersectedObjects[0].object;
            //check it's not the earth
            pickedObject = intersectObj == earth ? null : intersectObj;
            //Change color on hover
            if (pickedObject ){
              pickedObject.material.color.setHex(0xffc57f);
            }
        }

        //Earth rotation animation
        if(!mousehold && pickedObject == null){
            earth.rotation.y += (Math.PI / 180) * 5 * delta;
        }

        //Grabbing cursor
        if ( mousehold && pickedObject == null ) {
            container.classList.add("grabbing");
        } else {
            container.classList.remove("grabbing");
        }

        //Select cursor
        if ( pickedObject ) {
            container.classList.add("selected");
        } else {
            container.classList.remove("selected");
        }

        //Rendering
        composer.render();
        requestAnimationFrame( render );
    }

    render();
    TweenMax.from(camera.position,2.5,{y:10, delay:1, ease: Power4.easeOut});

  },
}




</script>

<style lang="scss" scoped>

.popup {
  position: absolute;
  z-index: 20;
}

.scene3D {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
}

.popanim-enter {
  opacity: 0;
  transform: translateY(50px);
}

.popanim-enter-active {
  transition: all 1s ease-in-out;
  transition-delay: 0.5s;
}

.popanim-leave-to {
  opacity: 0;
  transform: translateY(50px);
}

.popanim-leave-active {
  transition : all 1s ease-in-out;
  transition-delay: 0.5s;
}

.background {
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.5s;
  transition-delay: 0.5s;

  &.appeared {
    opacity: 1;
  }
}

.icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  width: 80vw;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;
  transition-delay: 0.8s;

  &.appeared {
    opacity: 1;
  }
}

.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  text-align: center;

  p {
    line-height: 120%;
    margin-top: 10px;
    pointer-events: none;
  }
}

.dragIcon {
  animation: dragAnimation 0.8s linear 0s infinite alternate;
}

@keyframes dragAnimation {
  from {
    transform: translateX(-15px);
  }

  to {
    transform: translateX(15px);
  }
}

.clickIcon {
  animation: pulse 0.4s linear 0s infinite alternate;
}

@keyframes pulse {
  from {
    transform: scale(0.8);
  }

  to {
    transform: scale(1);
  }
}

.clickIcon--strokes {
  height: 10px;
  transform: translate(-3px, 0px);
  animation: strokes 0.4s linear 0s infinite alternate;
}

@keyframes strokes {
  from {
    transform: translate(-3px, 0px);
  }

  to {
    transform: translate(-3px, -5px);
  }
}

.title {
  position: absolute;
  top: 30px;
  text-align: center;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;

  &.appeared {
    opacity: 1;
  }
}

h1 {
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

h2 {
  font-size: 30px;
  text-transform: uppercase;
  line-height: 150%;
}

.game {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  bottom: 30px;
  left: 50px;
  text-decoration: none;
  color: white;
  opacity: 0;
  transition: opacity 0.5s;
  transition-delay: 1s;

  &.appeared {
    opacity: 1;
  }

  p {
    text-transform: uppercase;
    font-size: 17px;
    margin-left: 10px;
  }
}

.point {
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.pop-up {
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  padding: 29px;
  right: 10vw;
  width: 270px;
  height: 280px;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.788);
  

  h3 {
    text-transform: uppercase;
    font-size: 30px;
    text-align: center;
  }
}


.iconAnim-leave-to {
  opacity: 0;
}

.iconAnim-leave-active {
  transition: all 0.5s ease-in-out;
}

</style>
