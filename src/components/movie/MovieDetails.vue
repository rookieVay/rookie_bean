<!-- 电影详情 -->
<template>
    <div class="main">
        <div class="details-box">
            <h3 class="details-title">{{movieDetails.title}}</h3>
            <div class="details-main">
                <div class="details-correlation">
                    <div class="to">
                        <span class="grade" v-if="movieDetails.grade">评分：{{movieDetails.grade}}</span>
                        <span class="evaluate" v-if="movieDetails.evaluate">{{movieDetails.evaluate}}人评价</span>
                    </div>
                    <div class="short-info">{{movieDetails.shortInfo}}</div>
                </div>
                <div class="details-img">
                    <img :src="movieDetails.img" />
                </div>
            </div>
            <div class="details-tag" v-if="movieDetails.tags.length">
                <dt>影片标签</dt>
                <dd>
                    <span v-for="(item, index) in movieDetails.tags" :key="index">{{item.name}}</span>
                </dd>
            </div>
            <dl class="details-desc" v-if="movieDetails.desc">
                <dt>剧情简介</dt>
                <dd v-html="movieDetails.desc"></dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MovieDetails',
        data() {
            return {
                movieDetails: {
                    title: '',      //标题
                    img: '',        //图片
                    grade: '',      //评分
                    evaluate: '',   //评价
                    shortInfo: '',  //相关
                    tags: [],        //标签
                    desc: ''        //描述
                }
            }
        },
        created() {
            this.getMovieDetails();
        },
        methods: {
            //获取电影详情
            getMovieDetails() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/elessar/subject/' + $this.$route.params.id,
                }).then((res) => {
                    $this.movieDetails.title = res.data.title;
                    $this.movieDetails.img = res.data.cover_img.url;
                    $this.movieDetails.grade = res.data.extra.rating_group.rating.value;
                    $this.movieDetails.evaluate = res.data.extra.rating_group.rating.count;
                    $this.movieDetails.shortInfo = res.data.extra.short_info;
                    $this.movieDetails.tags = res.data.tags;
                    $this.movieDetails.desc = res.data.desc;
                });
            }
        }
    }
</script>

<style scoped>
    .details-box {
        padding: 1rem;
    }
    .details-title {
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
        font-weight: normal;
    }
    .details-main {
        display: flex;
        margin-bottom: 1rem;
    }
    .details-main .details-correlation {
        flex: 1;
        margin-right: 1rem;
    }
    .details-main .to {
        display: flex;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        color: #aaa;
        justify-content :space-between;
    }
    .details-main .short-info {
        font-size: 1.2rem;
        line-height: 1.8rem;
    }
    .details-main .details-img {
        width: 35%;
    }
    .details-main .details-img img {
        max-width: 100%;
    }
    .details-tag {
        margin-bottom: 1rem;
    }
    .details-tag dt {
        margin-bottom: 0.5rem;
        font-size: 1.2rem;
        color: #aaa;
    }
    .details-tag span {
        display: inline-block;
        margin: 0.5rem;
        padding: 0 1rem;
        height: 1.8rem;
        line-height: 1.8rem;
        font-size: 0.9rem;
        color: #198CFF;
        border: 1px solid #198CFF;
        border-radius: 0.9rem;
    }
    .details-desc dt {
        font-size: 1.2rem;
        color: #aaa;
    }
    .details-desc dd {
        margin-top: 1rem;
        line-height: 1.8rem;
        font-size: 1.1rem;
    }
</style>
