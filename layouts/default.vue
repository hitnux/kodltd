<template>
  <div>
    <Navbar :class="{ 'navbar--hidden': !showNavbar }">
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
      showNavbar: true,
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
  },
  methods:{
    handleScroll(){
      if(document.documentElement.scrollTop > 1){
        this.showNavbar=false;
      }else{
        this.showNavbar=true;
      }
      
      console.log(this.showNavbar);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>
<style scoped>
  .navbar--hidden{
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.25);
  }
</style>