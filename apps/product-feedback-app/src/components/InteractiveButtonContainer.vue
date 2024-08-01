<script lang="ts"></script>

<template>
    <div class="interactive-button-container">
        <slot />
    </div>
</template>

<style scoped>
.interactive-button-container {
    border-radius: 10px;
    background-color: #F2F4FE;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding: 14px 0 8px;
    width: 40px;

    &:hover {
        background-color: #CFD7FF;
    }

    &.active {
        background-color: var(--blue-200);
    }
}
</style>