<template>
    <tr v-bind:class="{epicGame: isEpic, greatGame: isGreat, goodGame: isGood}" id="matchlistitem">
        <td><span class="badge badge-pill" v-bind:class="{'badge-dark': defaultScorePlayer1,'badge-warning': greatScorePlayer1, 'badge-danger': epicScorePlayer1}" >{{player1Score}}</span></td>
        <td>{{player1.name}}</td>
        <td>{{player2.name}}</td>
        <td><span class="badge badge-pill" v-bind:class="{'badge-dark': defaultScorePlayer2,'badge-warning': greatScorePlayer2, 'badge-danger': epicScorePlayer2}" >{{player2Score}}</span></td>
    </tr>
        <!--<div class="rounded matchlistitem-flex">
            <p><span v-if="finished" class="badge badge-light">{{player1Score}}</span></p>
            <p>{{player1.name}}</p>
            <p>vs.</p>
            <p>{{player2.name}}</p>
            <p><span v-if="finished" class="badge badge-light">{{player2Score}}</span></p>
        </div>  -->  
</template>
<script>
export default {
    name: 'matchlistitem',
    props: ['match', 'player1', 'player2', 'finished'],
    data(){ return{
            /**/player1Score: 0,
            player2Score: 0,
            gameScore: 0,
            isEpic: false,
            isGreat: false,
            isGood: false,
            defaultScorePlayer1: false,
            greatScorePlayer1: false,
            epicScorePlayer1: false,
            defaultScorePlayer2: false,
            greatScorePlayer2: false,
            epicScorePlayer2: false
        }
    },
    watch:{
        match: function(newMatch, oldMatch){            
            this.player1Score = newMatch.player1_hits.reduce((a, b) => a + b, 0);
            this.player2Score = newMatch.player2_hits.reduce((a, b) => a + b, 0);
        },
        finished: function(oldV, newV){
            this.player1Score = this.match.player1_hits.reduce((a, b) => a + b, 0);
            this.player2Score = this.match.player2_hits.reduce((a, b) => a + b, 0);
            this.gameScore = this.player1Score + this.player2Score;
            if(this.player1Score < 7 && this.player1Score > 0){
                this.defaultScorePlayer1 = true;
            }else{
                this.defaultScorePlayer1 = false;
            }
            if(this.player2Score < 7 && this.player2Score > 0){
                this.defaultScorePlayer2 = true;
            }else{
                this.defaultScorePlayer2 = false;
            }
            if(this.player1Score >= 7 && this.player1Score < 9){
                this.greatScorePlayer1 = true;
            }else{
                this.greatScorePlayer1 = false;
            }
            if(this.player2Score >= 7 && this.player2Score < 9){
                this.greatScorePlayer2 = true;
            }else{
                this.greatScorePlayer2 = false;
            }
            if(this.player1Score == 9){
                this.epicScorePlayer1 = true;
            }else{
                this.epicScorePlayer1 = false;
            }
            if(this.player2Score == 9){
                this.epicScorePlayer2 = true;
            }else{
                this.epicScorePlayer2 = false;
            }
        },
        gameScore: function(){
            
            if (this.gameScore == 18){
                this.isEpic = true;
            } else if(this.gameScore != 18){
                this.isEpic = false;
            }
            if (this.gameScore < 18 && this.gameScore > 14){
                this.isGreat = true;
            } else {
                this.isGreat = false;
            }
            if (this.gameScore < 15 && this.gameScore > 9) {
                this.isGood = true;                
            } else {
                this.isGood = false;
            }
        }
    }
}
</script>
<style>
.epicGame{
    background-color: black;
    color: rgb(255, 157, 157);
}
.greatGame{
    background-color: rgb(255, 157, 157);
    color: black;
}
.goodGame{
    background-color: rgb(57, 155, 57);
}
.item{
    text-align: center;
    font-size: 1.5rem;
    margin: 0;
}
.matchlistitem-flex{
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
}
</style>
