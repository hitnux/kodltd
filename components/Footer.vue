<template>
    <footer class="footer">
        <Container>
            <div class="content">
                <h2 style="margin-bottom:64px;"><strong>Hamurabi</strong> Pre-Alpha</h2>
                <div class="footer__rows">
                    <div class="footer__row">
                        <ul class="footer__menu" style="margin:1em 0;">
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                        </ul>
                        <ul class="footer__menu" style="margin:1em 0;">
                            <li>Test</li>
                            <li>Test</li>
                            <li>Test</li>
                        </ul>
                    </div>
                    <ul class="footer__menu" style="margin:1em 0;">
                        <li>Test</li>
                        <li>Test</li>
                        <li>Test</li>
                    </ul>
                </div>
                <div class="footer__bottom">
                    <h5>Tüm hakları saklıdır</h5>
                    <div class="footer__language">
                        <h5>Türkçe</h5>
                    </div>
                </div>
            </div>
      </Container>
    </footer>
</template>

<script>
import Container from '~/components/Container'
export default {
    name: "Footer",
    components: {
        Container
    },
    props: {
    },
    data () {
        return {
        
        }
    },
    methods:{
        
    },
    created () {
        
    },
    destroyed () {
        
    }
}
</script>
<style>
.footer{
    border-top: solid 1px rgba(0,0,0,0.05);
    padding: 64px 24px 24px;
    font-size: 1em;
}
.footer__rows{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.footer__row{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.footer__menu li{
    list-style-type: none;
    min-width: 200px;
}
.footer__bottom{
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
}
</style>