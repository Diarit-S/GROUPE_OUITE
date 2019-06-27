<template>
  <div class="poster-container">
    <h2>Ceci est le component Poster</h2>
    <hr>
    <h3>C'est le child n°{{child.id}} de {{parentName}}</h3>
    <hr>
    <h3>Modifiez le titre et le texte ici</h3>
    <hr>
    <form @submit.prevent="updateCard(parentName, child.id, form.text, form.title)" class="form">
      <label>Title</label>
      <input v-model="form.title" type="text" placeholder="Title">
      <label>Text</label>
      <textarea v-model="form.text" name="" id="" cols="30" rows="10"></textarea>
      <button type="submit">SUBMIT</button>
      <p :class="textstyle">Le texte à été modifié avec succes</p>
    </form>
  </div>
</template>

<script>
import factService from '../../factService'; 


export default {
  data() {
    return {
      textstyle : 'd-none',
      form : {
        text : this.child.text,
        title : this.child.title
      }
    }
  },
  props : ['child', 'parentName'],
  methods : {
    async updateCard(parentName, childId, text, title) {
      try {
        await factService.insertFact(parentName, childId, text, title)
      } catch (error) {
        alert('Fail to pull data from db')        
      }
      this.textstyle = "d-block";
      setTimeout(() => {
        this.textstyle = "d-none";
      }, 4000);
    }
  }
  ,
  mounted(){
    for (const i in this.child.texts ) {
      this.form.text += this.child.texts[i];
    }
  }
}
</script>

<style lang="scss" scoped>
  .poster-container {
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
  button{
  background-color: gray;
  border: gray solid 1px ;
}
.form {
  display: flex;
  flex-direction: column;
}

.d-none {
  display: none;
}

.d-block {
  display: block;
}
</style>
