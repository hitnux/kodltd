<template>
    <section>
        <b-rate 
            v-model="rate"
            :icon-pack="packs"
            :icon="icons" 
            :max="maxs" 
            :size="sizes"
            :show-score="score"
            :custom-text="custom"
            :show-text="text"
            :texts="texts"
            :rtl="isRtl"
            :spaced="isSpaced"
            :disabled="isDisabled">
        </b-rate>
    </section>
</template>
<script>
    export default {
        props: {
            rate: {
                type: Number,
                required: true,
                default:5
            }
        },
        data() {
            return {
                maxs: 5,
                sizes: '',
                packs: 'mdi',
                icons: 'star',
                score: false,
                custom: '',
                text: false,
                texts: ['Very bad', 'Bad', 'Good', 'Very good', 'Awesome'],
                isRtl:false,
                isSpaced: false,
                isDisabled: true
            }
        }
    }
</script>