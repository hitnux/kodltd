<template>
<Container>
    <div class="columns">
    <div class="column table">
        <div class="square">
            K
        </div>
        <div class="square">
            O
        </div>
        <div class="square">
            D
        </div>
        <div class="square">
            L
        </div>
        <div class="square">
            T
        </div>
        <div class="square">
            D
        </div>
        <div class="square">
            H
        </div>
        <div class="square">
            M
        </div>
        <div class="square active">
            4
        </div>
        <div class="square active">
            0
        </div>
        <div class="square active">
            4
        </div>
        <div class="square">
            C
        </div>
        <div class="square">
            B
        </div>
        <div class="square active">
            P
        </div>
        <div class="square active">
            A
        </div>
        <div class="square active">
            G
        </div>
        <div class="square active">
            E
        </div>
        <div class="square">
            O
        </div>
        <div class="square">
            K
        </div>
        <div class="square">
            L
        </div>
        <div class="square active">
            N
        </div>
        <div class="square active">
            O
        </div>
        <div class="square active">
            T
        </div>
        <div class="square">
            A
        </div>
        <div class="square">
            E
        </div>
        <div class="square active">
            F
        </div>
        <div class="square active">
            O
        </div>
        <div class="square active">
            U
        </div>
        <div class="square active">
            N
        </div>
        <div class="square active">
            D
        </div>
        <div class="square">
            R
        </div>
        <div class="square">
            I
        </div>
        <div class="square">
            I
        </div>
        <div class="square">
            L
        </div>
        <div class="square">
            N
        </div>
        <div class="square">
            G
        </div>
    </div>
    <div class="column" style="margin: 42px 0;">
        We couldn't find what you were looking for.
Unfortunately the page you were looking for could not be found. It may be temporarily unavailable, moved or no longer exist.

Check the URL you entered for any mistakes and try again. Alternatively, search for whatever is missing or take a look around the rest of our site.
    </div>
    </div>
</Container>
</template>

<script>
import Container from '~/components/Container'
export default {
    components: {
        Container
    }
}
</script>

<style scoped>
.table{
  display: flex;
  flex-wrap: wrap;
max-width: 500px;
min-width: 432px;
  margin: 42px auto;
}
.square{
  display: flex;
  align-items: center;
  justify-content: center;
  background: #253946;
  color: #A2AAB0;
  width: 70px;
  height: 70px;
  margin: 1px;
}
.active{
  background: #209B89;
  color: #ffffff;
  font-weight: 600;
  font-size: 17px;
}
</style>