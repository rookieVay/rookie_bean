<!-- 底部导航 -->
<template>
    <div class="footer">
        <ul class="footer-nav">
            <li>
                <router-link to="/movie">电影</router-link>
            </li>
            <li>
                <router-link to="/book">图书</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer {
        height: 3rem;
    }
    .footer-nav {
        display: flex;
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        border-top: 1px solid #eee;
        background: #fff;
    }
    .footer-nav li {
        flex: 1;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.2rem;
        text-align: center;
    }
    .footer-nav li a {
        display: block;
    }
</style>
