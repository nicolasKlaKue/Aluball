<!--    
    OpenTasks: 
    1. Undo-Button
    2. Match-Plan-Creator
    3. Matches als solche
-->
<template>
    <div id="playerlist">
        <h1>Spieler:</h1>
        <ul>
           <li v-for="player in players" :key="player.key">{{player.number}}. {{player.name}}</li> 
        </ul>
        <button @click="start">Spiel starten!</button>
    </div>
</template>
<script>
export default {
    name: 'playerlist',
    props: ['players'],
    data () {
        return {    
        }
    },
    methods: {
        start: function(){
            Event.$emit('start-game');
        }
    }    
}
</script>
<style>

</style>
