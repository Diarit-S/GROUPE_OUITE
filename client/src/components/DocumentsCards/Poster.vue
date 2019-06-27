<template>
  <div :class="cardPosition()" :style="bgImage()">
    <div class="card">
      <h2 class="title">{{child.title}}</h2>
      <p v-for="text in child.texts" :key="text" class="content">{{text}}</p>
    </div>
  </div>
</template>

<script>

import { ViewPort } from '../../libs/viewPort' ;

export default {
  data() {
    return {
    }
  },
  props : ['childId', 'parentName', 'child'],
  methods : {
    imgUrl() {
      if (this.child.image) {
        return require (`../../assets/images/${this.child.image}.jpg`)
      }
    },
    bgImage() {
      return `background-image : url(${this.imgUrl()})`
    },
    cardPosition() {
      if (this.child.position === "left") {
        return "poster-container "
      } else {
        return "poster-container right"
      }
    }
  },
  mounted(){
    let elementDetected =  new ViewPort( this.$el.querySelector('.card') );
    elementDetected.detectViewport( ( callback , element )=>{
      if (callback) {
        element.classList.add('active');
      }else{
        element.classList.remove('active');
      }
    });
  }
}
</script>

<style lang="scss" scoped>


.poster-container {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #000112;
  color: white;
  display: flex;
  align-items: center;
  padding: 0px 50px;

  &.right {
    justify-content: flex-end;
    text-align: right;
  }
} 

.title {
  font-size: 40px;
  text-transform: uppercase;
  letter-spacing: calc(50px * 10 / 100);
  margin-bottom: 25px;
}

.card {
  background: rgba(255, 255, 255, 0.10);
  border-radius: 10px;
  padding: 30px 30px;
  width: 500px;
  transform: translateY(100px) scale( 0.8 ) ;
  opacity: 0;
  transition-duration: 0.8s;

  &.active{
  transform: translateY(0px) scale( 1.0 );
  opacity: 1;
  }
}

.content {
  font-size: 20px;
  line-height: 150%;


  &:not(:last-child) {
    margin-bottom: 20px;
  }
}

</style>