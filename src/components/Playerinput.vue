<template>
    <div class="input-group text-center" id="playerinput">
        <h1>Spielername:</h1>
        <input @keyup.enter="addNewPlayer" class="form-control" v-model="playername" type="text"> 
        <div class="input-group-append">
            <button class="btn btn-primary"  v-on:click="addNewPlayer">Spieler hinzufügen</button>
        </div>
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
      Event.$emit('new-player',this.playername);
      this.playername = ''; 
    }
  }
}
</script>
<style>

</style>


