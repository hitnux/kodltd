<template>
<div>
  <section class="section">
    <Container>
      <div class="columns">
        <Card>
          <div slot="QR" style="display: flex; flex-direction: column;justify-content:center;position: relative;">
          <qr-code :text=url :size="250" color="#34495e" id="qrcode"></qr-code>
          <b-button 
                id="refresh"
                type="is-info"
                icon-left="refresh"
                v-on:click="Generate"
                class="has-text-centered">
            </b-button>
          </div>
          <h2 slot="title">Hamurabi</h2>
          <p slot="content">
            İçerikler "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </Card>
      </div>
    </Container>
  </section>
  <div style="background: #34495E;padding:75px;">
      <figure class="image">
          <img src="~/assets/video.png" style="height:315px;width:560px;margin: auto;">
        </figure>
    </div>
</div>
</template>

<script>
import Card from '~/components/Card'
import Container from '~/components/Container'

export default {
  name: 'HomePage',
  data () {
    return {
      url: "https://buefy.org",
      url2: "https://buefy.org",
    }
  },
  components: {
    Card,
    Container
  },
  methods:{
    Generate: function(event){
      this.url=this.url2+"/?v="+Math.floor(Math.random() * 10);
    }
  },
  created(){
  }
}
</script>
<style>
#refresh{
  font-size: 50px;
  width: 150px;
  height:150px;
  position: absolute;
  left:50px;
  top:50px;
  opacity: 0;
  border: solid 1px #0F77EA;
  border-radius: 50%;
  transition: opacity .5s;
}
#refresh:hover{
  opacity: 1;
}
</style>
