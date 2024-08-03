<script setup lang="ts">
import { reactive } from 'vue';
import { filterData } from '../utils/constants';
const _getInitialFilterList = (filterData) => {
    const res = [...filterData];
    res.forEach(item => {
        item.isActive = item.value === 0;
    });
    return res;
}
const filterList = reactive(_getInitialFilterList(filterData));
const handleFilter = (value: number) => {
    filterList.forEach(filter => {
        filter.isActive = filter.value === value;
    });
}
</script>

<template>
    <div class="sidebar-feedback-filter">
        <AppFilterButton v-for="(filter, index) in filterList" :key="index" :isActive="filter.isActive"
            @filter="handleFilter(filter.value)">
            {{ filter.name }}
        </AppFilterButton>
    </div>
</template>

<style lang="css" scoped>
.sidebar-feedback-filter {
    width: 100%;
    padding: 24px;
    display: flex;
    gap: 14px 8px;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: var(--white);
}
</style>