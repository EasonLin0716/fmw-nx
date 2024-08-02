<script lang="ts" setup>
import { ref } from 'vue';
import AppMenu from './AppMenu.vue';
import { useClickOutside } from '../composables/useClickOutside';
import { useActiveMenuItem } from '../composables/useActiveMenuItem';

const isActive = ref<boolean>(false);
const currentSortByIndex = ref<number>(0);
const menuItems = ['Feature', 'UI', 'UX', 'Enhancement', 'Bug'];

const { activeMenuItem } = useActiveMenuItem(menuItems, currentSortByIndex);
useClickOutside(isActive);

const setNewSortBy = (index: number): void => {
    currentSortByIndex.value = index;
    isActive.value = false;
};
</script>

<template>
    <div :class="{
        'app-dropdown': true,
        'is-active': isActive
    }">
        <SearchFeatContainer :isActive class="search-feat-container" @click.stop="isActive = true">
            <span>{{ activeMenuItem }}</span>
            <img src="/images/shared/icon-arrow-down-blue.svg" alt="">
        </SearchFeatContainer>
        <AppMenu :items="menuItems" :currentSortByIndex="currentSortByIndex" class="menu"
            @setNewSortBy="setNewSortBy" />
    </div>
</template>

<style lang="css" scoped>
.app-dropdown {
    position: relative;

    &.is-active {
        .menu {
            display: flex;
            position: absolute;
            top: calc(100% + 16px);
            left: 0;
        }
    }
}

.search-feat-container {
    justify-content: space-between;
    cursor: pointer;
}
</style>
