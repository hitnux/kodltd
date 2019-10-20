<template>
    <div>
        <PageHeader title="Sender">
            <div slot="left">
            Sender Page
            </div>
            <div slot="right">
                <img :src="require('~/assets/video.png')" />
            </div>
        </PageHeader>
        <Container>
            <h1>{{ $route.params.id }}</h1>
            <b-upload v-model="dropFiles"
                multiple
                drag-drop
                style="margin:auto">
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                icon="upload"
                                size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
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