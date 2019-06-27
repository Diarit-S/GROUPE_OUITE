<template>
  <div class="header" :style="bgImage()">
    <h1 class="title" id="title">{{ parent.name }}</h1>
    <figure id="figure" v-if="parent.quote">
      <blockquote>{{ parent.quote }}</blockquote>
      <figcaption class="author">{{ parent.quoteAuthor }}</figcaption>
    </figure>
    <p class="description" v-else>{{ parent.introduction }}</p>
    <span class="scroll" id="scrollDown">Scroll</span>
  </div>
</template>

<script>

const gsap = require('gsap');
const TweenMax = gsap.TweenMax;
const scrollTo = require('../../../libs/scrollToPluging');

export default {
  data() {
    return {
    }
  },
  props : {
    parent : {
    },
    functions :{
    },
  },
  methods: {
    backgroundUrl() {
      if (this.parent.background) {
        return require (`../../../assets/images/${this.parent.background}.jpg`)
      }
    },
    bgImage() {
      return `background-image : url(${this.backgroundUrl()})`
    },
    scrollDown() {
      this.functions.scrollDown()
    }
  },
  mounted() {
    setTimeout( () => {
      document.querySelector('#title').classList.add('appeared');
      document.querySelector('#figure').classList.add('appeared');
    }, 1000);

    document.getElementById('scrollDown').addEventListener('click', () => {
      TweenMax.to(window, 0.8, {scrollTo: window.innerHeight});
    })
  }
}
</script>

<style lang="scss" scoped>

.title {
  font-size: 50px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0em;
  margin-bottom: 60px;
  opacity: 0;
  transition: opacity 0.5s, letter-spacing 2s;

  &.appeared {
    opacity: 1;
    letter-spacing: 0.1em;
  }
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  width: 100%;
  height: 100vh;
}

figure {
  opacity: 0;
  transition: opacity 0.5s;

  &.appeared {
    opacity: 1;
  }
}

blockquote {
  position: relative;
  line-height: 120%;
  width: 450px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
}

blockquote::before, blockquote::after {
  width: 22px;
  position: absolute;
}

blockquote::before {
  content: url('../../../assets/images/quote-start.svg');
  top: -20px;
  left: -50px;
}

blockquote::after {
  content: url('../../../assets/images/quote-end.svg');
  bottom: -20px;
  right: -50px;
}

.author {
  font-weight: lighter;
  font-style: italic;
  text-align: center;
}

.description {
  width: 650px;
  margin-bottom: 20px;
  line-height: 120%;
  text-align: center;
  font-size: 20px;
}

.scroll {
  font-size: 14px;
  text-transform: uppercase;
  position: absolute;
  bottom: 100px;
  cursor: pointer;


  &::after {
    content: url('../../../assets/images/Arrow.svg');
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, 0%);
    transition: all 0.5s;
  }

  &:hover::after {
    transform: translate(-50%, 50%);
  }
}
</style>