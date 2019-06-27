<template>
  <div :class="css">
    <div v-if="facts.length && index>0" class="popup__if">
      <div @click="$emit('return-to-earth')" class="arrow-to-earth">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 492 492" style="enable-background:new 0 0 492 492;" xml:space="preserve" width="512px" height="512px" class="">
            <g>
              <path d="M464.344,207.418l0.768,0.168H135.888l103.496-103.724c5.068-5.064,7.848-11.924,7.848-19.124    c0-7.2-2.78-14.012-7.848-19.088L223.28,49.538c-5.064-5.064-11.812-7.864-19.008-7.864c-7.2,0-13.952,2.78-19.016,7.844    L7.844,226.914C2.76,231.998-0.02,238.77,0,245.974c-0.02,7.244,2.76,14.02,7.844,19.096l177.412,177.412    c5.064,5.06,11.812,7.844,19.016,7.844c7.196,0,13.944-2.788,19.008-7.844l16.104-16.112c5.068-5.056,7.848-11.808,7.848-19.008    c0-7.196-2.78-13.592-7.848-18.652L134.72,284.406h329.992c14.828,0,27.288-12.78,27.288-27.6v-22.788    C492,219.198,479.172,207.418,464.344,207.418z" data-original="#000000" class="active-path" data-old_color="#FDFDFD" fill="#FFFFFF"/>
            </g>
          </svg>
        </div>
      <transition>
        <h2>{{facts[index-1].name.toUpperCase()}}</h2>
      </transition>
      <div class="popup__card">
        <p>{{facts[index-1].popupIntro}}</p>
        <div class="button" @click="changeRoute()">DISCOVER</div>
      </div>
    </div>
  </div>
</template>

<script>
import factService from '../factService'; 


export default {
  props : {
    index : {
    }
  },
  data() {
    return {
      facts : [],
      error : '',
      css: "popup"
    }
  },
  async created() {
    try {
      this.facts = await factService.getFacts(); // getFacts is defined in factService.js
    } catch (err) {
      this.error = err.message;
    }
  },
  methods : {
    changeRoute() {
      this.css = "popup fadeOut" 
      setTimeout(() => {
        this.$router.push({ path: `/document/${this.index}` });
      }, 1000)  
    }
  },
}
</script>

<style lang="scss" scoped>

  .popup {
    position: absolute;
    left: 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 350px;

    .popup__if {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
      justify-content: space-around;
      
      h2 {
        font-size: 40px;
        text-align: center;
        margin-bottom: 20px;
      }
      
    }
    
  }
  .popup__card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 20px;
    position: relative;
    height: auto;
    width: 100%;
    background-color:#02152B;
    border-radius: 15px;
    color: white;

    p {
      font-size: 16px;
      line-height: 25px;
      margin-bottom: 20px;
    }

    .discover {
      width : 100px;
      padding: 10px 10px;
    }

  }

  .arrow-to-earth {
    height : 40px;
    cursor : pointer;
    margin-bottom: 20px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
</style>
