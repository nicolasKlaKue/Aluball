<template>
  <div id="app">
    <message>{{msg}}</message>
    <StartComp  v-if="start" :players="players"></StartComp>
    <GameComp :matches="matches" :players="players"></GameComp>
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
      msg: "Aluball",
      matchname: "1Match2",
      start: true
    }
  },
  created(){
    Event.$on('new-player', this.addNewPlayer);
    Event.$on('start-game', this.startGame);
    Event.$on('player-victory', this.playerVictory);
    Event.$on('player-draw', this.playerDraw);
    Event.$on('player-lost', this.playerLost);
    Event.$on('player-hit', this.playerHit);
    Event.$on('player-miss', this.playerMiss);
  },
  methods: {
    addNewPlayer: function(playername){
      console.log("PENIS!!");
      this.players.push({number:this.players.length,name:playername,victorys:0,draws:0,shots:0,hits:0,missed:0,avg:0.0 });
      this.players.sort(this.comparePlayer);
    },

    

    startGame: function(){
      console.log("STARTE DAS VERDAMMTE SPIEL DU HURENSOHN!!!");
      
      for (let i= 0; i < this.players.length; i++) {
        for (let j = i+1; j < this.players.length; j++) {
          this.matches.push({player1: i, player2: j, player1_hits:[0,0,0,0,0,0,0,0,0], player2_hits:[0,0,0,0,0,0,0,0,0]});
        }
        
      }
      this.start = false;
      this.matches = this.shuffle(this.matches);
      this.matches = this.shuffle(this.matches);
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
