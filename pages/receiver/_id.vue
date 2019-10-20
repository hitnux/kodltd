<template>
    <div>
        <PageHeader title="Receiver">
            <div slot="left">
            Receiver Page
            </div>
            <div slot="right">
                <img :src="require('~/assets/video.png')" />
            </div>
        </PageHeader>
        <Container>
            <h1>{{ $route.params.id }}</h1>
        </Container>
    </div>
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