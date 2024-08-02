<script lang="ts" setup>
import { ref } from 'vue';
const isError = ref<boolean>(false);
const isActive = ref<boolean>(false);
</script>

<template>
    <div class="app-text-field">
        <SearchFeatContainer :isError :isActive>
            <input type="text" />
        </SearchFeatContainer>
        <span :class="{ 'is-error': isError }">Can't be empty</span>
    </div>
</template>

<style lang="css" scoped>
input {
    width: 100%;
    color: var(--gray-300);
}

span {
    color: var(--orange-200);
    font-size: 14px;
    display: inline-block;
    margin-top: 4px;
    opacity: 0;

    &.is-error {
        opacity: 1;
    }
}
</style>