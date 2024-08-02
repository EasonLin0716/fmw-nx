<script setup lang="ts">
interface IFeedbackCard {
    upvotes: number;
    title: string;
    description: string;
    commentCount: number;
    filterText: string;
}
const props = defineProps<{
    data: IFeedbackCard
}>();
</script>

<template>
    <div class="feedback-card">
        <UpvoteInteractiveButton :count="data.upvotes" />
        <div class="info">
            <h2>{{ data.title }} </h2>
            <p>{{ data.description }}</p>
            <AppFilterButton>{{ data.filterText }}</AppFilterButton>
        </div>
        <div v-if="data.commentCount" class="comment-bar">
            <img src="/images/shared/icon-comments.svg" alt="對話框">
            <span>{{ data.commentCount }}</span>
        </div>
    </div>
</template>

<style lang="css" scoped>
.feedback-card {
    border-radius: 10px;
    background-color: var(--white);
    padding: 28px 32px;
    display: flex;
    align-items: start;
    gap: 40px;
    position: relative;
}

.info {
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