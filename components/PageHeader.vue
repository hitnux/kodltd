<template>
<Container>
  <div class="pageHeader columns">
        <div class="pageHeader__left column">
            <h1 style="text-align:center">{{title}}</h1>
            <p style="font-size:22px;text-align:center;">
                <slot name="left"></slot>
            </p>
            <div v-if="button">
                <b-button 
                    v-if="!href"
                    tag="router-link"
                    :to="{ path:  to }"
                    type="is-info"
                    icon-left="coffee"
                    size="is-medium"
                    class="has-text-centered"
                    style="border-radius:25px;">
                    {{ buttonText }}
                </b-button>
                <b-button 
                    v-if="href"
                    tag="a"
                    :href="to"
                    type="is-info"
                    icon-left="coffee"
                    size="is-medium"
                    class="has-text-centered"
                    style="border-radius:25px;">
                    {{ buttonText }}
                </b-button>
            </div>
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
    props: {
        title: {
            type: String,
            required: true,
        },
        button:{
            type: Boolean,
            required: true,
            default: false
        },
        buttonText: {
            type: String,
            required: false,
            default: "Bize kahve ısmarla"
        },
        href: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false
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
  .pageHeader{
      min-height: 70vh;
      align-items: center;
      justify-content: space-between;
  }
  .pageHeader__left{
      display:flex;
      flex-direction:column;
      align-items:center;
  }
</style>