<template>
  <section class="section">
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
  </section>
</template>
<script>
import index from '~/pages/index'

export default {
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
