<script lang="ts" setup>
import { reactive } from 'vue';
const roadmapData = reactive([
    { dotColor: '#F49F85', title: 'Planned', number: 2 },
    { dotColor: '#AD1FEA', title: 'In-Progress', number: 1 },
    { dotColor: '#62BCFA', title: 'Live', number: 1 },
])
</script>

<template>
    <div class="sidebar-roadmap">
        <div class="top-section">
            <p>Roadmap</p>
            <NuxtLink to="/roadmap" class="link">View</NuxtLink>
        </div>
        <ul class="data">
            <RoadmapData v-for="(data, index) in roadmapData" :key="index" :data="data" />
        </ul>
    </div>
</template>

<style lang="css" scoped>
.sidebar-roadmap {
    background-color: var(--white);
    border-radius: 10px;
    padding: 19px 24px 24px;
}

.data {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.top-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.link {
    color: #8397F8;
    font-size: 13px;
    font-weight: 600;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
}

p {
    color: var(--gray-300);
    font-size: 18px;
    font-weight: 700;
    letter-spacing: -0.25px;
    line-height: 26px;
}
</style>