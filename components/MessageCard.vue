<template>
<div class="messageContainer">
    <div class="messageCard">
        <slot></slot>
    </div>
    <b-icon
        icon="check"
        size="is-small">
    </b-icon>
</div>
</template>
<style>
.messageContainer{
    max-width: 100%;
    display: flex;
    align-items: flex-end;
}
.messageContainer .icon {
    margin-bottom: 5px;
}   
.messageCard{
    background:#0F77EA;
    max-height: 100%;
    min-width: 100px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 5px; 
    color: #ffffff;
    margin: 10px 5px 5px;
}
</style>