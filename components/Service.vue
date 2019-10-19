<template>
<Container>
    <div class="service columns" :class="{reverse: reverse}">
        <div class="column">
            <slot></slot>
        </div>
        <div class="column">
            <img :src="src" />
        </div>
    </div>
</Container>
</template>

<script>
import Container from '~/components/Container'
export default {
    name: "Service",
    components: {
        Container
    },
    props: {
        src: {
            type: String,
            required: true,
        },
        reverse: {
            type: Boolean,
            required: false,
        }
    },
    data () {
        return {
        
        }
    },
    methods:{
        
    },
    created () {
        
    },
    destroyed () {
        
    }
}
</script>
<style>
.service{
    padding: 75px 0px;
}
.reverse{
    flex-direction: row-reverse;
}
</style>