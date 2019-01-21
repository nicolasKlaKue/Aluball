<template>
  <div id="app">
    <message>{{msg}}</message>
    <StartComp  v-if="start" :players="players"></StartComp>
    <GameComp v-if="league" :matches="matches" :players="players"></GameComp>
    <!--<LigaTable  v-on:player-victory="playerVictory" v-on:player-draw="playerDraw" v-on:player-hit="playerHit" v-on:player-missed="playerMiss" :players="players" ></LigaTable>
    <MatchComp :matchname="matchname" :players="players" ></MatchComp>-->
  </div>
</template>

<script>

import Message from './components/Message.vue';
import PlayerInput from './components/PlayerInput.vue';
import PlayerList from './components/PlayerList.vue';
import MatchComp from './components/MatchComp.vue';
import GameComp from './components/GameComp.vue';
import TossComp from './components/TossComp.vue';
import LigaTable from './components/LigaTable.vue';
import StartComp from './components/StartComp.vue';

export default {
  name: 'app',
  components: { Message, PlayerList, PlayerInput, MatchComp, TossComp, LigaTable, StartComp, GameComp },
  data () {
    return {
      players: [],
      matches: [],
      msg: "Aluball - Prototyp",
      start: true,
      league: false,
      tournament: false
    }
  },
  created(){
    Event.$on('new-player', this.addNewPlayer);
    Event.$on('start-game', this.startGame);
    Event.$on('start-game2', this.startGame2);
    Event.$on('start-tournament', this.startTournament);
    Event.$on('shuffle-matches', this.shuffleMatches);
    Event.$on('finish-game', this.finishGame);
  },
  methods: {
    addNewPlayer: function(playername){
      this.players.push({number:this.players.length,name:playername,victorys:0,draws:0,losses:0,shots:0,hits:0,missed:0,avg:0.0 });
      this.players.sort(this.comparePlayer);
    },

    finishGame: function(gamenumber){
      for (let index = 0; index < this.matches.length; index++) {
        if (this.matches[index].number == gamenumber) {
          console.log("Index: " + index + " < " + this.matches.length);
          this.matches[index].finished = true;
        }else{
          console.log("Something went wrong!" + index);
        }
      }
    },
    

    startGame: function(){
      var counter = 0;
      for (let i= 0; i < this.players.length; i++) {
        for (let j = i+1; j < this.players.length; j++) {
          this.matches.push({number: counter, player1: i, player2: j, player1_hits:[0,0,0,0,0,0,0,0,0], player2_hits:[0,0,0,0,0,0,0,0,0], finished: false});
          counter++;
        }
        
      }
      this.start = false;
      this.league = true;
      this.matches = this.shuffle(this.matches);
      this.matches = this.shuffle(this.matches);
      this.matches = this.shuffle(this.matches);
      this.matches = this.shuffle(this.matches);
    },

    startGame2: function(){
      var counter = 0;
      for (let i= 0; i < this.players.length; i++) {
        for (let j = i+1; j < this.players.length; j++) {
          this.matches.push({number: counter, player1: i, player2: j, player1_hits:[0,0,0,0,0,0,0,0,0], player2_hits:[0,0,0,0,0,0,0,0,0], finished: false});
          counter++;
        }
        
      }
      for (let i= 0; i < this.players.length; i++) {
        for (let j = i+1; j < this.players.length; j++) {
          this.matches.push({number: counter, player1: i, player2: j, player1_hits:[0,0,0,0,0,0,0,0,0], player2_hits:[0,0,0,0,0,0,0,0,0], finished: false});
          counter++;
        }
        
      }
      this.start = false;
      this.league = true;
      this.matches = this.shuffle(this.matches);
      this.matches = this.shuffle(this.matches);
      this.matches = this.shuffle(this.matches);
      this.matches = this.shuffle(this.matches);
    },

    startTournament: function(){
      var counter = 0;
      for(let i = 0; i < this.players.length; i+=2){
          this.matches.push({number: counter, player1: i, player2: i+1, player1_hits:[0,0,0,0,0,0,0,0,0], player2_hits:[0,0,0,0,0,0,0,0,0], finished: false});
          counter++;
      }
      this.start = false;
      this.league = true;
    },

    shuffleMatches: function(){      
      this.matches = this.shuffle(this.matches);
    },

    shuffle: function(array){
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 768px) {
  body{
    display: inline;
  }
}

.center-img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
  border-radius: 10px;
  -webkit-box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 3px 3px 1px rgba(0,0,0,0.75);
}
</style>
