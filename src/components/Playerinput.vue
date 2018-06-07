<template>
    <div id="playerinput">
        <h1>Spielername: {{playername}}</h1>
        <input v-model="playername" type="text"> 
        <button v-on:click="addNewPlayer">Spieler hinzufügen</button>
    </div>
</template>
<script>
export default {
    name: 'playerinput',
    data () {
        return {
            playername: ''
        }
    },
  methods: {
    addNewPlayer: function(){
      this.$emit('pass-player',this.playername);
      this.playername = '';
    }
  }
}
</script>
<style>

</style>


