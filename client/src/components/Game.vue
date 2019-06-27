<template>
  <div :class="css">
    <div v-if="isEarthRoute()" class="scene3D" id="scene3D" ref="scene3D"></div>

     <div class="menu button--small" @click="changeRouteToChapters()">Back to menu</div>
    <div class="title">
      <h1>How we build the world together</h1>
      <h2>Computing - Test your knowledge</h2>
    </div>

    <div class="quizz" v-if="findType() === 'list' && showScore === false">
      <!-- MERCI DE GARDER LES LIGNES COMMENTÉES  -->
      <!-- <transition-group name="answers" @before-enter="beforeEnter"> -->

        <p :key="animKey">{{ question.question }}</p>
        <ul :key="animKey+1">
          <li v-for="answer in findAnswers()" :key="answer" :class="choicecss" @click="choice(answer)"> {{ answer }}</li>
        </ul>
      <!-- </transition-group> -->
    </div>

    <div class="quizz" v-if="findType() === 'map' && showScore === false">
      <p>{{ question.question }}</p>
      <svg width="28" height="30" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.3346 10.3748H25.2888C24.6549 10.3771 24.0457 10.6209 23.5852 11.0562C23.2258 10.0061 22.2724 9.25384 21.1524 9.25384C20.4587 9.26289 19.7994 9.55722 19.3301 10.068C18.9061 9.17316 18.0304 8.57319 17.021 8.57319H16.9723C16.3914 8.57319 15.8259 8.74612 15.4398 9.08996V2.72762C15.4398 1.22356 14.2735 0 12.8502 0C11.4283 0 10.2666 1.22255 10.2656 2.72561L10.2545 15.3085L9.49117 14.3806C8.87688 13.6157 7.97228 13.1407 6.99403 13.0688C6.0354 13.0032 5.09234 13.337 4.38832 13.991L3.77327 14.5012C3.58652 14.656 3.53324 14.9202 3.64509 15.1351L9.62639 26.6186C10.7145 28.7091 12.7843 30 15.0281 30H21.7368C25.1388 30 27.9094 27.0595 27.9129 23.4353C27.9144 21.8162 27.9162 20.6117 27.9172 19.6307C27.9207 16.9893 27.9219 16.0018 27.9151 13.0942C27.9116 11.5941 26.7542 10.3748 25.3346 10.3748ZM26.8876 19.6332C26.8866 20.6142 26.8849 21.8152 26.8834 23.4343C26.8804 26.4912 24.5717 28.9705 21.7368 28.9705H15.0281C13.1694 28.9705 11.4494 27.892 10.5393 26.1436L4.74976 15.0248L5.05489 14.7739C5.06143 14.7684 5.06821 14.7636 5.0745 14.7576C5.57141 14.2901 6.2405 14.05 6.9214 14.0955C7.61687 14.1488 8.25932 14.4889 8.6944 15.0343L10.3681 17.072C10.5061 17.2399 10.7346 17.303 10.9392 17.2298C11.1438 17.1567 11.2805 16.9629 11.2808 16.7455L11.2906 2.72661C11.2911 1.7911 11.9956 1.02977 12.8507 1.02977C13.7055 1.02977 14.4103 1.79135 14.4103 2.72762V11.1814C14.4103 11.2106 14.409 11.2397 14.409 11.2691C14.409 11.282 14.4103 11.294 14.4103 11.3063V14.9215C14.4103 15.2057 14.6408 15.4362 14.925 15.4362C15.2093 15.4362 15.4398 15.2057 15.4398 14.9215V11.1988C15.4398 10.2954 16.1388 9.60271 16.9723 9.60271H17.021C17.8761 9.60271 18.5927 10.3334 18.5927 11.2699V14.5766C18.5927 14.8609 18.8232 15.0914 19.1075 15.0914C19.3917 15.0914 19.6222 14.8609 19.6222 14.5766V11.982C19.6222 11.0457 20.3089 10.2839 21.169 10.2839C22.0243 10.2839 22.7108 11.0457 22.7108 11.982V14.4298C22.7108 14.7141 22.9412 14.9446 23.2255 14.9446C23.5098 14.9446 23.7403 14.7141 23.7403 14.4298V13.1045C23.7403 12.168 24.4335 11.4044 25.2888 11.4044H25.3346C26.1876 11.4044 26.8836 12.1649 26.8856 13.0984C26.8924 16.0043 26.8912 16.9931 26.8876 19.6332Z" fill="white"/>
        <path d="M17.2414 5.09852H23.9129L22.7168 6.29467C22.5836 6.42412 22.5303 6.61514 22.5775 6.7946C22.6248 6.97432 22.765 7.11457 22.9448 7.16182C23.1242 7.20882 23.3152 7.15554 23.4447 7.02232L25.512 4.95525C25.7131 4.75417 25.7131 4.42817 25.512 4.22735L23.4447 2.16027C23.2434 1.9612 22.9191 1.96221 22.719 2.16228C22.5187 2.3626 22.5177 2.68684 22.7168 2.88817L23.8976 4.069H17.2414C16.9572 4.069 16.7267 4.29948 16.7267 4.58376C16.7267 4.86803 16.9572 5.09852 17.2414 5.09852Z" fill="white"/>
        <path d="M1.74969 5.09852H8.36187C8.64615 5.09852 8.87663 4.86803 8.87663 4.58376C8.87663 4.29948 8.64615 4.069 8.36187 4.069H1.76502L2.94585 2.88817C3.14492 2.68684 3.14391 2.3626 2.94359 2.16228C2.74351 1.96221 2.41928 1.9612 2.21795 2.16027L0.15062 4.22735C-0.0502065 4.42842 -0.0502065 4.75442 0.15062 4.95525L2.21795 7.02232C2.34764 7.15378 2.53791 7.20556 2.71637 7.15805C2.89483 7.1108 3.03407 6.9713 3.08158 6.79284C3.12908 6.61439 3.0773 6.42437 2.94585 6.29442L1.74969 5.09852Z" fill="white"/>
      </svg>
      <p>Drag to move around</p>
    </div>

    <div class="quizz" v-if="showScore">
      <h3>Your score</h3>
      <span class="score">{{ score }} / 10</span>
      <p class="endMessage"> {{ endMessage() }}</p>
      <div class="button" @click="changeRouteToEarth()">Back to earth</div>
    </div>


    <transition>
      <div class="answer" v-if="showAnswer" >
        <span v-if="correct == true">Correct</span>
        <span v-if="correct == false">Incorrect</span>
        <p>{{ question.description }}</p>
        <p @click="toDocument(question)" class="moreBtn clickable">Learn more ></p>
        <button v-if="level < questions.length" @click="nextQuestion()" class="button">Next question</button>
        <button v-if="level >= questions.length" @click="displayScore()" class="button">See your score</button>
      </div>
    </transition>
    <div  class="game" @click="changeRouteToEarth()">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="15" cy="15" r="14.25" stroke="white" stroke-width="1.5"/>
        <rect x="19.5078" y="8.90118" width="1.875" height="15" rx="0.9375" transform="rotate(45 19.5078 8.90118)" fill="white"/>
        <rect x="21.0988" y="19.5078" width="1.875" height="15" rx="0.9375" transform="rotate(135 21.0988 19.5078)" fill="white"/>
      </svg>
      <p>Quit the game</p>
    </div>
    <div class="questions-count">
      <span>Question</span>    
      <span>{{ level }} / {{ questions.length }}</span> 
    </div>
  </div>
