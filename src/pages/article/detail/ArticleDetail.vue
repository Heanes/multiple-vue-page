<template>
    <layout-basic>
        <div class="main" slot="main">
            <div class="page-title">
                Article detail page
            </div>
            <div class="article-detail">
                <div class="article-title">
                    <h2>article title</h2>
                </div>
                <div class="article-content">
                    <p>page content paragraph</p>
                </div>
            </div>
        </div>
    </layout-basic>
</template>

<script>
    import Layout from '../../_layout/normal/Layout';

    import '@/public/static/css/common.scss';
    import '@/public/static/css/article/detail.scss';

    export default {
        name: 'ArticleDetail',
        components: {
            'layout-basic': Layout
        },
        created() {
            document.title = 'Article detail page';
        },
    }
</script>

<style scoped>

</style>
