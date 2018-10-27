<!-- 顶部 -->
<template>
    <div class="header">
        <div class="header-title">仿豆</div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .header {
        height: 3rem;
    }
    .header-title {
        position: fixed;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        bottom: top;
        left: 0;
        font-size: 1.4rem;
        color: #198CFF;
        text-align: center;
        border-bottom: 1px solid #eee;
        background: #fff;
    }
</style>
