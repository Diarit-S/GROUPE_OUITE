<template>
 <div class="visit-container" :style="current()" :class="{shadow : isInStorage()}">    <h2>{{child.name.toUpperCase()}}</h2>
    <router-link class="button" :to="goToDocument()">READ</router-link>
    <img class="visit__img" :src="earthImgSrc()">
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  props : ['parent', 'child', 'childIndex'],
  mounted: function() {
    if (localStorage.getItem('cardOrder')) {
      console.log('abc');
      const order = JSON.parse(localStorage.getItem('cardOrder'));
      const position = order.indexOf(this.childIndex +1);
      this.$el.style.order = position;
    }
    
  },
  updated() {
     if (localStorage.getItem('cardOrder')) {
      console.log('abc');
      const order = JSON.parse(localStorage.getItem('cardOrder'));
      const position = order.indexOf(this.childIndex +1);
      this.$el.style.order = position;
    }
  },
  methods : {
    goToDocument(){
      return `/document/${this.childIndex+1}`
    },
    earthImgSrc(){
      return require (`../../assets/images/toVisit/${this.child.toVisitImg}.png`)
    },
    isInStorage(){
        this.storageTable = JSON.parse(localStorage.getItem('readed'))
          if (this.storageTable !== null && this.storageTable.includes(this.childIndex+1)) {
            
            return true;
          }
          return false;
    },
    
    current(){


      if (parseInt(this.$route.params.id) === this.childIndex+1) {
        return `filter : grayscale(0); opacity: 1; box-shadow: 0px 0px 34px 8px rgba(176,176,176,0.6); `;
      } else {
        return `order: ${parseInt(this.position)};`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
   .visit-container {
    background: rgba(255, 255, 255, 0.10);
    width: 18vw;
    border-radius: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    h2 {
      margin-top: 40px;
      margin-bottom: 40px;
      font-size: 2em;
      font-weight: 700;
    }

    .visit__img {
      // align-self: flex-end;
      //transform: translateY(100px);
      transform: scale(0.9);
    }

    @media (max-width: 1400px) { 
      h2 {
        font-size: 1.5em;
      }
    }
  } 

  .shadow {
    filter: grayscale(1);
    opacity: 0.5;
  }


</style>