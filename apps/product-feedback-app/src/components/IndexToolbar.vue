<script setup lang="ts">
</script>

<template>

    <div class="toolbar">
        <div class="left">
            <img src="/images/suggestions/icon-suggestions.svg" alt="燈泡">
            <span>6 Suggestions</span>
            <SortByMenu />
        </div>
        <AddFeedback />
    </div>
</template>

<style lang="css" scoped>
.toolbar {
    height: 72px;
    border-radius: 10px;
    background-color: #373F68;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 24px;
    padding-right: 16px;
}

.left {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-grow: 1;

    span {
        color: #FFF;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.25px;
        white-space: nowrap;
    }
}
</style>