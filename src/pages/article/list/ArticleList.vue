<template>
    <layout-basic>
        <div class="main" slot="main">
            <div class="page-title">
                Article list page
            </div>
            <div class="article-list">
                <div class="title">
                    article list
                </div>
                <ul>
                    <li><a href="../article/detail.html">article one</a></li>
                    <li><a href="../article/detail.html">article two</a></li>
                </ul>
            </div>
        </div>
    </layout-basic>
</template>

<script>
    import Layout from '../../_layout/normal/Layout';
    import '@/public/static/css/article/list.scss';
    import '@/public/static/css/article/detail.scss';

    export default {
        name: 'ArticleList',
        components: {
            'layout-basic': Layout
        },
        created() {
            document.title = 'Article list page';
        }
    }
</script>

<style scoped>

</style>
