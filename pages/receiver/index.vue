<template>
  <section class="section">
    <PageHeader title="Upsss...">
        <div slot="left">
            Bir hata oluştu! Lütfen karakod okutma işleminin başarıyla tamamlandığından emin olun!
        </div>
        <div slot="right" style="display:flex;justify-content: center;">
            <div class="alert">!</div>
        </div>
    </PageHeader>
  </section>
</template>
<script>
import PageHeader from '~/components/PageHeader'

export default {
    components: {
        PageHeader
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
<style>
.alert{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    color: white;
    padding: 100px; 
    height: 100px;
    width: 100px;
    background: red;
    border-radius: 50%;
}
</style>
