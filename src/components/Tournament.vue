<template>
    
</template>
<script>
export default {
    name: 'torunament',
    components: {MatchComp},
    props: ['players', 'matches'],
    data(){
        return {
            advancedMatches: [],
        }
    }, 
    created(){
        //{number: counter, player1: i, player2: j, player1_hits:[0,0,0,0,0,0,0,0,0], player2_hits:[0,0,0,0,0,0,0,0,0], finished: false}
        
    }
}
</script>
<style>

</style>
