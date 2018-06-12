<template>
     <div id="matchlist">
         <h1>Spielplan!</h1>
         <button @click="shuffle">Neuer Plan</button>
         <ul>
            <li v-for="match in matches" :key="match.key">{{players.find(x => x.number === match.player1).name}} vs. {{players.find(x => x.number === match.player2).name}}</li>
        </ul>
     </div>
</template>
<script>
export default {
    name: 'matchlist',
    props:['matches', 'players'],
    methods: {
        shuffle: function(){
            Event.$emit('shuffle-matches');
        }
    }
}
</script>
<style>

</style>


