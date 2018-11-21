let utils = require('./utils/utils');
/**
 * @doc 编译信息基础配置文件
 */
module.exports = {
    appName: 'multiple-vue-page',
    appVersion: 'v1.0.0',
    appAuthor: 'Heanes',
    copyrightYear: utils.getFormatDate('yyyy'),
    generateTime: utils.getFormatDate(),
};
