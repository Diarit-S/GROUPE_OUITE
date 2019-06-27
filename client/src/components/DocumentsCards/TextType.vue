<template>
  <div :class="textAlign()">
    <div class="animation">
      <h2 class="title">{{child.title}}</h2>
      <p v-for="text in child.texts" :key="text" >{{text}}</p>
    </div>
    <span v-if="child.hints" class="hints-available" @click="showHints()">Reveal the answer</span>
    <ul v-if="child.hints" :class="hints">
      <li v-for="hint in child.hints" :key="hint">{{hint}}</li>
    </ul>
  </div>
</template>

<script>

import { ViewPort } from '../../libs/viewPort' ;

export default {
  data() {
    return {
      hints: "hints hidden"
    }
  },
  props : ['childId', 'parentName', 'child'],
  methods: {
    textAlign() {
      if(this.child.position === "right") {
        return "text-container right"
      } else {
        return "text-container"
      }
    },
    showHints() {
      this.hints =  this.hints === "hints hidden" ? "hints" : "hints hidden"
    }
  },
  mounted(){
    setTimeout( () => {
      let elementDetected =  new ViewPort( this.$el.querySelector('.animation') );
      elementDetected.detectViewport( ( callback , element )=>{
        if (callback) {
          element.classList.add('active');
        } else{
          element.classList.remove('active');
        }
      });
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>

.animation {
  transform: translateY(100px) scale( 0.8 ) ;
  opacity: 0;
  transition-duration: 0.8s;

  &.active{
  transform: translateY(0px) scale( 1.0 );
  opacity: 1;
  }
}

.text-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #000112;
  color: white;
  width: 50%;
  height: 100vh;
  padding: 0px 50px;

  &.right {
    text-align: right;
  }
} 
  button{
  background-color: gray;
  border: gray solid 1px ;
}
.title {
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: calc(50px * 10 / 100);
  margin-bottom: 50px;
  line-height: 150%;
}

p {
  font-size: 20px;
  line-height: 150%;
  margin-bottom: 30px;
}

.hints-available {
  text-transform: uppercase;
  position: relative;
  transform: translateX(-70px);
  font-size: 17px;
  font-style: italic;
  margin-bottom: 30px;
  cursor: pointer;

  &::after {
    content: url('../../assets/images/idea.svg');
    position: absolute;
    right: -70px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.hints {
  display: flex;
  justify-content: space-between;


  li {
    border: 2px solid white;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    line-height: 130%;
    margin-left: 10px;
    margin-right: 10px;
  }

  &.hidden {
    visibility: hidden;  
  }

}
</style>
