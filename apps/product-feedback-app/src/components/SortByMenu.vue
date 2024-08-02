<script lang="ts" setup>
import { defineEmits, ref, reactive, computed, watch } from 'vue';
import { useClickOutside } from '../composables/useClickOutside';
const emit = defineEmits(['setNewSortBy']);
const isActive = ref<boolean>(false);
const currentSortByIndex = ref<number>(0);
const menuItems = reactive([
    'Most upvotes',
    'Least upvotes',
    'Most comments',
    'Least comments'
]);
const activeMenuItem = computed<string>(() => menuItems[currentSortByIndex.value]);
useClickOutside(isActive);
const setNewSortBy = (index: number): void => {
    currentSortByIndex.value = index;
    emit('setNewSortBy', index);
};
</script>

<template>
    <div :class="{
        'wrapper': true,
        'is-active': isActive
    }" @click.stop>
        <button class="container" @click="isActive = !isActive">
            <p>Sort by : <span>{{ activeMenuItem }}</span></p>
            <img src="/images/shared/icon-arrow-down-white.svg" alt="Arrow down" />
        </button>
        <AppDropdown :items="menuItems" :currentSortByIndex="currentSortByIndex" class="menu"
            @setNewSortBy="setNewSortBy" />
    </div>
</template>

<style lang="css" scoped>
.wrapper {
    position: relative;

    &.is-active {
        .container {
            p {
                opacity: 0.75;
            }
        }

        .menu {
            display: flex;
            position: absolute;
            top: calc(100% + 16px);
            left: 0;
        }
    }
}

.container {
    cursor: pointer;
    border-radius: 10px;
    background: #373F68;
    width: 194px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;


    p {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
    }

    span {
        font-weight: 700;
    }
}
</style>