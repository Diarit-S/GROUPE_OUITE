<template>
  <div :class="css">
    <div class="back-to-earth" id="back-to-earth" @click="changeRoute()">
      <svg class="circle" xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78">
        <g id="Groupe_4" data-name="Groupe 4" transform="translate(-1057 -287)">
          <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(1057 287)" fill="none" stroke="#ffffff" stroke-width="5">
            <!-- <circle cx="39" cy="39" r="39" stroke="none"  fill="none"/> -->
            <circle class="exterieur" cx="39" cy="39" r="36.5" fill="none"/>
          </g>
        </g>
      </svg>

      <svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve" width="512px" height="512px">
        <g>
          <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z" data-original="#000000" class="active-path" data-old_color="#FDFDFD" fill="#FFFFFF"/>
        </g>
      </svg>
      <p>Back to earth</p>
    </div>

    <p v-if="error">{{error}}</p>

    <div>
      <div v-if="facts.length" class="container">
        <!-- binding the attribute name, to get it on child component header -->
        <document-header :parent="facts[id-1]" :functions="scrollControlled" ></document-header>
        <component v-for="child in facts[id-1].childComponents" :is="child.type" :key="child.id" :childId="child.id" :parentName="facts[id-1].name" :child="child"></component>
        <document-footer :parent="facts"></document-footer>
      </div>
    </div>
    <!-- END OF FACTS -->
  </div>
  
</template>

<script>


import factService from '../factService'; 
import ImageType from './DocumentsCards/ImageType'; 
import Video from './DocumentsCards/Video'; 
import Poster from './DocumentsCards/Poster'; 
import TextType from './DocumentsCards/TextType'; 
import DocumentHeader from './DocumentsCards/Base/DocumentHeader.vue'; 
import DocumentFooter from './DocumentsCards/Base/DocumentFooter.vue'; 
import { draw } from '../libs/svgDrawing';
import { scrollControlled } from '../libs/scrollControlled';
import {eventBus} from '../main';


const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

export default {
  components: {
    ImageType,
    Video,
    Poster,
    TextType,
    DocumentHeader,
    DocumentFooter
  },
  data() {
    return {
      facts : [],
      error : '',
      getStorage : [],
      readed : [1,2,4],
      scrollControlled : null,
      css: "fadeIn"
    }
  },
  // Call facts in db 
  async created() {
    try {
      this.facts = await factService.getFacts(); // getFacts is defined in factService.js
    } catch (err) {
      this.error = err.message;
    }
  },

  mounted(){
      
      setTimeout( () => {
        document.querySelector('#back-to-earth').classList.add('appeared');
        draw( document.querySelector('body') );
      }, 1000);
  },

  methods : {
    changeRoute() {
      this.css = "fadeOut" 
      setTimeout(() => {
        this.$router.push({ path: "/earth" });
      }, 1000)  
    }
  },


  updated() {
    this.css = "fadeIn" 
      
    window.scrollTo(0,0);

    if (localStorage.getItem('readed')) {
      
      var readed = JSON.parse(localStorage.getItem('readed'));
      
      if (!readed.includes(parseInt(this.id))) {
        readed.push(parseInt(this.id));
      }
      localStorage.setItem('readed', JSON.stringify(readed));
      
    } else {
      var readed = [];
      readed.push(parseInt(this.id));
      localStorage.setItem('readed', JSON.stringify(readed))
    }

    this.allCards = [];
    readed.forEach(element => {
      this.allCards.push(element);
    });
    this.allCards.sort();
    let currentIndex = this.allCards.indexOf(parseInt(this.id));
    this.allCards.splice(currentIndex, 1);
    this.allCards.push(parseInt(this.id));
    
    for (let i = 1; i <= this.facts.length; i++) {
      
      if (!this.allCards.includes(i)) {
        this.allCards.push(i);
        
      } 
    }
    localStorage.setItem('cardOrder', JSON.stringify(this.allCards));
  },
  computed : {
    // Get the route parameters (in this case, the id)
    id(){
      return this.$route.params.id;
    },
  }
}

</script>

<style lang="scss" scoped>

.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  background-color: #000112;

  * {
    box-sizing: border-box;
  }
}


.back-to-earth {
  position: fixed;
  z-index: 30;
  top: 20px;
  left: 25px;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  opacity: 0;
  transition: opacity 0.5s;
  transition-delay: 1.5s;

  &.appeared {
    opacity: 1;
  }

  .circle {
    height: 40px;
    width: 40px;
    margin-right: 10px;
  }

  .arrow {
    height: 15px;
    width: 15px;
    position: fixed;
    transform: translate(12px, 12px);
  }

  p {
    transform: translateY(13px);
  }
}
 
</style>