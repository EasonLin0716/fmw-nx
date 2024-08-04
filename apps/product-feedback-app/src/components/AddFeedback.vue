<script setup lang="ts"></script>

<template>
    <NuxtLink to="/" class="toolbar-link">+ Add Feedback</NuxtLink>
</template>

<style lang="css" scoped>
.toolbar-link {
    width: 158px;
    height: 44px;
    border-radius: 10px;
    text-decoration: none;
    color: var(--white);
    background-color: var(--purple);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: var(--purple-hover);
    }
}
</style>