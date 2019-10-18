<template>
    <div class="container">
        <slot></slot>
    </div>
</template>
<style scoped>
    .container{
        margin:auto;
        position: relative;
        display: flex;
        flex-direction: column;
        max-width: 1024px;
        padding: 7px 0px;
    }
</style>