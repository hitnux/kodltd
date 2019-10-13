<template>
  <section class="section">
    <div class="columns">
      <Card>
        <qr-code :text=url slot="QR"></qr-code>
        <h2 slot="title">Hamurabi</h2>
        <p slot="content">İçerikler</p>
      </Card>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  data () {
    return {
      url: "test",
    }
  },
  components: {
    Card
  },
  created(){
  }
}
</script>
<style>
</style>
