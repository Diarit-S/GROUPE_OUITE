<template>
  <div class="text-container">
    <h2>component Texte</h2>
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
        text : '' ,
        title : this.child.title
      }
    }
  },
  props : ['parentName', 'child'],
  methods : {
    async updateCard(parentName, childId, text, title) {
      try {
        await factService.insertFact( parentName, childId, text, title )
      } catch (error) {
        
      }
      this.textstyle = "d-block";
      setTimeout(() => {
        this.textstyle = "d-none";
      }, 4000);
    }
  },

  mounted() {

    for (const i in this.child.texts ) {
      this.form.text += this.child.texts[i];
    }
  },
  updated(){

  }
}



</script>

<style lang="scss" scoped>
  .text-container {
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
