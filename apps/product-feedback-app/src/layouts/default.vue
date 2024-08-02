<template>
    <div class="default-layout">
        <AppSidebar />
        <slot />
    </div>
</template>

<style lang="css" scoped>
.default-layout {
    padding-top: 94px;
    display: flex;
    justify-content: center;
    gap: 30px;
}
</style>