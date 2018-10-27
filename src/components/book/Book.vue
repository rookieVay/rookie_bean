<!-- 图书 -->
<template>
    <div class="main">
        <dl class="dl-box">
            <dt>
                <span class="dl-title">{{bookShowing.title}}</span>
                <router-link to="/booklist/book_fiction" class="dl-more" v-if="bookShowing.total">更多</router-link>
            </dt>
            <dd>
                <ul class="dl-ul">
                    <li v-for="(item, index) in bookShowing.list" :key="index">
                        <router-link :to="'/bookdetails/' + item.id">
                            <div class="img" :style="{ backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                            <div class="title">{{item.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </dd>
        </dl>
        <dl class="dl-box">
            <dt>
                <span class="dl-title">{{bookFreeStream.title}}</span>
                <router-link to="/booklist/book_nonfiction" class="dl-more" v-if="bookFreeStream.total">更多</router-link>
            </dt>
            <dd>
                <ul class="dl-ul">
                    <li v-for="(item, index) in bookFreeStream.list" :key="index">
                        <router-link :to="'/bookdetails/' + item.id">
                            <div class="img" :style="{ backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                            <div class="title">{{item.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </dd>
        </dl>
        <dl class="dl-box">
            <dt>
                <span class="dl-title">{{bookLatest.title}}</span>
                <router-link to="/booklist/market_product_book_mobile_web" class="dl-more" v-if="bookLatest.total">更多</router-link>
            </dt>
            <dd>
                <ul class="dl-ul">
                    <li v-for="(item, index) in bookLatest.list" :key="index">
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
        name: 'Book',
        data() {
            return {
                bookShowing: {     //最受关注的虚构类图书
                    title: '',
                    list: [],
                    total: 0
                },
                bookFreeStream: {      //最受关注的非虚构类图书
                    title: '',
                    list: [],
                    total: 0
                },
                bookLatest: {     //豆瓣书店
                    title: '',
                    list: [],
                    total: 0
                }
            }
        },
        created() {
            this.getbookShowing();
            this.getbookFreeStream();
            this.getbookLatest();
        },
        methods: {
            //获取最受关注的虚构类图书
            getbookShowing() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/subject_collection/book_fiction/items',
                    params: {
                        count: 8
                    }
                }).then((res) => {
                    $this.bookShowing.title = res.data.subject_collection.name;
                    $this.bookShowing.list = res.data.subject_collection_items;
                    $this.bookShowing.total = res.data.total;
                });
            },
            //获取最受关注的非虚构类图书
            getbookFreeStream() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/subject_collection/book_nonfiction/items',
                    params: {
                        count: 8
                    }
                }).then((res) => {
                    $this.bookFreeStream.title = res.data.subject_collection.name;
                    $this.bookFreeStream.list = res.data.subject_collection_items;
                    $this.bookFreeStream.total = res.data.total;
                });
            },
            //获取豆瓣书店
            getbookLatest() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/subject_collection/market_product_book_mobile_web/items',
                    params: {
                        count: 8
                    }
                }).then((res) => {
                    $this.bookLatest.title = res.data.subject_collection.name;
                    $this.bookLatest.list = res.data.subject_collection_items;
                    $this.bookLatest.total = res.data.total;
                });
            }
        }
    }
</script>

<style scoped>
    .dl-box {
        margin-bottom: 1.5rem;
    }
    .dl-box dt {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0.5rem 1rem;
    }
    .dl-box .dl-title {
        font-size: 1.2rem;
    }
    .dl-box .dl-more {
        font-size: 1rem;
        color: #198CFF;
    }
    .dl-box dd {
        width: 100%;
        overflow: hidden;
    }
    .dl-box .dl-ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: middle;
        -ms-flex-align: middle;
        align-items: middle;
        overflow-y: auto;
    }
    .dl-box .dl-ul::-webkit-scrollbar {
        display: none;
    }
    .dl-box .dl-ul li {
        -ms-flex-negative: 0;
        flex-shrink: 0;
        padding: 0 0.5rem;
        width: 100px;
    }
    .dl-box .dl-ul li:first-child {
        padding-left: 1rem;
    }
    .dl-box .dl-ul li:last-child {
        padding-right: 1rem;
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
