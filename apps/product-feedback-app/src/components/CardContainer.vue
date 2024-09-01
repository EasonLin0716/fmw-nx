<script setup lang="ts"></script>

<template>
    <div class="card-container">
        <slot></slot>
    </div>
</template>

<style lang="css" scoped>
.card-container {
    border-radius: 10px;
    background-color: var(--white);
    padding: 28px 32px;
    display: flex;
    align-items: start;
    gap: 40px;
    position: relative;
}
</style>