<template>
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <slot name="QR"></slot>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p><strong id="title"><slot name="title"></slot></strong>
          <br>
          <slot name="content"></slot>
        </p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
  .media{
    justify-content: center;
  }
  #title h2{
    margin:0;
  }
  @media screen and (max-width: 480px) {
    .media{
      flex-wrap: wrap;
    }
    .media-content{
      margin-top: 1.5rem;
      text-align: center;
    }
  }
</style>