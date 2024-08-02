<script setup lang="ts">
interface RoadmapData {
    dotColor: string;
    title: string;
    number: number;
}
const props = defineProps<{
    data: RoadmapData
}>()
</script>

<template>
    <li class="roadmap-data">
        <div class="left">
            <div class="dot" :style="{ backgroundColor: data.dotColor }"></div>
            <span>{{ data.title }}</span>
        </div>
        <div class="right">{{ data.number }}</div>
    </li>
</template>

<style lang="css" scoped>
span {
    color: var(--gray-400);
    font-size: 16px;
    line-height: 23px;
}

.roadmap-data {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.left {
    display: flex;
    align-items: center;
    gap: 16px;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
}

.right {
    color: var(--gray-400);
    font-size: 16px;
    font-weight: 700;
}
</style>