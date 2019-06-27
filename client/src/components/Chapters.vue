<template>
  <div :class="css">
    <div class="content">
      <h1 class="title" id="title">How we build the world together</h1>
      <ul class="chapters" id="chapters">
        <li class="available" @click="changeRoute()" id="episode1">
          <p class="episode">Episode 1</p>
          <h2 class="chapter">Computing</h2>
        </li>
        <li id="episode2">
          <p class="episode">Episode 2</p>
          <h2 class="chapter">Medecine</h2>
        </li>
        <li id="episode3">
          <p class="episode">Episode 3</p>
          <h2 class="chapter">Transport</h2>
        </li>
      </ul>
    </div>
    <div class="episode-background background-1" id="background-1"></div>
    <div class="episode-background background-2" id="background-2"></div>
    <div class="episode-background background-3" id="background-3"></div>
  </div>
</template>

<script>

const gsap = require('gsap');
const TweenMax = gsap.TweenMax;

export default {
  data() {
    return {
      css: "background fadeIn"
    }
  },
  methods: {
    changeRoute() {
      this.css = "background fadeOut" 
      setTimeout(() => {
        this.$router.push({ path: "/earth" });
      }, 1000)  
    }
  },
  mounted() {

    setTimeout( () => {
      document.querySelector('#title').classList.add('appeared');

      setTimeout( () => {
        TweenMax.staggerFromTo("#chapters li", 1, {opacity:0}, {opacity:1}, 0.5);
      }, 1000);

    }, 1000);

    var episode1 = document.querySelector('#episode1');
    var episode2 = document.querySelector('#episode2');
    var episode3 = document.querySelector('#episode3');

    var background1 = document.querySelector('#background-1');
    var background2 = document.querySelector('#background-2');
    var background3 = document.querySelector('#background-3');

    episode1.addEventListener('mouseenter', () => {
      background1.style.opacity = 1;
    });
    episode1.addEventListener('mouseleave', () => {
      background1.style.opacity = 0;
    });

    episode2.addEventListener('mouseenter', () => {
      background2.style.opacity = 1;
    });
    episode2.addEventListener('mouseleave', () => {
      background2.style.opacity = 0;
    });

    episode3.addEventListener('mouseenter', () => {
      background3.style.opacity = 1;
    });
    episode3.addEventListener('mouseleave', () => {
      background3.style.opacity = 0;
    });
    
  },
}
</script>

<style lang="scss" scoped>

.background {
  background: url('../assets/images/space.jpg');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
}

.content {
  position: absolute;
  z-index: 10;
}

.title {
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 100px;
  letter-spacing: 0em;
  text-align: center;
  opacity: 0;
  transition: opacity 0.5s, letter-spacing 2s;

  &.appeared {
    opacity: 1;
    letter-spacing: 0.1em;
  }
}

.chapters {
  display: flex;
  justify-content: center;
  

  li {
    border : 2px solid rgba(255, 255, 255, 0.466);
    border-radius: 5px;    
    display: inline-block;
    padding: 20px 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(255, 255, 255, 0.466);
    opacity: 0;

    &:hover {
      cursor: pointer;
    }
  }

  .available {
    border : 2px solid white;
    color: white;
    transition: 0.5s;

    &:hover {
      background: white;
      color: rgb(0, 1, 18);
    }
  }

  li:not(:last-child) {
    margin-right: 60px;
  }
}

.episode {
  font-size: 14px;
  font-style: italic;
  margin-bottom: 1em;
}


.chapter {
  font-size: 22px;
  text-transform: uppercase;
}

.episode-background { 
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  background: transparent;
  background-size: cover;
  background-position: center;
  transition: all 0.8s;
}

.background-1 {
  background-image: url('../assets/images/computing.jpg');
  opacity: 0;
}

.background-2 {
  background-image: url('../assets/images/medecine.jpg');
  opacity: 0;
}

.background-3 {
  background-image: url('../assets/images/transport.jpg');
  opacity: 0;
}

</style>
