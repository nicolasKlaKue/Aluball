<template>
    <div v-if="game_active" :id="matchname" class="panel-group match-div">
        <div class="panel panel-default">
            <div class="panel-heading">
                <a data-parent="#according" data-toggle="collapse" :href="'#collapse' + matchnumber">
                    <h1 class="panel-title text-center">
                        Match {{matchnumber + 1}} : {{player1.name}} vs. {{player2.name}}
                    </h1>
                </a>
            </div>
            <div v-bind:id="'collapse' + matchnumber" class="panel-collape collapse table-responsive">
                <div class="row no-margin">
                    <canvas v-bind:id="'Chart' + matchnumber"  ></canvas>
                </div>
                <div class="row no-margin">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>
                                    Player:
                                </th>
                                <th>
                                    Runde 1
                                </th>
                                <th>
                                    Runde 2
                                </th>
                                <th>
                                    Runde 3
                                </th>
                                <th>
                                    Punkte
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {{player1.name}}
                                </td>
                                <td>
                                    <table class="flex">
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=1 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=2 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=3 ></TossComp>
                                        </tr>
                                    </table>
                                    
                                </td>
                                <td>
                                    <table class="flex">
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=4 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=5 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=6 ></TossComp>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table class="flex">
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=7 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=8 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player1.number" :tossnumber=9 ></TossComp>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <p class="big_match_score">{{score_player1}}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    {{player2.name}}
                                </td>
                                <td>
                                    <table class="flex">
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=1 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=2 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=3 ></TossComp>
                                        </tr>
                                    </table>
                                    
                                </td>
                                <td>
                                    <table class="flex">
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=4 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=5 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=6 ></TossComp>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <table class="flex">
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=7 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=8 ></TossComp>
                                        </tr>
                                        <tr class="inline_grid">
                                            <TossComp v-on:thrown="playerthrown" v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="player2.number" :tossnumber=9 ></TossComp>
                                        </tr>
                                    </table>
                                </td>
                                <td>
                                    <p class="big_match_score">{{score_player2}}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="matchcomp_finishbutton_div">
                    <button v-if="game_complete" v-on:click="addNewGame" type="button" class="btn btn-info">Spiel abschließen</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TossComp from './TossComp.vue';

