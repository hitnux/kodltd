<template>
<div>
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
      <div id="QrLayout" slot="right">
        <qr-code :text=url :size="250" color="#34495e" bg-color="white" id="qrcode"></qr-code>
      </div>
    </PageHeader>
    <Container>
      <div class="columns">
        <!--<b-button 
                type="is-info"
                class="has-text-centered"
                tag="router-link"
                :to="{ name: 'inspire', params: { id: 1234 } }">
            </b-button>-->
      </div>
    </Container>
  </section>
  <div style="background: #34495E;padding:75px;margin-bottom:var(--margin);">
    <figure class="image">
        <img src="~/assets/video.png" style="height:315px;width:560px;margin: auto;">
      </figure>
  </div>
  <Service :src="require('~/assets/video.png')">
      <h1>Gizlilik dostu</h1>
İnsanların gizliliğinin temel bir hak olduğuna inanan sağlam bir şirketiz. Faaliyetlerinizi veya etkinliklerinizi izlemiyoruz.
  </Service>
  <Service :src="require('~/assets/video.png')" reverse="true">
      <h1>Gizlilik dostu</h1>
İnsanların gizliliğinin temel bir hak olduğuna inanan sağlam bir şirketiz. Faaliyetlerinizi veya etkinliklerinizi izlemiyoruz.
  </Service>
  <Reviews>
  </Reviews>
</div>
</template>

<script>
import Container from '~/components/Container'
import PageHeader from '~/components/PageHeader'
import Service from '~/components/Service'
import Reviews from '~/components/Reviews'

export default {
  name: 'HomePage',
  data () {
    return {
      url: "https://buefy.org",
      url2: "https://buefy.org",
      isConnected: false,
      socketMessage: ''
    }
  },
  components: {
    Container,
    PageHeader,
    Service,
    Reviews
  },
  methods:{
    Generate: function(event){
      this.url=this.url2+"/?v="+Math.floor(Math.random() * 10);
    }
  },

  created(){
    /*socket.on("girisKontrol", (id) => {
        $(location).attr('href', 'http://localhost:3000/gonderen/' + id);
    });*/
  }
}
</script>
<style>
#QrLayout{
  display: flex;
  justify-content:center;
}
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