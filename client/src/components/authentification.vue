<template>
<div class="ok" v-on:click="checkForm"></div>
</template>

<style lang="scss" scoped>
.ok{
  height: 100px;
  width: 100px;
  background-color: black;
}
form{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
}
</style>

<script>
import factService from '../factService' 


export default {
  name: 'authentification',
  data() {
    return {

    }
  },

  async created() {
    try {
      this.facts = await factService.getFacts();
    } catch (err) {
      this.error = err.message;
    }  
  },

    methods: {
    checkForm(e) {
      fetch( 'http://localhost:5000/api/authentification' ,{
      method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
      body : JSON.stringify({ 
        mail :"contact@mail.com" 
       ,password :"Kone"
        })
    }).then( (data)=> {
      //  console.log(data)
      });
      e.preventDefault();
    },
    
  }
}
</script>