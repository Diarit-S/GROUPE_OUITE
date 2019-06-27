<template>
  <div :class="css">
    
    <div class="poster">
      <video poster="../assets/images/background-intro.png" autoplay>
        <source src="../assets/videos/intro.mp4" type="video/mp4" />
      </video>

      <div class="button--small above" @click="changeRoute()">Skip</div>
    </div>
  </div>
</template>

<script>

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
        this.$router.push({ path: "/chapters" });
      }, 1000)  
    }
  },
  mounted() {
    //automatically go to next path after the video
    let vid = document.querySelector('video');

    vid.addEventListener('loadedmetadata', () => {

        setTimeout(() => {
          if (this.$route.name === "introduction") {
            this.css = "background fadeOut" 
            setTimeout(() => {
              this.$router.push({ path: "/chapters" });
            }, 1000)  
          }
        }, parseInt(vid.duration) + '000');

    })   

    
  }
}
</script>

<style lang="scss" scoped>

.background {
  background: black;
  width: 100%;
  height: 100vh;
  color: white;
}

.title {
  width: 80%;
  font-size: 30px;
  margin-bottom: 5%;

  @media (min-width: 800px) {
    width: 60%;
    font-size: 50px;
  }
}

.names {
  display: flex;

  li {
    max-width: 150px;
    word-spacing: 100px;
    text-transform: uppercase;
    font-size: 20px;
  }
}

.poster {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

video {
  width: 100%;
  height: 100vh;
}

.text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  text-align: center;
  width: 100%;
  height: 60vh;

  @media (min-width: 800px) {
    height: 80vh;
  }
}

.disclaimer {
  position: absolute;
  height: 40vh;
  width: 60%;
  bottom: 0;
  font-style: italic;
  text-align: center;
  
  @media (min-width: 800px) {
    height: 20vh;
  }
}

.above {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  left: 25px;
}

</style>