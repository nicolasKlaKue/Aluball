<template>
    <div class="column" :id="playernumber + '_toss_' + tossnumber">
        <input type="checkbox" @click="triggerhit"  v-model="triggered_miss" :name="playernumber + '_hit_' + tossnumber" id="">
        <input class="miss" @click="triggermiss" v-model="triggered_hit" type="checkbox"  :name="playernumber+ '_miss_' + tossnumber" id="">
        <button class="button hit_button" @click="triggerhit">+</button>
        <button class="button miss_button" @click="triggermiss">-</button>
    </div>
</template>
<script>
export default {
    name: "Toss",
    props: ['playernumber', 'tossnumber'],
    data(){
        return{
            triggered_hit: false,
            triggered_miss: false,
        }

    },
    methods: {
        triggerhit: function(){
            var args = [this.playernumber, this.tossnumber];

            this.triggered_hit = false;
            this.triggered_miss = true;
            this.$emit('playerhit',args);
            this.$emit('thrown', args);
        },
        triggermiss: function(){
            var args = [this.playernumber, this.tossnumber];

            this.triggered_hit = true;
            this.triggered_miss = false;
            this.$emit('playermiss',args);
            this.$emit('thrown', args);
        }
    }
}
</script>
<style>
.column{
    display: flex;
    flex-direction: column;
}
.button{
    margin: 3px;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0px 1px 2px grey;
}
.button:active{
    box-shadow: none;
}
.hit_button{
    background-color: rgb(123, 255, 152);
}
.miss_button{
    background-color: rgb(255, 123, 152);
}
</style>