</template>

<script>

import quizz from '../assets/quizz.json'
import images from "../assets/images/quizz.js"

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

let level = 1

export default {
  data() {
    return {
      level: level,
      score: 0,
      question: this.findQuestion(level),
      questions: quizz.questions,
      showAnswer: false,
      image: this.findImage(level),
      correct: undefined,
      choicecss: "button",
      showScore : false,
      animKey : 1,
      css: "background fadeIn"
    }
  },
  methods: {
    changeRouteToChapters() {
      this.css = "background fadeOut" 
      setTimeout(() => {
        this.$router.push({ path: "/chapters" });
      }, 1000)  
    },
    changeRouteToEarth() {
      this.css = "background fadeOut" 
      setTimeout(() => {
        this.$router.push({ path: "/earth" });
      }, 1000)  
    },
    findQuestion(level) {
      return quizz.questions.find(
        question => question.id === parseInt(level)
      )
    },
    findAnswers() {
      return this.question.answers
    },

    findType() {
      return this.question.type
    },

    findImage(level) {
      return images[`question${level}`]
    },
    choice(answer) {
      if(this.correct != false && this.correct != true) {
        if(answer === this.question.answer) {
          this.correct = true
          this.score ++
        } else {
          this.correct = false
        }
        this.showAnswer = true
      }
    },
    toDocument(question) {
      this.css = "background fadeOut" 
      setTimeout(() => {
        this.$router.push({ path: `/document/${question.doc}` });
      }, 1000)  
    },
    nextQuestion() {
      level++
      this.showAnswer = false
      this.level = level
      this.question = this.findQuestion(level)
      this.image = this.findImage(level)
      this.correct = undefined
      this.animKey++

    },
    displayScore() {
      this.showScore = true
      this.showAnswer = false
    },
    endMessage() {

      if(this.score > 7) {
        return 'Congratulation for this excellent score ! If you want to learn more and discover suprising facts about computing history, make sure to read our documents.'
      } else if (this.score > 4) {
        return 'Congratulation for this pretty good score. You already have some knowledge about computing history, but you still have some infos to learn and suprising facts to discover, so make sure to read our documents.'
      } else if (this.score > 2) {
        return 'Congratulation for this decent score. If you want to gain more knowledge about computing history and discover surprising facts, make sure to read our documents.'
      } else {
        return 'You are still getting familiar with computing history. If you want to gain more knowledge about computing history and discover surprising facts, make sure to read our documents.'
      }
    },
    isEarthRoute(){
      if (this.$route.name == "earth" || this.$route.name == "game") {
        console.log('is earth');
        return true;
      }
    },
    beforeEnter(el) {
      // el.style.display = 'none';
      // el.style.display = 'initial';
      // setTimeout(() => {
      //   el.style.display = 'block';
      // }, 4000);
    }
  },
  mounted() {
    if (this.isEarthRoute()) {
      level = 1
      this.level = level
      this.question = this.findQuestion(level)
      this.showAnswer = false
      this.image = this.findImage(level)

      
      //CONST imports
      const container = this.$refs.scene3D;
      const backgroundImg = require( "../assets/images/earth/background.jpg" );
      const earthImg = require( "../assets/images/earth/earthsubstract.jpg" );
      const lightsImg = require( "../assets/images/earth/lights.jpg" );

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
          //action click point 1
      });
      var binaryChinaPoint = placePoint( 'binaryChinaPoint', 35.861660, 104.195397 , () =>{
          //action click point 2
      });
      var computersEnglandPoint = placePoint( 'computersEnglandPoint', 51.5073509, -0.1277583 , ()=>{
          //action click point 3
      });
      var programmingItalyPoint = placePoint( 'programmingItalyPoint', 41.86009225771948, 12.508575535957334 , ()=>{
          //action click point 4
      });
      var internetAmericaPoint = placePoint( 'internetAmericaPoint', 37.090240, -95.712891 , ()=>{
          //action click point 5
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
              //TweenMax.to(camera.position,2,{x: -2, z: 6 , ease: Power4.easeInOut});
          } else {
              mousehold = true;
              startMouseX = event.clientX;
              earthRotY = earth.rotation.y; 
          }

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
              if( pickedObject ){
                
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
    }
  }
}
</script>

