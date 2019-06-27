<template>
  <div class="audio-container">
    <h2>Ceci est le component Audio</h2>
    <h3>{{childId}}</h3>
    <button @click="updateCard(parentName, childId)">Uptade</button>
  </div>
</template>

<script>
import factService from '../../factService'; 


export default {
  data() {
    return {
    }
  },
  props : ['childId', 'parentName'],
  methods : {
    async updateCard(parentName, childId) {
      try {
        await factService.insertFact( parentName, childId )
      } catch (error) {
        
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.audio-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 90vh;
  color: black;
  margin: auto;
  border: black solid 10px ;
  border-radius: 20px;
} 

button {
  background-color: gray;
  border: gray solid 1px ;
}
</style>
