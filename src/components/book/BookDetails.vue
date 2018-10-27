<!-- 图书详情 -->
<template>
    <div class="main">
        <div class="details-box">
            <h3 class="details-title">{{bookDetails.title}}</h3>
            <div class="details-main">
                <div class="details-correlation">
                    <div class="to">
                        <span class="grade" v-if="bookDetails.grade">评分：{{bookDetails.grade}}</span>
                        <span class="evaluate" v-if="bookDetails.evaluate">{{bookDetails.evaluate}}人评价</span>
                    </div>
                    <div class="short-info">{{bookDetails.shortInfo}}</div>
                </div>
                <div class="details-img">
                    <img :src="bookDetails.img" />
                </div>
            </div>
            <div class="details-tag" v-if="bookDetails.tags.length">
                <dt>图书标签</dt>
                <dd>
                    <span v-for="(item, index) in bookDetails.tags" :key="index">{{item.name}}</span>
                </dd>
            </div>
            <dl class="details-desc" v-if="bookDetails.desc">
                <dt>图书简介</dt>
                <dd v-html="bookDetails.desc"></dd>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookDetails',
        data() {
            return {
                bookDetails: {
                    title: '',      //标题
                    img: '',        //图片
                    grade: '',      //评分
                    evaluate: '',   //评价
                    shortInfo: '',  //相关
                    tags: [],       //标签
                    desc: ''        //描述
                }
            }
        },
        created() {
            this.getbookDetails();
        },
        methods: {
            //获取电影详情
            getbookDetails() {
                let $this = this;
                $this.$axios({
                    method: 'get',
                    url: '/douban/rexxar/api/v2/elessar/subject/' + $this.$route.params.id,
                }).then((res) => {
                    $this.bookDetails.title = res.data.title;
                    $this.bookDetails.img = res.data.cover_img.url;
                    $this.bookDetails.grade = res.data.extra.rating_group.rating.value;
                    $this.bookDetails.evaluate = res.data.extra.rating_group.rating.count;
                    $this.bookDetails.shortInfo = res.data.extra.short_info;
                    $this.bookDetails.tags = res.data.tags;
                    $this.bookDetails.desc = res.data.desc;
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
