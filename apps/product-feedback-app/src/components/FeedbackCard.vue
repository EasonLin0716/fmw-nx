<script setup lang="ts">
import { computed } from 'vue';
import { filterData } from '../utils/constants';
interface IFeedbackCard {
    id: number;
    upvotes: number;
    title: string;
    description: string;
    commentCount: number;
    filterValue: number;
}
const props = defineProps<{
    data: IFeedbackCard
}>();
const filterText = computed<string>(() => {
    const found = filterData.find(item => item.value === props.data.filterValue);
    return found ? found.name : '';
})
</script>

<template>
    <CardContainer>
        <UpvoteInteractiveButton :count="data.upvotes" />
        <div class="info">
            <NuxtLink :to="`/feedback/${data.id}`">
                <h2>{{ data.title }}</h2>
            </NuxtLink>
            <p>{{ data.description }}</p>
            <AppFilterButton>{{ filterText }}</AppFilterButton>
        </div>
        <div v-if="data.commentCount" class="comment-bar">
            <img src="/images/shared/icon-comments.svg" alt="對話框">
            <span>{{ data.commentCount }}</span>
        </div>
    </CardContainer>
</template>

<style lang="css" scoped>

.info {
    a {
        text-decoration: none;
    }

    h2 {
        color: var(--gray-300);
        font-size: 18px;
        font-weight: 700;
        letter-spacing: -0.25px;
        line-height: 26px;
        margin-bottom: 4px;
    }

    p {
        color: var(--gray-400);
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 12px;
    }
}

.comment-bar {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    top: 50%;
    right: 32px;
    transform: translateY(-50%);

    span {
        color: var(--gray-300);
        font-size: 16px;
        font-weight: 700;
        letter-spacing: -0.222px;
        line-height: 23px;
    }
}
</style>