<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
    count: number;
}>();
</script>

<template>
    <InteractiveButtonContainer class="container">
        <div class="arrow-icon"></div>
        <span>{{ props.count }}</span>
    </InteractiveButtonContainer>
</template>

<style scoped>
span {
    color: var(--gray-300);
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
}

.arrow-icon {
    width: 10px;
    height: 7px;
    background-image: url('/images/shared/icon-arrow-up-blue.svg');
}

.container {
    &.active {
        background-color: var(--blue-200);

        .arrow-icon {
            background-image: url('/images/shared/icon-arrow-up-white.svg');
        }

        span {
            color: var(--white);
        }
    }
}
</style>
