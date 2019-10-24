<template>
    <div>
        <PageHeader title="Receiver">
            <div slot="left">
            Receiver Page
            </div>
            <div slot="right" style="display: flex; justify-content: center;align-items:center;margin:150px auto 75px;">
                <Dog/>
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
import Dog from '~/components/Animations/Dog'

export default {
    components: {
        PageHeader,
        Container,
        Dog
    }
}
</script>