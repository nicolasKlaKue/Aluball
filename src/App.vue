<template>
  <div id="app">
    <message>{{msg}}</message>
    <playerinput v-on:new-player="addNewPlayer"></playerinput>
    <playerlist v-on:player-victory="playerVictory" v-on:player-draw="playerDraw" v-on:player-hit="playerHit" v-on:player-missed="playerMiss" :players="players" ></playerlist>
  </div>
</template>

<script>
import Message from './components/Message.vue';
import Playerinput from './components/Playerinput.vue';
import Playerlist from './components/Playerlist.vue';

export default {
  name: 'app',
  components: { Message, Playerlist, Playerinput },
  data () {
    return {
      players: [],
      msg: "Aluball"
    }
  },
  methods: {
    addNewPlayer: function(playerName){
      this.players.push({number:this.players.length+1,name:playerName,victorys:0,draws:0,shots:0,hits:0,missed:0,avg:0.0 });
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
