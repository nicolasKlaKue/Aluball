<!--    
    OpenTasks: 
    1. Undo-Button
    2. Match-Plan-Creator
    3. Matches als solche
-->
<template>
    <div id="playerlist">
        <h1>Spieler:</h1>
        <ul>
           <li v-for="player in players" :key="player.key">{{player.number}}. {{player.name}}</li> 
        </ul>
        <table>
            <tr>
                <th>Position</th>
                <th>Name</th>
                <th>Siege</th>
                <th>Unentschieden</th>
                <th>Ø Avg.</th>
                <th>Shots</th>
                <th>Treffer</th>
                <th>Verfehlt</th>
                <th>Missed-btn</th>
                <th>Hit-btn</th>
                <th>Win-btn</th>
                <th>Draw-btn2</th>
            </tr>
            <tr v-for="(player, index) in players" :key="player.key">
                <td>{{index +1}}</td>
                <td>{{player.name}}</td>
                <td>{{player.victorys}}</td>
                <td>{{player.draws}}</td>
                <td>{{player.avg}}</td>
                <td>{{player.shots}}</td>
                <td>{{player.hits}}</td>
                <td>{{player.missed}}</td>
                <th><button v-on:click="$emit('player-missed',player.number)">{{player.name}}-miss</button></th>
                <th><button v-on:click="$emit('player-hit',player.number)">{{player.name}}-getroffen</button></th>
                <th><button v-on:click="$emit('player-victory',player.number)">{{player.name}}-gewonnen</button></th>
                <th><button v-on:click="$emit('player-draw',player.number)">{{player.name}}-Unentschieden</button></th>
            </tr>

        </table>
    </div>
</template>
<script>
export default {
    name: 'playerlist',
    props: ['players'],
    data () {
        return {    
        }
    }    
}
</script>
<style>

</style>
