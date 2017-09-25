require.config({
    baseUrl : '/public/assets',
    paths : {
        jquery : 'jquery/jquery',
        cookie : 'jquery-cookie/jquery.cookie',     //
        template : 'artTemplate/template-web',      // 模板插件
        bootstrap : 'bootstrap/js/bootstrap.min',   // 模态框插件 等
        datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker',  // 日期格式
        language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min', // 日期语言
        validate : 'validate/jquery-validate',      //  验证插件？
        form : 'jquery-form/jquery.form',           //  表单形式？
        uploadify : 'uploadify/jquery.uploadify.min', // 图片上传插件
        region : 'jquery-region/jquery.region',      //
        ckeditor : 'ckeditor/ckeditor',             // 富文本插件
        util : '../js/util',                       // 自己封装的工具
        common : '../js/common',                   //
        login : '../js/login',
        settings : '../js/settings',
        teacherlist : '../js/teacher-list',
        teacheradd : '../js/teacher-add'
    },
    shim : {
        bootstrap : {
            deps : ['jquery']
        },
        language : {
            deps : ['jquery','datepicker']
        },
        validate : {
            deps : ['jquery']
        },
        uploadify : {
            deps : ['jquery']
        },
        ckeditor : {
            exports : 'CKEDITOR'
        }
    }
});