<template>
    <div id="parent">
        <h1>Score: {{botonP}}</h1>
        <button @click="aumentarP">+</button>
        <ChildA/>
        <ChildB/>
    </div>
</template>

<style>
    #parent {
        background-color: green;
        width: 400px;
        height: 300px;
        position: relative;
        padding-left: 5px;
    }
    h1 {
        color: white;
        margin-top: 0;
    }
    .child {
        width: 160px;
        height: 150px;
        position: absolute;
        top: 90px;
        padding: 0 5px 5px;
        }
    .childA {
        background-color: red;
        left: 20px;
        }
    .childB {
        background-color: blue;
        left: 190px;
    }

</style>

<script>
    import ChildA from '@/components/ChildA.vue'
    import ChildB from '@/components/ChildB.vue'

    import {mapState, mapMutations} from 'vuex';

    export default {
    name: 'Parent',
    computed: {
        ...mapState(['botonP'])
    },
    methods: {
        ...mapMutations(['aumentarP'])
    },
    components: {
    ChildA,
    ChildB
    }
}

</script>