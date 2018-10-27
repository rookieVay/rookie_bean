<!-- 电影 -->
<template>
    <div class="main">
        <dl class="dl-box">
            <dt>
                <span class="dl-title">{{movieShowing.title}}</span>
                <router-link to="/movielist/movie_showing" class="dl-more" v-if="movieShowing.total">更多</router-link>
            </dt>
            <dd>
                <ul class="dl-ul">
                    <li v-for="(item, index) in movieShowing.list" :key="index">
                        <router-link :to="'/moviedetails/' + item.id">
                            <div class="img" :style="{ backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                            <div class="title">{{item.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </dd>
        </dl>
        <dl class="dl-box">
            <dt>
                <span class="dl-title">{{movieFreeStream.title}}</span>
                <router-link to="/movielist/movie_free_stream" class="dl-more" v-if="movieFreeStream.total">更多</router-link>
            </dt>
            <dd>
                <ul class="dl-ul">
                    <li v-for="(item, index) in movieFreeStream.list" :key="index">
                        <router-link :to="'/moviedetails/' + item.id">
                            <div class="img" :style="{ backgroundImage: 'url(' + item.cover.url + ')'}"></div>
                            <div class="title">{{item.title}}</div>
                        </router-link>
                    </li>
                </ul>
            </dd>
        </dl>
        <dl class="dl-box">
            <dt>
                <span class="dl-title">{{movieLatest.title}}</span>
                <router-link to="/movielist/movie_latest" class="dl-more" v-if="movieLatest.total">更多</router-link>
            </dt>
            <dd>
                <ul class="dl-ul">
                    <li v-for="(item, index) in movieLatest.list" :key="index">
                        <router-link :to="'/moviedetails/' + item.id">
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
        name: 'Movie',
        data() {
            return {
                movieShowing: {     //影院热映
                    title: '',
                    list: [],
                    total: 0
                },
                movieFreeStream: {      //免费在线
                    title: '',
                    list: [],
                    total: 0
                },
                movieLatest: {     //新片速递
                    title: '',
                    list: [],
                    total: 0
                }
            }
        },
        created() {
            this.getMovieShowing();
            this.getMovieFreeStream();
            this.getMovieLatest();
        },
        methods: {
            //获取影院热映
            getMovieShowing() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/subject_collection/movie_showing/items',
                    params: {
                        count: 8
                    }
                }).then((res) => {
                    $this.movieShowing.title = res.data.subject_collection.name;
                    $this.movieShowing.list = res.data.subject_collection_items;
                    $this.movieShowing.total = res.data.total;
                });
            },
            //获取免费在线
            getMovieFreeStream() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/subject_collection/movie_free_stream/items',
                    params: {
                        count: 8
                    }
                }).then((res) => {
                    $this.movieFreeStream.title = res.data.subject_collection.name;
                    $this.movieFreeStream.list = res.data.subject_collection_items;
                    $this.movieFreeStream.total = res.data.total;
                });
            },
            //获取新片速递
            getMovieLatest() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/subject_collection/movie_latest/items',
                    params: {
                        count: 8
                    }
                }).then((res) => {
                    $this.movieLatest.title = res.data.subject_collection.name;
                    $this.movieLatest.list = res.data.subject_collection_items;
                    $this.movieLatest.total = res.data.total;
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