<style lang="scss" scoped>

.scene3D {
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  overflow: hidden;
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
  z-index: 10;
  top: 20px;
  left: 25px;
}

.title {
  position: absolute;
  z-index: 10;
  top: 30px;
  text-align: center;
}

h1 {
  font-size: 16px;
  font-style: italic;
  font-weight: lighter;
  text-transform: uppercase;
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

  p {
    text-transform: uppercase;
    margin-left: 10px;
  }
}

.questions-count {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  bottom: 25px;
  text-align: center;

  span:nth-child(1) {
    margin-bottom: 5px;
  }
}

.quizz {
  position: absolute;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  left: 3vw;
  width: 350px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  transition : all 0.5 s ease-in-out;

  p {
    font-size: 20px;
    margin-bottom: 40px;
    line-height: 25px;
  }

  li:not(:last-child) {
    margin-bottom: 20px;
  }

  .selected {
    background: white;
  }

  h3, .score {
    font-size: 20px;
    line-height: 25px;
  }

  .score {
    margin-bottom: 20px;
  }

  .endMessage {
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 20px;
  }
}

.answer {
  position: absolute;
  z-index: 10;
  right: 3vw;
  width: 350px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);


  span {
    display: inline-block;
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
  }
}

button.button {
  background: transparent;
  font-size: 17px;
}

.clickable {
  cursor: pointer;
}

.moreBtn {
  text-decoration: none;
  transition: all 0.8s;

  &:hover {
    text-decoration: underline;
  }
}

.v-enter {
  opacity: 0;
  transform : translateY(20px);
}


.v-enter-active {
  transition: all 0.5s ease-in-out;
}


.v-leave-to {
  opacity: 0;
  transform : translateX(20px);
}

.v-leave-active {
  transition : all 0.5s ease-in-out;
}

// .answers-leave-to {
//   opacity : 0;
//   transform: translateX(-20px);
// }
// .answers-leave-active {
//   transition : all 0.5s ease-in-out;
// }

// .answers-enter {
//   position: absolute;
//   transition-delay: 0.5s;
//   opacity : 0;
//   transform: translateX(-20px);
// }

// .answers-enter-active {
//   transition: all 0.5s ease-in-out 0.4s;
// }

</style>

