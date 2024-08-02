<script lang="ts" setup>
const props = defineProps<{
    items: string[],
    currentSortByIndex: number,
}>();
const emit = defineEmits(['setNewSortBy']);
</script>

<template>
    <div class="app-menu">
        <button v-for="(item, index) in items" :key="index" :class="{
            'is-current': index === currentSortByIndex
        }" @click="emit('setNewSortBy', index)">{{ item }}</button>
    </div>
</template>

<style lang="css" scoped>
.app-menu {
    display: none;
    width: 255px;
    background-color: var(--white);
    border-radius: 10px;
    flex-direction: column;
    box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
    z-index: 1;

    button {
        text-align: left;
        padding: 12px 0 12px 24px;
        color: var(--gray-400);
        line-height: 23px;

        &:hover {
            color: var(--purple);
        }

        &:not(:last-child) {
            border-bottom: 1px solid rgb(58, 67, 116, 0.15);
        }

        &.is-current {
            background-image: url('/images/shared/icon-check.svg');
            background-repeat: no-repeat;
            background-position: center right 24px;
        }
    }

}
</style>