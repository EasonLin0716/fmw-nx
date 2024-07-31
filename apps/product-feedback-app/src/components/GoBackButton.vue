// goBackButton.vue
<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    isDark?: boolean,
}>();
</script>

<template>
    <button :class="`go-back-button ${isDark ? 'is-dark' : ''}`">
        <img v-if="isDark" src="/images/shared/icon-arrow-left-white.svg" alt="">
        <img v-else src="/images/shared/icon-arrow-left-blue.svg" alt="">
        <span>Go Back</span>
    </button>
</template>

<style scoped>
.go-back-button {
    width: 158px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    border-radius: 10px;
    border: 0;
    color: var(--gray-400);
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    background-color: transparent;

    &.is-dark {
        background-color: #373F68;
        color: var(--white);
    }
}
</style>