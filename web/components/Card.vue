<template>
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <slot name="QR"></slot>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong>
          <br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
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