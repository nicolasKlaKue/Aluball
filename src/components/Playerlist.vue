<!--    
    OpenTasks: 
    1. Undo-Button
    2. Match-Plan-Creator
    3. Matches als solche
-->
<template>
    <div  v-if="start" id="playerlist">
        <h1>Spieler:</h1>
        <ul >
           <li v-for="player in players" :key="player.key">{{player.name}}</li> 
        </ul>
        <p v-if="warning">Es wird mehr als 1 Spieler zum spielen benötigt!</p>
        <button class="btn btn-success" v-if="ready" @click="startGame">Spiel starten!</button>
    </div>
</template>
<script>
export default {
    name: 'playerlist',
    props: ['players'],
    data () {
        return {  
            start: false,
            warning: false,
            ready: false
        }
    },
    methods: {
        startGame: function(){
            Event.$emit('start-game');
        }
    },
    watch:{
        players: function(val){
            if(this.players.length > 0){
                this.start = true;
            }
            if(this.players.length == 1){
                this.warning = true;
            }else{
                this.warning = false;
            }
            if(this.players.length >= 2){
                this.ready = true;
            }
            return this.players = val;
        }
    }   
}
</script>
<style>
</style>
