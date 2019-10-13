<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style scoped>
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 1024px;
    }
</style>