<script lang="ts" setup>
import { defineEmits, ref, reactive, computed, watch } from 'vue';
import { useClickOutside } from '../composables/useClickOutside';
import { useActiveMenuItem } from '../composables/useActiveMenuItem';
const emit = defineEmits(['setNewSortBy']);
const isActive = ref<boolean>(false);
const currentSortByIndex = ref<number>(0);
const menuItems = reactive([
    'Most upvotes',
    'Least upvotes',
    'Most comments',
    'Least comments'
]);
const { activeMenuItem } = useActiveMenuItem(menuItems, currentSortByIndex);
useClickOutside(isActive);
const setNewSortBy = (index: number): void => {
    currentSortByIndex.value = index;
    emit('setNewSortBy', index);
};
</script>

<template>
    <div :class="{
        'sort-by-menu': true,
        'is-active': isActive
    }" @click.stop>
        <button class="container" @click="isActive = !isActive">
            <p>Sort by : <span>{{ activeMenuItem }}</span></p>
            <img class="arrow-icon" src="/images/shared/icon-arrow-down-white.svg" alt="Arrow down" />
        </button>
        <AppMenu :items="menuItems" :currentSortByIndex="currentSortByIndex" class="menu"
            @setNewSortBy="setNewSortBy" />
    </div>
</template>

<style lang="css" scoped>
.sort-by-menu {
    position: relative;

    &.is-active {
        .container {
            p {
                opacity: 0.75;
            }
        }

        .arrow-icon {
            transform: rotate(180deg);
        }

        .menu {
            display: flex;
            position: absolute;
            top: calc(100% + 42px);
            left: 0;
        }
    }
}

.arrow-icon {
    transition: transform 0.3s;
}

.container {
    cursor: pointer;
    border-radius: 10px;
    width: 194px;
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