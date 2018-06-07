<template>
    <div id="startcomp">
        <PlayerInput v-on:pass-player="passNewPlayer" ></PlayerInput>
        <PlayerList v-on:new-game="startGame" :players="players" ></PlayerList>
    </div>
</template>
<script>

import PlayerInput from './PlayerInput.vue';
import PlayerList from './PlayerList.vue';

export default {
    name: 'startcomp',
    components: {PlayerInput, PlayerList},
    props: ['players'],
    methods: {
        startGame: function(){
            this.$emit('new-game');
        },
        passNewPlayer: function(playername){
            console.log("WAS DAS DENN?!" + playername);
            
            this.$emit('new-player',playername);
        }
    }
}
</script>
<style>

</style>

