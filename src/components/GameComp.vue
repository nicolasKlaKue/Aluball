<template>
    <div id="gamecomp">
        <div class="row gamecomp_top_area">
            <div class="col-sm-4">
                <MatchList :matches="matches" :players="players"></MatchList>
            </div>
            <div class="col-sm-8">
                <LigaTable  v-on:player-victory="playerVictory" v-on:player-draw="playerDraw" v-on:player-hit="playerHit" v-on:player-missed="playerMiss" :players="players" ></LigaTable>
            </div>
        </div>
        
        
        <ul id="according">
            <li class="list" v-for="(match, index) in matches" :key="match.key">
                <MatchComp :matchnumber="index" :matchname='match.player1 + "match" + match.player2' :match='match' :player1='players.find(x => x.number === match.player1)' :player2='players.find(x => x.number === match.player2)'></MatchComp>
            </li>
        </ul>
        <!--<MatchComp :matchname="matchname" :players="players" ></MatchComp>-->
    </div>    
</template>
<script>
import LigaTable from './LigaTable.vue';
import MatchList from './MatchList.vue';
import MatchComp from './MatchComp.vue';
export default {
    name: 'gamecomp',
    components: {LigaTable, MatchList, MatchComp},
    props: ['players', 'matches'],
    created(){
        Event.$on('player-won', this.playerVictory);
        Event.$on('player-draw', this.playerDraw);
        Event.$on('player-lost', this.playerLost);
        Event.$on('player-hit', this.playerHit);
        Event.$on('player-miss', this.playerMiss);
    },
    methods:{
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

        playerLost: function(playerNumber){            
            for(var i = 0; i < this.players.length; i++){
                if(this.players[i].number == playerNumber){
                this.players[i].losses++;
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
.list{
    list-style-type: none;
}
.gamecomp_top_area{
    margin-right: 0px;
    margin-left: 0px;
}
#according{
    padding-left: 0px;
}
</style>
