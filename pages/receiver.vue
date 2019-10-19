<template>
  <section class="section">
    <PageHeader>
        <div slot="left" style="display:flex;flex-direction:column;align-items:center;">
            <h1 style="text-align:center">Hamurabi <br>Projesi</h1>
            <p style="font-size:22px;text-align:center;">Yapım Aşaması: <b>Pre-Alpha Sürümü</b> Version 0.1<br>Nuxt JS, Vue JS, CSS, JS</p>
            <b-button 
                type="is-info"
                icon-left="coffee"
                v-on:click="Generate"
                size="is-medium"
                class="has-text-centered"
                style="border-radius:25px;">
                Bize kahve ısmarla
            </b-button>
        </div>
        <div slot="right">
            <img :src="require('~/assets/video.png')" />
        </div>
    </PageHeader>
    <Container>
        <h2 class="title is-3 has-text-grey">
        "Just start  <b-icon
            icon="rocket"
            size="is-large"
        />"
        </h2>
        <h3 class="subtitle is-6 has-text-grey">
        Author: <a href="https://github.com/anteriovieira">
            Antério Vieira
        </a>
        </h3>
    </Container>
  </section>
</template>
<script>
import index from '~/pages/index'
import PageHeader from '~/components/PageHeader'
import Container from '~/components/Container'

export default {
    components: {
        PageHeader,
        Container
    },
  data () {
    return {
        id: "",
    }
  },
  created() {
      this.id = this.$route.params.id;
      console.log(this.id);
  },
}
</script>
