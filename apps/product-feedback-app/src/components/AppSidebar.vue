<script lang="ts" setup></script>

<template>
    <div class="app-sidebar">
        <SidebarHeader />
        <SidebarFeedbackFilter />
        <SidebarRoadmap />
    </div>
</template>

<style lang="css" scoped>
.app-sidebar {
    max-width: 255px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}
</style>