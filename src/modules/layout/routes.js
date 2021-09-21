const PostsPage = ()=> import('../posts/posts.vue');
const CommentsPage = ()=> import('../comments-page/comments-page.vue');
const ViewPost = ()=> import('../view-post/view-post.vue');
const UpdatePost = ()=> import('../update-post/update-post.vue');
const CreatePost = ()=> import('../create-post/create-post.vue');



const appRoutes = [
    {
        path: '/posts',
        component: PostsPage
    },
    {
        path: '/comments-page/:id',
        component: CommentsPage
    },
    {
        path: '/view-post/:id',
        component: ViewPost
    },
    {
        path: '/update/:id',
        component: UpdatePost
    },
    {
        path: '/create-post',
        component: CreatePost
    },
]

export default appRoutes
