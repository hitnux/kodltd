<template>
<div class="mybox">
    <div class="MessageBox">
        <slot></slot>
    </div>
</div>
</template>
<script>
export default {
}
</script>
<style>
.MessageBox{
    height:500px;
    overflow-y:auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

</style>