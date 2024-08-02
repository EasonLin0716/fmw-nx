<script lang="ts" setup>
const props = defineProps<{
    isError?: boolean,
    isActive?: boolean,
}>();
</script>

<template>
    <div :class="{
        'search-feat-container': true,
        'is-error': props.isError,
        'is-active': props.isActive,
    }">
        <slot />
    </div>
</template>

<style lang="css" scoped>
.search-feat-container {
    width: 255px;
    height: 48px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    background: var(--gray-200);
    border: 1px solid var(--gray-200);

    &.is-error {
        border-color: var(--orange-200);
    }

    &.is-active {
        border-color: var(--blue-200);
    }
}
</style>