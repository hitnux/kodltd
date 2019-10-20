<template>
  <section class="section">
    <PageHeader title="Receiver">
        <div slot="left">
            Receiver Page
        </div>
        <div slot="right">
            <img :src="require('~/assets/video.png')" />
        </div>
    </PageHeader>
    <Container>
        <h1> İşlem yapabilmek için önce karekodu okutmalısın! </h1>
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
