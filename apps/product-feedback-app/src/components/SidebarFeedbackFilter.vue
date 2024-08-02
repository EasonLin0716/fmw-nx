<script setup lang="ts">
import { reactive } from 'vue';
const filterList = reactive([
    { id: 1, name: 'All', isActive: true },
    { id: 2, name: 'UI', isActive: false },
    { id: 3, name: 'UX', isActive: false },
    { id: 4, name: 'Enhancement', isActive: false },
    { id: 5, name: 'Bug', isActive: false },
    { id: 6, name: 'Feature', isActive: false },
])
const handleFilter = (id: number) => {
    filterList.forEach(filter => {
        filter.isActive = filter.id === id;
    });
}
</script>

<template>
    <div class="sidebar-feedback-filter">
        <AppFilterButton v-for="(filter, index) in filterList" :key="index" :isActive="filter.isActive"
            @filter="handleFilter(filter.id)">
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