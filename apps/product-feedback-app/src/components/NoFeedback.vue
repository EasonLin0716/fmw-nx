<script setup lang="ts"></script>

<template>
    <div class="no-feedback">
        <img src="/images/suggestions/illustration-empty.svg" alt="放大鏡" />
        <h2 class="title">There is no feedback yet.</h2>
        <p class="content">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to
            improve our app.</p>
        <AddFeedback />
    </div>
</template>

<style lang="css" scoped>
.no-feedback {
    display: flex;
    padding-top: 111px;
    padding-bottom: 110px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);
    border-radius: 10px;

    img {
        margin-bottom: 53px;
        width: 130px;
        height: auto;
        opacity: 0.5;
    }

    .title {
        color: var(--gray-300);
        font-size: 24px;
        line-height: 35px;
        font-weight: 700;
        margin-bottom: 16px;
        letter-spacing: -0.333px;
    }

    .content {
        max-width: 410px;
        color: var(--gray-400);
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 48px;
        text-align: center;
    }
}
</style>