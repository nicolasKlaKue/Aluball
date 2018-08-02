
<template>
    <div class="table-responsive" id="ligatable">
        <h1>Spieler:</h1>
        <table class="table table-striped">
            <tr>
                <th>Position</th>
                <th>Name</th>
                <th>S</th>
                <th>U</th>
                <th>N</th>
                <th>Ø Avg.</th>
                <th>Shots</th>
                <th>Treffer</th>
                <th>Verfehlt</th>
            </tr>
            <tr v-for="(player, index) in players" :key="player.key">
                <td>{{index +1}}</td>
                <td>{{player.name}}</td>
                <td>{{player.victorys}}</td>
                <td>{{player.draws}}</td>
                <td>{{player.losses}}</td>
                <td>{{Math.round(player.avg * 100)}}%</td>
                <td>{{player.shots}}</td>
                <td>{{player.hits}}</td>
                <td>{{player.missed}}</td>
            </tr>

        </table>
    </div>
</template>
<script>
export default {
    name: 'ligatable',
    props: ['players'],
    data () {
        return {    
        }
    },
    methods:{
    }  
}
</script>
<style>

</style>
