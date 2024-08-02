<script setup lang="ts">
const props = defineProps<{
    isActive?: boolean
}>()
const emit = defineEmits(['filter'])
</script>

<template>
    <button :class="{ 'app-filter-button': true, 'is-active': props.isActive }" @click="emit('filter')">
        <slot />
    </button>
</template>

<style lang="css" scoped>
.app-filter-button {
    color: var(--blue-200);
    font-size: 13px;
    font-weight: 600;
    line-height: 19px;
    border-radius: 10px;
    background-color: var(--gray-100);
    padding: 5px 16px 6px;
    min-width: 48px;

    &:hover {
        background-color: #CFD7FF;
    }

    &.is-active {
        background-color: var(--blue-200);
        color: var(--white);
    }
}
</style>