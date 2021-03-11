<template>
    <div class="child childB">
        <h1>Score: {{botonB}} </h1>
        <button @click="aumentarB">+</button>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';

export default {
    name: 'ChildB',
    computed: {
        ...mapState(['botonB'])
    },
    methods: {
        ...mapMutations(['aumentarB'])
    }
}
</script>