<template>
    <div :id="matchname">
        <table>
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
                </tr>
            </thead>
            <tbody>
                <tr v-for="(player, index) in players" :key="player.key">
                    <td>
                        {{index}} - {{player.name}}
                    </td>
                    <td>
                        <table class="flex">
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=1 ></TossComp>
                            </tr>
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=2 ></TossComp>
                            </tr>
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=3 ></TossComp>
                            </tr>
                        </table>
                        
                    </td>
                    <td>
                        <table class="flex">
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=4 ></TossComp>
                            </tr>
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=5 ></TossComp>
                            </tr>
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=6 ></TossComp>
                            </tr>
                        </table>
                    </td>
                    <td>
                        <table class="flex">
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=7 ></TossComp>
                            </tr>
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=8 ></TossComp>
                            </tr>
                            <tr class="inline_grid">
                                <TossComp v-on:playerhit="playerhit" v-on:playermiss="playermiss" :playernumber="index" :TossCompnumber=9 ></TossComp>
                            </tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>{{score_player1}}</p>
        <p>{{score_player2}}</p>
        <button v-on:click="addNewGame">Spiel abschließen</button>
    </div>
</template>
<script>
import TossComp from './TossComp.vue';

export default {
    name: 'match',
    components: {TossComp},
    props: ['players','matchname'],
    data () {
        return {  
            score_player1: 0,
            score_player2: 0
        }
    },
    methods:{
        addNewGame: function (params) {
            
        },
        playerhit: function(args){
            console.log("Player: " + args[0] + " getroffen Wurf: " + args[1]);
            
            if (args[0] == 0) {
                this.score_player1++;
            }
            if(args[0] == 1){
                this.score_player2++;
            }
        },
        playermiss: function(args){
            console.log("Player: " + args[0] + " getroffen Wurf: " + args[1]);
            
            if(args[0] == 0){
                if(this.score_player1 > 0){
                    this.score_player1--;
                }
            }
            if(args[0] == 1){
                if(this.score_player2 > 0){
                    this.score_player2--;
                }
            }
        }
    }  
}
</script>
<style>
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
    appearance: none;
    border-radius: 50%;
    background-color: red;
}
</style>

