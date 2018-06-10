<template>
  <div id="app">
    <message>{{msg}}</message>
    <StartComp  v-if="start" :players="players"></StartComp>
    <LigaTable  v-on:player-victory="playerVictory" v-on:player-draw="playerDraw" v-on:player-hit="playerHit" v-on:player-missed="playerMiss" :players="players" ></LigaTable>
    <MatchComp :matchname="matchname" :players="players" ></MatchComp>
  </div>
</template>

<script>

import Message from './components/Message.vue';
import PlayerInput from './components/PlayerInput.vue';
import PlayerList from './components/PlayerList.vue';
import MatchComp from './components/MatchComp.vue';
import TossComp from './components/TossComp.vue';
import LigaTable from './components/LigaTable.vue';
import StartComp from './components/StartComp.vue';

export default {
  name: 'app',
  components: { Message, PlayerList, PlayerInput, MatchComp, TossComp, LigaTable, StartComp },
  data () {
    return {
      players: [],
      msg: "Aluball",
      matchname: "1Match2",
      start: true
    }
  },
  created(){
    Event.$on('new-player', this.addNewPlayer);
    Event.$on('start-game', this.startGame);
  },
  methods: {
    addNewPlayer: function(playername){
      console.log("PENIS!!");
      this.players.push({number:this.players.length,name:playername,victorys:0,draws:0,shots:0,hits:0,missed:0,avg:0.0 });
      this.players.sort(this.comparePlayer);
    },

    playerVictory: function(playerNumber){
      for(var i = 0; i < this.players.length; i++){
        if(this.players[i].number == playerNumber){
          this.players[i].victorys++;
        }
      }
      this.players.sort(this.comparePlayer);
      //this.players.push({number:this.players.length+1,name:playerNumber,victorys:0,avg:0 })
    },

    playerDraw: function(playerNumber){
      for(var i = 0; i < this.players.length; i++){
        if(this.players[i].number == playerNumber){
          this.players[i].draws++;
        }
      }
      this.players.sort(this.comparePlayer);
    },

    playerHit: function(playerNumber){
      for(var i = 0; i < this.players.length; i++){
        if(this.players[i].number == playerNumber){
          this.players[i].hits++;
          this.players[i].shots++;
          this.players[i].avg = (this.players[i].hits/this.players[i].shots);
        }
      }
      this.players.sort(this.comparePlayer);
    },

    playerMiss: function(playerNumber){
      for(var i = 0; i < this.players.length; i++){
        if(this.players[i].number == playerNumber){
          this.players[i].shots++;
          this.players[i].missed++;
          this.players[i].avg = (this.players[i].hits/this.players[i].shots);
        }
      }
      this.players.sort(this.comparePlayer);
    },

    startGame: function(){
      console.log("STARTE DAS VERDAMMTE SPIEL DU HURENSOHN!!!");
      
      this.start = false;
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
    },

    comparePlayer: function(a,b){
        if(a.victorys > b.victorys){
          return -1
        }
        if(a.victorys < b.victorys){
          return 1
        }
        if(a.draws > b.draws){
          return -1;
        }
        if(a.draws < b.draws){
          return 1;
        }
        if(a.avg > b.avg){
          return -1;
        }
        if(a.avg < b.avg){
          return 1;
        }
        return 0;
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
