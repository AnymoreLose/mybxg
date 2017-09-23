define(['jquery','template','util'],function($,template,util) {

    console.dir(location);
    var tcId = util.qs('tc_id');
    if(tcId) {
        //存在 编辑操作
        $.ajax({
            type : 'get',
            url : '/api/teacher/edit',
            data : {tc_id : tcId},
            dataType : 'json',
            success : function(data) {
                //console.log(data);
                // 解析数据 渲染页面
                var html = template('teacherTpl',data.result);
                $('#teacherInfo').html(html);
            }
        })
    }else {
        //不存在 添加操作
        var html = template('teacherTpl',{});
        $('#teacherInfo').html(html);
    }

});