<script lang="ts" setup>
import { ref, reactive, defineEmits } from 'vue';
const isActive = ref<boolean>(false);
const currentSortByIndex = ref<number>(0);
const menuItems = reactive([
    'Most upvotes',
    'Least upvotes',
    'Most comments',
    'Least comments'
]);
const setNewSortBy = (index: number): void => {
    currentSortByIndex.value = index;
    emit('setNewSortBy', index);
};
const emit = defineEmits(['setNewSortBy']);
</script>

<template>
    <div :class="{
        'wrapper': true,
        'is-active': isActive
    }">
        <button class="container" @click="isActive = !isActive">
            <p>Sort by : <span>Most Upvotes</span></p>
            <img src="/images/shared/icon-arrow-down-white.svg" alt="Arrow down" />
        </button>
        <div class="menu">
            <button v-for="(item, index) in menuItems" :key="index" :class="{
                'is-current': index === currentSortByIndex
            }" @click="setNewSortBy(index)">{{ item }}</button>
        </div>
    </div>
</template>

<style scoped>
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

.menu {
    display: none;
    position: absolute;
    top: calc(100% + 16px);
    left: 0;
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