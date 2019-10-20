<template>
<Container>
    <div class="service columns" :class="{reverse: reverse}">
        <div class="column service__left">
            <h1>{{ title }}</h1>
            <p><slot></slot></p>
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
            default: false,
        },
        title: {
            type: String,
            required: true,
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
    padding: var(--margin) 0px;
}
.reverse{
    flex-direction: row-reverse;
}
.service__left{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
@media screen and (max-width:480px) {
    .service{
        margin: 12px;
    }
}
</style>