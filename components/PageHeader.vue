<template>
<Container>
  <div class="pageHeader columns">
        <div class="pageHeader__left column">
            <slot name="left"></slot>
        </div>
        <div class="pageHeader__right column">
            <slot name="right"></slot>
        </div>
  </div>
</Container>
</template>

<script>
import Container from '~/components/Container'
export default {
    name: "PageHeader",
    components: {
        Container
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
  .pageHeader{
      min-height: 70vh;
      align-items: center;
      justify-content: space-between;
  }
</style>