export default {
    name: 'match',
    components: {TossComp},
    props: ['matchnumber', 'player1', 'player2','matchname','match'],
    data () {
        return {  
            score_player1: 0,
            score_player2: 0,
            thrown_player1: [false, false, false, false, false, false, false, false, false],
            thrown_player2: [false, false, false, false, false, false, false, false, false],
            thrown_player1_scores: [0,0,0,0,0,0,0,0,0],
            thrown_player2_scores: [0,0,0,0,0,0,0,0,0],
            game_complete: false,
            game_active: true
        }
    },
    methods:{
        addNewGame: function (params) {
            if(this.score_player1 > this.score_player2){
                Event.$emit("player-won", this.player1.number);
                Event.$emit("player-lost", this.player2.number);
            }else if(this.score_player2 > this.score_player1){
                Event.$emit("player-won", this.player2.number);
                Event.$emit("player-lost", this.player1.number);
            }else if(this.score_player1 == this.score_player2){
                Event.$emit("player-draw", this.player1.number);
                Event.$emit("player-draw", this.player2.number);
            }
            for (let index = 0; index < this.match.player1_hits.length; index++) {
                if(this.match.player1_hits[index] == 1){
                    Event.$emit("player-hit", this.player1.number);
                }else{
                    Event.$emit("player-miss", this.player1.number);
                }
            }
            for (let index = 0; index < this.match.player2_hits.length; index++) {
                if(this.match.player2_hits[index] == 1){
                    Event.$emit("player-hit", this.player2.number);
                }else{
                    Event.$emit("player-miss", this.player2.number);
                }
            }
            Event.$emit("finish-game", this.match.number);
            this.game_active = false;
        },

        playerthrown: function(args) {            
            if(args[0] == this.player1.number){
                // -1 because thrownumber is one higher than array-index
                this.thrown_player1[args[1]-1] = true;
                this.thrown_player1_scores = this.countScoreFromArray(this.match.player1_hits);
                this.game_complete = this.checkBoolArray(this.thrown_player1) && this.checkBoolArray(this.thrown_player2);
            }
            if(args[0] == this.player2.number){
                // -1 because thrownumber is one higher than array-index
                this.thrown_player2[args[1]-1] = true;
                this.thrown_player2_scores = this.countScoreFromArray(this.match.player2_hits);
                this.game_complete = this.checkBoolArray(this.thrown_player1) && this.checkBoolArray(this.thrown_player2);
            }
        },

        playerhit: function(args){            
            if (args[0] == this.player1.number) {
                this.match.player1_hits[args[1]-1] = 1;
                this.score_player1 = 0;
                for (let index = 0; index < this.match.player1_hits.length; index++) {
                    this.score_player1 += this.match.player1_hits[index];
                }
            }
            if(args[0] == this.player2.number){
                this.match.player2_hits[args[1]-1] = 1;

                this.score_player2 = 0;
                for (let index = 0; index < this.match.player2_hits.length; index++) {
                    this.score_player2 += this.match.player2_hits[index];
                }
            }
        },
        playermiss: function(args){
            console.log("Player: " + args[0] + " getroffen Wurf: " + args[1]);
            
            if(args[0] == this.player1.number){
                this.match.player1_hits[args[1]-1] = 0;

                this.score_player1 = 0;
                for (let index = 0; index < this.match.player1_hits.length; index++) {
                    this.score_player1 += this.match.player1_hits[index];
                }
            }
            if(args[0] == this.player2.number){
                this.match.player2_hits[args[1]-1] = 0;

                this.score_player2 = 0;
                for (let index = 0; index < this.match.player2_hits.length; index++) {
                    this.score_player2 += this.match.player2_hits[index];
                }
            }
        },
        checkBoolArray: function(array){
            for (let index = 0; index < array.length; index++) {
                if(array[index] == false){
                    return false;
                }
            }
            return true;
        },
        countScoreFromArray: function(array){
            let array2 = [0,0,0,0,0,0,0,0,0];
            for(let index = 0; index < array.length; index++){
                if(array[index] == 1){
                    if(index == 0){
                        array2[index] = 1;
                    }else{
                        array2[index] = array2[index - 1] + 1;
                    }
                }else{
                    if(index == 0){
                        array2[index] = 0;
                    }else{
                        array2[index] = array2[index - 1];
                    }
                }
            }
            return array2;
        }
    },
    beforeUpdate() {
        var ctx = document.getElementById("Chart" + this.matchnumber);
        var myChart = new Chart(ctx, {
            type: 'line',
            
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                
                datasets: [{
                    label: 'Player1',
                    data: this.thrown_player1_scores,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1,
                    lineTension: 0
                },{
                    label: 'Player2',
                    data: this.thrown_player2_scores,
                    backgroundColor: [
                        'rgba(132, 99, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(132, 99, 255, 1)',
                    ],
                    borderWidth: 1,
                    lineTension: 0
                }]
            },
            options: {
                animation:{
                    duration: 0,
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            stepSize: 1,
                            min: 0,
                            max: 9
                        },
                    }]
                }
            }
        });
    },
    mounted(){
         var ctx = document.getElementById("Chart" + this.matchnumber);
        var myChart = new Chart(ctx, {
            type: 'line',
            
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                
                datasets: [{
                    label: 'Player1',
                    data: this.thrown_player1_scores,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                    ],
                    borderWidth: 1,
                    lineTension: 0
                },{
                    label: 'Player2',
                    data: this.thrown_player2_scores,
                    backgroundColor: [
                        'rgba(132, 99, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgba(132, 99, 255, 1)',
                    ],
                    borderWidth: 1,
                    lineTension: 0
                }]
            },
            options: {
                
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            stepSize: 1,
                            min: 0,
                            max: 9
                        }
                    }]
                }
            }
        });
    }
}
</script>
<style >
.flex{
    display: flex;
}
.inline_grid{
    display: inline-grid;
}
.hit{
    -webkit-appearance: none;
    border-radius: 50%;
    background-color: green;
}
.miss{
    border-radius: 50%;
    background-color: red;
}
.matchcomp_finishbutton_div{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}
.match-div{
    border-radius: 5px;
    box-shadow: 0px 0px 5px black;
    margin-bottom: 10px;
    padding: 0px;
}
.big_match_score{
    font-size: 50px;
}
.no-margin{
    margin-left: 0px;
    margin-right: 0px;
}
</style>

