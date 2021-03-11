<template>
    <div class="child childA" >
        <h1>Score: {{botonA}} </h1>
        <button @click="aumentarA">+</button>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    name: 'ChildA',
    computed: {
        ...mapState(['botonA'])
    },
    methods: {
        ...mapMutations(['aumentarA'])
    }
}


</script>