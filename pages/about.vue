<template>
    <section class="section">
        <PageHeader title="About">
            <div slot="left">
                Yapım Aşaması: <b>Pre-Alpha Sürümü</b> Version 0.1<br>Nuxt JS, Vue JS, CSS, JS
            </div>
            <div slot="right">
                <img :src="require('~/assets/video.png')" />
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
export default {
    components: {
        Container,
        PageHeader
    },
}
</script>