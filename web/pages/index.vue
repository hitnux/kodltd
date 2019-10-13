<template>
  <section class="section">
    <Container>
      <div class="columns">
        <Card>
          <qr-code :text=url :size="250" color="#34495e" slot="QR"></qr-code>
          <h2 slot="title">Hamurabi</h2>
          <p slot="content">
            İçerikler "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Card>
      </div>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </Container>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Container from '~/components/Container'

export default {
  name: 'HomePage',
  data () {
    return {
      url: "https://buefy.org",
    }
  },
  components: {
    Card,
    Container
  },
  created(){
  }
}
</script>
<style>
</style>
