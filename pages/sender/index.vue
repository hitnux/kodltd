<template>
<section class="section">
    <PageHeader title="Sender">
        <div slot="left">
            Sender page
        </div>
        <div slot="right">
            <img :src="require('~/assets/video.png')" />
        </div>
    </PageHeader>
    <Container>
        <h1> İşlem yapabilmek için önce karekodu okutmalısın!</h1>
    </Container>
</section>
</template>
<script>
import PageHeader from '~/components/PageHeader'
import Container from '~/components/Container'

export default {
    components: {
        PageHeader,
        Container
    }
}
</script>