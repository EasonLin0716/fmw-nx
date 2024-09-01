<script setup lang="ts">
import { ref } from 'vue';
import { getFeedbacks } from '../apis';
const feedbacks = ref([]);
getFeedbacks().then(data => {
    feedbacks.value = data;
});
</script>

<template>
    <main>
        <AppSidebar />
        <div class="wrapper">
            <IndexToolbar />
            <div v-if="feedbacks && feedbacks.length" class="feedback-container">
                <FeedbackCard v-for="(data, index) in feedbacks" :data="data" :key="index" />
            </div>
            <NoFeedback v-else />
        </div>
    </main>
</template>

<style lang="css" scoped>
main {
    display: flex;
    justify-content: center;
    gap: 30px;
    padding-top: 14px;
}

.wrapper {
    max-width: 825px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.feedback-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>