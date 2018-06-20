<template>
    <div v-bind:class="{epicGame: isEpic, greatGame: isGreat, goodGame: isGood}" id="matchlistitem">
        <p class="item"><span v-if="finished">{{player1Score}}</span> {{player1.name}} vs. {{player2.name}} <span v-if="finished">{{player2Score}}</span> = {{gameScore}}</p>
    </div>    
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
            isGood: false
        }
    },
    watch:{
        match: function(newMatch, oldMatch){
            console.log("SONE VERFICKTE SCHEIßE!!!");
            
            this.player1Score = newMatch.player1_hits.reduce((a, b) => a + b, 0);
            this.player2Score = newMatch.player2_hits.reduce((a, b) => a + b, 0);
        },
        finished: function(oldV, newV){
            console.log("FUCK!");
            this.player1Score = this.match.player1_hits.reduce((a, b) => a + b, 0);
            this.player2Score = this.match.player2_hits.reduce((a, b) => a + b, 0);
            this.gameScore = this.player1Score + this.player2Score;
        },
        gameScore: function(){
            console.log("Score:" +this.gameScore);
            
            if (this.gameScore == 18){
                this.isEpic = true;
            } else if(this.gameScore != 18){
                this.isEpic = false;
            }
            if (this.gameScore < 18 && this.gameScore > 14){
                console.log("SHIT GOT GREAT!");
                this.isGreat = true;
            } else {
                this.isGreat = false;
            }
            if (this.gameScore < 15 && this.gameScore > 9) {
                this.isGood = true;
                console.log("SHIT GOT GOOD!");
                
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
    color: gold;
}
.greatGame{
    background-color: rgb(255, 157, 157);
    color: black;
}
.goodGame{
    background-color: rgb(57, 155, 57);
}
.item{
    font-size: 1rem;
    margin: 0;
}
</style>
