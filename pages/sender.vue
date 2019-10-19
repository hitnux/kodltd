<template>
<section class="section">
    <PageHeader>
        <div slot="left" style="display:flex;flex-direction:column;align-items:center;">
            <h1 style="text-align:center">Hamurabi <br>Projesi</h1>
            <p style="font-size:22px;text-align:center;">Yapım Aşaması: <b>Pre-Alpha Sürümü</b> Version 0.1<br>Nuxt JS, Vue JS, CSS, JS</p>
            <b-button 
                type="is-info"
                icon-left="coffee"
                v-on:click="Generate"
                size="is-medium"
                class="has-text-centered"
                style="border-radius:25px;">
                Bize kahve ısmarla
            </b-button>
        </div>
        <div slot="right">
            <img :src="require('~/assets/video.png')" />
        </div>
    </PageHeader>
    <Container>
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