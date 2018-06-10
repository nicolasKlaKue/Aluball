<template>
    <div id="startcomp">
        <PlayerInput></PlayerInput>
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
        }
    }
}
</script>
<style>

</style>

