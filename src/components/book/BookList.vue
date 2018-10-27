<!-- 图书列表 -->
<template>
    <div class="main">
        <dl class="dl-box">
            <dt>
                <span class="dl-title">{{bookList.title}}</span>
            </dt>
            <dd>
                <ul class="dl-ul">
                    <li v-for="(item, index) in bookList.list" :key="index">
                        <router-link :to="'/bookdetails/' + item.id">
                            <div class="img" :style="{ backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                            <div class="title">{{item.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </dd>
        </dl>
    </div>
</template>

<script>
    export default {
        name: 'BookList',
        data() {
            return {
                bookList: {
                    title: '',
                    list: []
                }
            }
        },
        created() {
            this.getbookList();
        },
        methods: {
            //获取电影列表
            getbookList() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/subject_collection/' + $this.$route.params.type + '/items'
                }).then((res) => {
                    $this.bookList.title = res.data.subject_collection.name;
                    $this.bookList.list = res.data.subject_collection_items;
                });
            }
        }
    }
</script>

<style scoped>
    .dl-box dt {
        padding: 1rem;
    }
    .dl-box .dl-title {
        font-size: 1.4rem;
        color: #aaa;
    }
    .dl-box dd {
        width: 100%;
    }
    .dl-box .dl-ul {
        padding: 0 0.5rem;
        overflow: hidden;
    }
    .dl-box .dl-ul li {
        float: left;
        margin-bottom: 1rem;
        padding: 0 0.5rem;
        width: 50%;
        box-sizing: border-box;
    }
    .dl-box .dl-ul .img {
        width: 100%;
        overflow: hidden;
        background-size: cover;
        background-position: center;
    }
    .dl-box .dl-ul .img:before {
        content: "";
        float: left;
        margin-top: 142.85714%;
    }
    .dl-box .dl-ul .title {
        margin-top: 0.5rem;
        font-size: 1.1rem;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
