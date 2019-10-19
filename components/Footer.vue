<template>
    <footer class="footer">
        <Container>
            <div class="content">
            <p>
                <strong>Hamurabi</strong> Pre-Alpha
            </p>
            <div class="footer__rows">
                <ul class="footer__menu" style="margin:1em 0;">
                    <li>Test</li>
                    <li>Test</li>
                    <li>Test</li>
                </ul>
                <div>
                    Test
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
    border-top: solid 1px rgba(0,0,0,0.1);
    padding: 64px 24px;
    font-size: 1em;
}
.footer__rows{
    display: flex;
    justify-content: space-between;
}
.footer__menu li{
    list-style-type: none;
}
</style>