<template>
  <div>
    <Navbar :class="{ 'navbar--hidden': !showNavbar }">
      <b-navbar-item v-for="(item, key) of items" :key="key" :to="item.to" tag="router-link">
          {{item.title}}
      </b-navbar-item>
    </Navbar>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import Style from '~/assets/Style'

export default {
  components: {
    Navbar,
    Footer
  },
  data () {
    return {
      showNavbar: true,
      items: [
        {
          title: 'Receiver',
          icon: 'lightbulb',
          to: { path: 'receiver' } 
        },
        {
          title: 'Sender',
          icon: 'account',
          to: { path: 'sender' }
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