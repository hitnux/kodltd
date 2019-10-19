<template>
    <div class="reviews columns">
        <div class="column">
            <div class="card card-shadow">
                <div class="card-content">
                    <p class="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                    Jeff Atwood
                    </p>
                </div>
            </div>
        </div>
       <div class="column">
            <div class="card card-shadow">
                <div class="card-content">
                    <p class="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                    Jeff Atwood
                    </p>
                </div>
            </div>
        </div>
        <div class="column">
            <div class="card card-shadow">
                <div class="card-content">
                    <p class="title">
                    “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
                    </p>
                    <p class="subtitle">
                    Jeff Atwood
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Reviews",
    components: {
    },
    props: {
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
.reviews{
    margin: auto;
    max-width:93vw;
    padding: var(--margin) 24px 150px;
}
.card .title{
    font-size: 1.4rem;
}
.card .subtitle{
    font-size: 1.2rem;
}
.card-shadow{
    box-shadow: 0 0.5em 1em -0.125em rgba(0,0,0, 0.1), 0 0px 0 1px rgba(0,0,0, 0.02);
}
</style>