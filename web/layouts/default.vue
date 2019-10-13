<template>
  <div>
    <Navbar>
      <b-navbar-item v-for="(item, key) of items" :key="key" :to="item.to" tag="router-link">
          {{item.title}}
      </b-navbar-item>
    </Navbar>
    <nuxt />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Hamurabi</strong> Pre-Alpha
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Style from '~/assets/Style'
export default {
  components: {
    Navbar
  },
  data () {
    return {
      items: [
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' } 
        },
        {
          title: 'Test',
          icon: 'account',
          to: { name: 'test' }
        }
      ]
    }
  }
}
</script>
