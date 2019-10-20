<template>
    <section class="section">
        <PageHeader title="About">
            <div slot="left">
                Yapım Aşaması: <b>Pre-Alpha Sürümü</b> Version 0.1<br>Nuxt JS, Vue JS, CSS, JS
            </div>
            <div slot="right" style="display: flex; justify-content: center;align-items:center;margin:150px auto 75px;">
               <Dog/>
            </div>
        </PageHeader>
        <Container>
            <h1>About us</h1>
        </Container>
    </section>
</template>
<script>
import Container from '~/components/Container'
import PageHeader from '~/components/PageHeader'
import Dog from '~/components/Animations/Dog'
export default {
    components: {
        Container,
        PageHeader,
        Dog
    },
}
</script>