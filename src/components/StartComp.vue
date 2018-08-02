<template>
    <div id="startcomp">
        <PlayerInput></PlayerInput>
        <PlayerList  :players="players" ></PlayerList>
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
    }
}
</script>
<style>

</style>

