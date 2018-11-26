<template>
    <layout-basic>
        <div class="main" slot="main">
            <div class="page-title">
                <h1>index page title</h1>
            </div>
            <div class="page-content">
                <div class="copyright"></div>
            </div>
        </div>
    </layout-basic>
</template>

<script>
    import Layout from '../_layout/normal/Layout';
    import '@/public/static/css/index/index.scss';

    export default {
        name: 'Index',
        components: {
            'layout-basic': Layout
        },
        created() {
            document.title = 'index page';
        },
    }
</script>

<style scoped>

</style>
