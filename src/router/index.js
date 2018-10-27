import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/movie'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '主文件' },
            children:[
                {
                    path: '/movie',
                    name: 'Movie',
                    component: resolve => require(['../components/movie/Movie.vue'], resolve),
                    meta: { title: '电影' }
                },
                {
                    path: '/movielist/:type',
                    name: 'MovieList',
                    component: resolve => require(['../components/movie/MovieList.vue'], resolve),
                    meta: { title: '电影列表' }
                },
                {
                    path: '/moviedetails/:id',
                    name: 'MovieDetails',
                    component: resolve => require(['../components/movie/MovieDetails.vue'], resolve),
                    meta: { title: '电影详情' }
                },
                {
                    path: '/book',
                    name: 'Book',
                    component: resolve => require(['../components/book/Book.vue'], resolve),
                    meta: { title: '图片' }
                },
                {
                    path: '/booklist/:type',
                    name: 'BookList',
                    component: resolve => require(['../components/book/BookList.vue'], resolve),
                    meta: { title: '图片列表' }
                },
                {
                    path: '/bookdetails/:id',
                    name: 'BookDetails',
                    component: resolve => require(['../components/book/BookDetails.vue'], resolve),
                    meta: { title: '图片详情' }
                }
            ]
        }
    ]
})
