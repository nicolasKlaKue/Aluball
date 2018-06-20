<template>
     <div id="matchlist">
         <h1>Spielplan!</h1>
         <!--<button @click="shuffle">Neuer Plan</button>-->
         <ul>
            <li class="list" v-for="match in matches" :key="match.key" >
                <MatchListItem :finished="match.finished" :match="match" :player1="players.find(x => x.number === match.player1)" :player2="players.find(x => x.number === match.player2)"></MatchListItem>
                <!--<span v-if="match.finished">{{match.player1_hits.reduce((a, b) => a + b, 0)}}</span> {{players.find(x => x.number === match.player1).name}} vs. {{players.find(x => x.number === match.player2).name}} <span v-if="match.finished">{{match.player2_hits.reduce((a, b) => a + b, 0)}}</span>-->
            </li>
        </ul>
     </div>
</template>
<script>
import MatchListItem from './MatchListItem.vue'
export default {
    name: 'matchlist',
    components: {MatchListItem},
    props:['matches', 'players'],
    methods: {
        shuffle: function(){
            Event.$emit('shuffle-matches');
        }
    }
}
</script>
<style>
.topgame{
    background-color: black;
    color: gold;
}
</style>


